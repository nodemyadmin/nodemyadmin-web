'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'angular-loading-bar/build/loading-bar.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loadingBar from 'angular-loading-bar';

let nodemyadmin = angular.module('nodemyadmin', [uiRouter, loadingBar]);

nodemyadmin.config(['cfpLoadingBarProvider'], function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
});

nodemyadmin.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      template: '<h1>Dashboard</h1>'
    })
    .state('dashboard', {
      url: '/dashboard',
      template: '<h1>Dashboard</h1>'
    }).state('about', {
      url: '/about',
      template: '<h1>About</h1>'
    });
});
