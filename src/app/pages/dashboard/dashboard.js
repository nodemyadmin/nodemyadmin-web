'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import DashboardRoute from './dashboard-route';
import DashboardCtrl from './dashboard-ctrl';
import LoginDirective from '../../components/login/login-directive';

export default angular.module('nodemyadmin.dashboard', [uiRouter, LoginDirective])
  .config(['$stateProvider', DashboardRoute])
  .controller('DashboardCtrl', DashboardCtrl)
  .name;
