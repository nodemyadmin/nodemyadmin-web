'use strict';

import './signin.less';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import SignInRoute from './signin-route';
import SignInCtrl from './signin-ctrl';
import SignInService from './signin-service';

export default angular.module('nodemyadmin.signin', [uiRouter, ngCookies, SignInService])
  .config(['$stateProvider', SignInRoute])
  .controller('SignInCtrl', [
      '$scope',
      '$cookies',
      '$location',
      'SignInService',
      SignInCtrl])
  .name;
