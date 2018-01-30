const Datastore = require('@google-cloud/datastore');

/**
 * Manage a connection to Apache Cassandra
 *
 * @param {Object} DataStoreConfig
 * @return {Object}
 * @api private
 */
var Connection = function(DataStoreConfig, cb) {
	
	if (('projectId' in DataStoreConfig) && DataStoreConfig.projectId == "") {
		throw new Error('the projectId can not be empty');
	}
	
	// Creates a client
	var client = new Datastore({
		projectId: projectId,
	});
	
	cb(null, client);
};

module.exports = Connection;