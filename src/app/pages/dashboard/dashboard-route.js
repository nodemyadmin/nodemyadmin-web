'use strict';

import uiRouter from 'angular-ui-router';
import DashboardTpl from './dashboard-tpl.html';

import DashboardCtrl from './dashboard-ctrl';

export default function routes($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: DashboardTpl,
      controller: DashboardCtrl,
      controllerAs: 'dashboard'
    });
};
