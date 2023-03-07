import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const outputDefaults = {
	name: 'DeepModel',
	globals: {
		backbone: 'Backbone',
		jquery: '$',
		underscore: '_'
	}
}

const outputTerser = {
	plugins: [terser()]
};

export default {
	input: 'src/browser.mjs',
	external: [
		'backbone',
		'jquery',
		'underscore'
	],
	output: [{
		...outputDefaults,
		format: 'umd',
		file: 'dist/backbone-deep-model-umd.js'
	},
	{
		...outputDefaults,
		...outputTerser,
		format: 'umd',
		file: 'dist/backbone-deep-model-umd-min.js'
	},
	{
		...outputDefaults,
		format: 'es',
		file: 'dist/backbone-deep-model-es.js',
	},
	{
		...outputDefaults,
		...outputTerser,
		format: 'es',
		file: 'dist/backbone-deep-model-es-min.js'
	},
	{
		...outputDefaults,
		format: 'iife',
		file: 'dist/backbone-deep-model-iife.js',
	},
	{
		...outputDefaults,
		...outputTerser,
		format: 'iife',
		file: 'dist/backbone-deep-model-iife-min.js'
	}],
	plugins: [
		nodeResolve(),
		commonjs()
	]
}
