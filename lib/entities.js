const _ = require('lodash');
const async = require('async');
const Datastore = require('@google-cloud/datastore');

var Entities = function(kindDefinition, client) {
	console.log('kind ' + kindDefinition);
	console.log('identity ' + kindDefinition.identity);
	console.log('tableName ' + kindDefinition.tableName);
	
	this.client = client;
	
	this._parseKindDefinition(kindDefinition);
};

Entities.prototype._parseKindDefinition = function(definition) {
	console.log('table name' + definition);
	
	if (!definition.tableName) {
	    definition.tableName = definition.identity.toLowerCase();
	}
	
};

Entities.prototype.describeTable = function(describe) {
	console.log('describe tyable');
	
	
	
	describe();
};

module.exports = Entities;