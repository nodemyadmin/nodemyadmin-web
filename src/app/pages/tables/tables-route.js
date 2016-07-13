'use strict';

import tablesTpl from './tables-tpl.html';

export default function routes($stateProvider) {

  $stateProvider
    .state('tables', {
      url: '/tables',
      templateUrl: tablesTpl,
      controller: 'TablesCtrl',
      controllerAs: 'tables'
    });

};
