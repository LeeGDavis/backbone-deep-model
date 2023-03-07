/**'
 * @author Lee Davis
 *
 * @requires _
 * @requires Backbone
 */

import Backbone from 'backbone';
import _ from 'underscore';
import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';


/**
 * Takes a nested object and returns a shallow object keyed with the path names
 * e.g. { "level1.level2": "value" }
 *
 * @param  {Object}      Nested object e.g. { level1: { level2: 'value' } }
 * @return {Object}      Shallow object with path names e.g. { 'level1.level2': 'value' }
 */
const objToPaths = function (obj) {
	let ret = {},
		separator = DeepModel.keyPathSeparator;

	for (let key in obj) {
		let val = obj[key];

		if (val && (val.constructor === Object || val.constructor === Array) && !_.isEmpty(val)) {
			//Recursion for embedded objects
			const obj2 = objToPaths(val);

			for (let key2 in obj2) {
				let val2 = obj2[key2];

				ret[key + separator + key2] = val2;
			}
		} else {
			ret[key] = val;
		}
	}

	return ret;
}

/**
 * [getNested description]
 * @param  {object} obj           to fetch attribute from
 * @param  {string} path          path e.g. 'user.name'
 * @param  {[type]} return_exists [description]
 * @return {object}               [description]
 */
const getNested = function (obj, path, return_exists) {
	const separator = DeepModel.keyPathSeparator;

	const fields = path ? path.split(separator) : [];
	let result = obj;
	return_exists || (return_exists === false);
	for (let i = 0, n = fields.length; i < n; i++) {
		if (return_exists && !_.has(result, fields[i])) {
			return false;
		}
		result = result[fields[i]];

		if (result == null && i < n - 1) {
			result = {};
		}

		if (typeof result === 'undefined') {
			if (return_exists) {
				return true;
			}
			return result;
		}
	}
	if (return_exists) {
		return true;
	}
	return result;
}

/**
 * @param {Object} obj                Object to fetch attribute from
 * @param {String} path               Object path e.g. 'user.name'
 * @param {Object} [options]          Options
 * @param {Boolean} [options.unset]   Whether to delete the value
 * @param {Mixed}                     Value to set
 */
const setNested = function(obj, path, val, options) {
	options = options || {};

	const separator = DeepModel.keyPathSeparator;

	const fields = path ? path.split(separator) : [];
	let result = obj;
	for (let i = 0, n = fields.length; i < n && result !== undefined; i++) {
		const field = fields[i];

		//If the last in the path, set the value
		if (i === n - 1) {
			options.unset ? delete result[field] : result[field] = val;
		} else {
			//Create the child object if it doesn't exist, or isn't an object
			if (typeof result[field] === 'undefined' || !_.isObject(result[field])) {
				// If trying to remove a field that doesn't exist, then there's no need
				// to create its missing parent (doing so causes a problem with
				// hasChanged()).
				if (options.unset) {
					delete result[field]; // in case parent exists but is not an object
					return;
				}
				let nextField = fields[i + 1];

				// create array if next field is integer, else create object
				result[field] = /^\d+$/.test(nextField) ? [] : {};
			}

			//Move onto the next part of the path
			result = result[field];
		}
	}
}

const deleteNested = function(obj, path) {
	setNested(obj, path, null, {
		unset: true
	});
}

const DeepModel = Backbone.Model.extend({

	// Override constructor
	// Support having nested defaults by using _.deepExtend instead of _.extend
	constructor: function(attributes, options) {
		let attrs = attributes || {};
		this.cid = _.uniqueId('c');
		this.attributes = {};
		if (options && options.collection) this.collection = options.collection;
		if (options && options.parse) attrs = this.parse(attrs, options) || {};
    attrs = merge({}, cloneDeep(_.result(this, 'defaults')), attrs);
		this.set(attrs, options);
		this.changed = {};
		this.initialize.apply(this, arguments);
	},

	// Return a copy of the model's `attributes` object.
	toJSON: function(options) {
		return merge({}, this.attributes);
	},

	// Override get
	// Supports nested attributes via the syntax 'obj.attr' e.g. 'author.user.name'
	get: function(attr) {
		return getNested(this.attributes, attr);
	},

	// Override set
	// Supports nested attributes via the syntax 'obj.attr' e.g. 'author.user.name'
	set: function(key, val, options) {
		let attrs;
		if (key == null) return this;

		// Handle both `"key", value` and `{key: value}` -style arguments.
		if (typeof key === 'object') {
			attrs = key;
			options = val || {};
		} else {
			(attrs = {})[key] = val;
		}

		options || (options = {});

		// Run validation.
		if (!this._validate(attrs, options)) return false;

		// Extract attributes and options.
		const unset = options.unset;
		const silent = options.silent;
		const changes = [];
		const changing = this._changing;
		this._changing = true;

		if (!changing) {
			this._previousAttributes = merge({}, this.attributes); //<custom>: Replaced _.clone with _.deepClone
			this.changed = {};
		}
		const current = this.attributes
		const prev = this._previousAttributes;

		// Check for changes of `id`.
		if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

		//<custom code>
		attrs = objToPaths(attrs);
		//</custom code>

		// For each `set` attribute, update or delete the current value.
		for (let attr in attrs) {
			val = attrs[attr];

			//<custom code>: Using getNested, setNested and deleteNested
			if (!_.isEqual(getNested(current, attr), val)) changes.push(attr);
			if (!_.isEqual(getNested(prev, attr), val)) {
				setNested(this.changed, attr, val);
			} else {
				deleteNested(this.changed, attr);
			}
			unset ? deleteNested(current, attr) : setNested(current, attr, val);
			//</custom code>
		}

		// Trigger all relevant attribute changes.
		if (!silent) {
			if (changes.length) this._pending = true;

			//<custom code>
			const separator = DeepModel.keyPathSeparator;
			const alreadyTriggered = {}; // * @restorer

			for (let i = 0, l = changes.length; i < l; i++) {
				let key = changes[i];

				if (!alreadyTriggered.hasOwnProperty(key) || !alreadyTriggered[key]) { // * @restorer
					alreadyTriggered[key] = true; // * @restorer
					this.trigger('change:' + key, this, getNested(current, key), options);
				} // * @restorer

				const fields = key.split(separator);

				//Trigger change events for parent keys with wildcard (*) notation
				for (let n = fields.length - 1; n > 0; n--) {
					const parentKey = fields.slice(0, n).join(separator);
					const wildcardKey = parentKey + separator + '*';

					if (!alreadyTriggered.hasOwnProperty(wildcardKey) || !alreadyTriggered[wildcardKey]) { // * @restorer
						alreadyTriggered[wildcardKey] = true; // * @restorer
						this.trigger('change:' + wildcardKey, this, getNested(current, parentKey), options);
					} // * @restorer

					// + @restorer
					if (!alreadyTriggered.hasOwnProperty(parentKey) || !alreadyTriggered[parentKey]) {
						alreadyTriggered[parentKey] = true;
						this.trigger('change:' + parentKey, this, getNested(current, parentKey), options);
					}
					// - @restorer
				}
				//</custom code>
			}
		}

		if (changing) return this;
		if (!silent) {
			while (this._pending) {
				this._pending = false;
				this.trigger('change', this, options);
			}
		}
		this._pending = false;
		this._changing = false;
		return this;
	},

	// Clear all attributes on the model, firing `"change"` unless you choose
	// to silence it.
	clear: function(options) {
		const attrs = {};
		const shallowAttributes = objToPaths(this.attributes);
		for (var key in shallowAttributes) attrs[key] = void 0;
		return this.set(attrs, _.extend({}, options, {
			unset: true
		}));
	},

	// Determine if the model has changed since the last `"change"` event.
	// If you specify an attribute name, determine if that attribute has changed.
	hasChanged: function(attr) {
		if (attr == null) {
			return !_.isEmpty(this.changed);
		}
		return getNested(this.changed, attr) !== undefined;
	},

	// Return an object containing all the attributes that have changed, or
	// false if there are no changed attributes. Useful for determining what
	// parts of a view need to be updated and/or what attributes need to be
	// persisted to the server. Unset attributes will be set to undefined.
	// You can also pass an attributes object to diff against the model,
	// determining if there *would be* a change.
	changedAttributes: function(diff) {
		//<custom code>: objToPaths
		if (!diff) return this.hasChanged() ? objToPaths(this.changed) : false;
		//</custom code>

		let old = this._changing ? this._previousAttributes : this.attributes;

		//<custom code>
		diff = objToPaths(diff);
		old = objToPaths(old);
		//</custom code>

		let val, changed = false;
		for (let attr in diff) {
			if (_.isEqual(old[attr], (val = diff[attr]))) continue;
			(changed || (changed = {}))[attr] = val;
		}
		return changed;
	},

	// Get the previous value of an attribute, recorded at the time the last
	// `"change"` event was fired.
	previous: function(attr) {
		if (attr == null || !this._previousAttributes) {
			return null;
		}
		//<custom code>
		return getNested(this._previousAttributes, attr);
		//</custom code>
	},

	// Get all of the attributes of the model at the time of the previous
	// `"change"` event.
	previousAttributes: function() {
		return merge({}, this._previousAttributes);
	}
});

//Config; override in your app to customise
DeepModel.keyPathSeparator = '.';


export default DeepModel;
