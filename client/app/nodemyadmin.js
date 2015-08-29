(function() {
	'use strict';

	var angular = require('angular');

	var app = angular.module('forkgen', [
		require('angular-ui-router')
	]);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/pagenotfound')

		$stateProvider
			.state('login', {

			})
			.state('dashboard', {

			})
			.state('')

	});
})();