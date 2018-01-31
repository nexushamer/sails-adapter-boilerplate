/**
 * Test dependencies
 */
var Adapter = require('../../');
console.log("register file");
console.log(Adapter);

//Adapter.registerCollection();

describe('registerCollection', function () {
	console.log('describe method it has bean called for the registerCollection');
	
	it('should not hang or encounter any errors', function (done) {
		Adapter.registerCollection({
			identity: 'foo'
		}, done);
	});	
	
});