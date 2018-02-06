/**
 * Test dependencies
 */
var Adapter = require('../../');
var mocha = require('mocha');
const { describe, it, before, after } = require('mocha');
var Waterline = require('waterline');
var Users = require('../setup/collectionUsers');

describe('registerCollection', function () {
	var model;

	  before(function(done) {

	    this.timeout(10000);

	    var waterline = new Waterline();

	    var config = {

	      adapters: {
	    	  sails_gcdatastore: adapter
	      },

	      connections: {
	        semantic: {
	          adapter: 'sails-gcdatastore',
	          contactPoints: [ process.env.WATERLINE_ADAPTER_TESTS_HOST || '127.0.0.1' ],
	          user: process.env.WATERLINE_ADAPTER_TESTS_USER || 'root',
	          password: process.env.WATERLINE_ADAPTER_TESTS_PASSWORD || '',
	          keyspace: process.env.WATERLINE_ADAPTER_TESTS_DATABASE || 'test'
	        }
	      },

	      defaults: {
	        migrate: 'drop'
	      }

	    };

	    waterline.loadCollection(Users);

	    waterline.initialize(config, function(err, models) {
	      if(err) return done();
	      model = models.collections.users;
	      done();
	    });
	  });
	
	console.log('describe method it has bean called for the registerCollection');
	
	/*
	var waterline = new Waterline();
	waterline.loadCollection(Product);
	*/
	
	it('should not hang or encounter any errors', function (done) {
		Adapter.registerCollection({
			identity: 'foo',
			projectId: 'quiverentregasrapidas'
		}, {Users},done);
	});	
	
	it('describe correctly the entity', function (done) {
		Adapter.describe('foo','Users',done);		
	});	
});