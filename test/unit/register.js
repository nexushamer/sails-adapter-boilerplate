/**
 * Test dependencies
 */
var Adapter = require('../../');
var mocha = require('mocha');
const { describe, it, before, after } = require('mocha');

describe('registerCollection', function () {
	console.log('describe method it has bean called for the registerCollection');
	
	it('should not hang or encounter any errors', function (done) {
		Adapter.registerCollection({
			identity: 'foo',
			projectId: 'quiverentregasrapidas'
		}, {},done);
	});	
	
});