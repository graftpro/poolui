'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "GraftPro.com",
		api_url : 'https://api.graftpro.com/api',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});