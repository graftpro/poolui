'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "GRAFTpool.online",
		api_url : 'https://api2.graftpool.online/api',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});