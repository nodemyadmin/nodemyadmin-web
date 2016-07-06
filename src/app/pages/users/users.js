'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import UsersRoute from './users-route';
import UsersCtrl from './users-ctrl';

export default angular.module('nodemyadmin.users', [uiRouter])
  .config(['$stateProvider', UsersRoute])
  .controller('UsersCtrl', UsersCtrl)
  .name;
