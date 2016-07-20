'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import SignInRoute from './signin-route';
import SignInCtrl from './signin-ctrl';
import SignInService from './signin-service';

export default angular.module('nodemyadmin.signin', [uiRouter, ngCookies, SignInService])
  .config(['$stateProvider', SignInRoute])
  .controller('SignInCtrl', [
      '$rootScope',
      '$scope',
      '$cookies',
      'SignInService',
      SignInCtrl])
  .name;