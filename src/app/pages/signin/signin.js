'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SignInRoute from './signin-route';
import SignInCtrl from './signin-ctrl';

export default angular.module('nodemyadmin.signin', [uiRouter])
  .config(['$stateProvider', SignInRoute])
  .controller('SignInCtrl', SignInCtrl)
  .name;
