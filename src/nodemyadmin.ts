(function() {
	'use strict';

	var angular = require('angular');

	var app = angular.module('nodemyadmin', [
		require('angular-ui-router')
	]);

	app.controller('SigninCtrl', require('./signin/signin-controller'));

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/pagenotfound');

		$stateProvider
			.state('signin', {
				url: '/sin',
				templateUrl: './app/signin/signin-tpl.html',
				controller: 'SigninCtrl',
				controllerAs: 'signin'
			})
			.state('dboard', {
				url: '/dboard',
				templateUrl: './app/dashboard/dashboard-tpl.html',
				controller: 'DashboardCtrl',
				controllerAs: 'dboard'
			});
	});

})();