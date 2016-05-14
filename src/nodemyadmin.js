'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

let nodemyadmin = angular.module('nodemyadmin', [uiRouter]);

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
