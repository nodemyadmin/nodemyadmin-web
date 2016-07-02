'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Routing from '../../router/router-config';
import DashboardCtrl from './dashboard-ctrl';

export default angular.module('dashboard', [uiRouter])
  .config(Routing)
  .controller('DashboardCtrl', DashboardCtrl)
  .name;
