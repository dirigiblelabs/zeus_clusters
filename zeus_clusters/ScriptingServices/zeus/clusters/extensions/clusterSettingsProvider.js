/* globals $ */
/* eslint-env node, dirigible */

var clustersDao = require('zeus/clusters/dao/clustersDao');

exports.getSettings = function() {
	var clusterDefault = clustersDao.getDefault();
	if (clusterDefault === null || clusterDefault === undefined) {
		throw new Error('No cluster registered as default');
	}
	
	return {
		'server': 'https://api.' + clusterDefault.cluster_region +  '.' + clusterDefault.cluster_account + '.' + clusterDefault.cluster_domain,
		'token': clusterDefault.cluster_token,
		'namespace': clusterDefault.cluster_namespace
	};
	
};
