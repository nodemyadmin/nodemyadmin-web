'use strict';

import './pageNotFound.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import PageNotFoundRoute from './pageNotFound-route';
import PageNotFoundCtrl from './pageNotFound-ctrl';

export default angular.module('nodemyadmin.pagenotfound', [uiRouter])
  .config(['$stateProvider', PageNotFoundRoute])
  .controller('PageNotFoundCtrl', PageNotFoundCtrl)
  .name;
