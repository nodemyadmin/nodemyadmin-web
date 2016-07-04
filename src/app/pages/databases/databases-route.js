'use strict';

import DatabasesTpl from './databases-tpl.html';

export default function routing($stateProvider) {

  $stateProvider
    .state('databases', {
      url: '/databases',
      templateUrl: DatabasesTpl,
      controller: 'DatabasesCtrl',
      controllerAs: 'databases'
    });
};
