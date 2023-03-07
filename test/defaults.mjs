'use strict';
import DeepModel from "../src/backbone-deep-model.mjs";
import Backbone from "backbone";
import { expect } from "chai";

describe('DeepModel', function() {
	describe('#defaults', function() {
		it('defaults: with deep attributes', function() {
			const DefaultsModel = DeepModel.extend({
				defaults: {
					details: {
						name: {
							last: 'Smith',
							initial: 'J'
						}
					}
				}
			});

			const model1 = new DefaultsModel({
				details: {
					name: {
						first: 'John',
						initial: 'Z'
					}
				}
			});

			const model2 = new DefaultsModel({
			});

			expect(model1.get('details.name.first')).to.equal('John');
			expect(model1.get('details.name.last')).to.equal('Smith');
			expect(model1.get('details.name.initial')).to.equal('Z');
			expect(model2.get('details.name.first')).to.be.undefined;
			expect(model2.get('details.name.last')).to.equal('Smith');
			expect(model2.get('details.name.initial')).to.equal('J');
		});


		it('defaults: does not cause a problem with a collection in an attribute', function() {
			const Model = DeepModel.extend({
				defaults: {
					foo: 'bar'
				}
			});

			const model = new Model({
				collection: new Backbone.Collection()
			});

			expect(model.get('collection')).is.instanceof(Backbone.Collection);
		});

	});
});
