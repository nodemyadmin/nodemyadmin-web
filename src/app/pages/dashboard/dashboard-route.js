'use strict';

import DashboardTpl from './dashboard-tpl.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: DashboardTpl,
      controller: 'DashboardCtrl',
      controllerAs: 'dashboard'
    });
};
