import angular from 'angular';
import uiRouter from 'angular-ui-router';

import DatabasesRoute from './databases-route';
import DatabasesCtrl from './databases-ctrl';

export default angular.module('nodemyadmin.databases', [uiRouter])
  .config(['$stateProvider', DatabasesRoute])
  .controller('DatabasesCtrl', DatabasesCtrl)
  .name;
