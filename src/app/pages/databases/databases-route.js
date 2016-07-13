'use strict';

import DatabasesTpl from './databases-tpl.html';

export default function routes($stateProvider) {

  $stateProvider
    .state('databases', {
      url: '/databases',
      templateUrl: DatabasesTpl,
      controller: 'DatabasesCtrl',
      controllerAs: 'databases'
    });
};
