const _ = require('lodash');
const async = require('async');
const Datastore = require('@google-cloud/datastore');

var Entities = function(definition, client) {
	
	this.client = client;
	
	this._parseDefinition(definition);
};

Entities.prototype._parseDefinition = function(definition) {

  

};

module.exports = Entities;