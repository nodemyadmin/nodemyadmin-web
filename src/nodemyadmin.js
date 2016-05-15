'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import PageNotFound from './app/Errors/PageNotFound.html';
import PageNotFoundCharacter from './assets/imgs/page-not-found.png';
import './app/Errors/PageNotFound.less';

let nodemyadmin = angular.module('nodemyadmin', [uiRouter]);

nodemyadmin.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/pagenotfound');

  $stateProvider
    .state('/', {
      url: '/',
      template: '<h1>Dashboard</h1>'
    })
    .state('databases', {
      url: '/databases',
      template: '<h1>Databases</h1>'
    })
    .state('sql', {
      url: '/sql',
      template: '<h1>SQL</h1>'
    })
    .state('users', {
      url: '/users',
      template: '<h1>User Accounts</h1>'
    })
    .state('tables', {
      url: '/tables',
      template: '<h1>Tables</h1>'
    })
    .state('settings', {
      url: '/settings',
      template: '<h1>Settings</h1>'
    })
    .state('pagenotfound', {
      url: '/pagenotfound',
      templateUrl: 'PageNotFound',
      controller: function($scope) {
        $scope.PageNotFoundCharacter = PageNotFoundCharacter;
      }
    });
});
