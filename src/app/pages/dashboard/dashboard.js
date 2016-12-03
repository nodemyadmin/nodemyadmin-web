import angular from 'angular';
import uiRouter from 'angular-ui-router';

import DashboardRoute from './dashboard-route';
import DashboardCtrl from './dashboard-ctrl';

export default angular.module('nodemyadmin.dashboard', [uiRouter])
  .config(['$stateProvider', DashboardRoute])
  .controller('DashboardCtrl', DashboardCtrl)
  .name;
