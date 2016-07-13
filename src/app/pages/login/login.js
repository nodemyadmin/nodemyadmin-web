'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import LoginRoute from './login-route';
import LoginCtrl from './login-ctrl';

export default angular.module('nodemyadmin.login', [uiRouter])
  .config(['$stateProvider', LoginRoute])
  .controller('LoginCtrl', LoginCtrl)
  .name;
