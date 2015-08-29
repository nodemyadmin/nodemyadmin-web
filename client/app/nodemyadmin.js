(function() {
	'use strict';

	var angular = require('angular');

	var app = angular.module('forkgen', [
		require('angular-ui-router')
	]);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/pagenotfound');

		$stateProvider
			.state('signin', {
				url: '/sin'
			})
			.state('signout', {
				url: '/sout'
			})
			.state('dboard', {
				url: '/dboard'
			})
			.state('dbs', {
				url: '/dbs'
			})
			.state('db', {
				url: '/dbs/:dbName'
			})
			.state('tbls', {
				url: '/tbls'
			})
			.state('tbl', {
				url: '/tbls/:tblName'
			})
			.state('dsql', {
				url: '/dsql'
			})
			.state('ipt', {
				url: '/ipt'
			})
			.state('users', {
				url: '/users'
			})
			.state('user', {
				url: '/users/:uname'
			});
	});

	app.run(function($rootScope, $state) {
		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
			event.preventDefault();
			if (error === 'AUTH_REQUIRED') {
				$state.go('signin');
			}
		});
	});
})();