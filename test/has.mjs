import DeepModel from "../src/backbone-deep-model.mjs";
import { expect } from "chai";
import bioData from './fixtures/bioData.json' assert { type: 'json' };

describe('DeepModel', function() {
	describe('#has', function() {
		it('should has: Check if model has deep key', function() {
			const model = new DeepModel(bioData);
			expect(model.has('user.name.last')).to.be.true;
		})

		it("has: Don't find nonexistent key", function() {
			const model = new DeepModel(bioData);
			expect(model.has('user.turtleneck')).to.be.false;
		});
	});
});
