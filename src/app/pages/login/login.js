'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import LoginRoute from './login-route';
import LoginCtrl from './login-ctrl';

import LoginDirective from '../../components/login/login-directive';

export default angular.module('nodemyadmin.login', [uiRouter, LoginDirective])
  .config(['$stateProvider', LoginRoute])
  .controller('LoginCtrl', LoginCtrl)
  .name;
