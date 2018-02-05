const Datastore = require('@google-cloud/datastore');

/**
 * Manage a connection to Apache Cassandra
 *
 * @param {Object} DataStoreConfig
 * @return {Object}
 * @api private
 */
var Connection = function(DataStoreConfig, cb) {
	console.log('the var is ' + DataStoreConfig);
	console.log('projectId ' + DataStoreConfig.projectId);
	console.log('projectId text ' + ('projectId' in DataStoreConfig));
	if (!('projectId' in DataStoreConfig) && DataStoreConfig.projectId == "") {
		throw new Error('the projectId can not be empty');
	}
	
	// Creates a client
	var client = new Datastore({
		projectId: DataStoreConfig.projectId,
	});
	
	console.log('after the creation of the client');
	cb(null, client);
};

module.exports = Connection;