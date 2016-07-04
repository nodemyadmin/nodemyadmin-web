'use strict';

import tablesTpl from './tables-tpl.html';

export default function routing($stateProvider) {

  $stateProvider
    .state('tables', {
      url: '/tables',
      templateUrl: tablesTpl,
      controller: 'TablesCtrl',
      controllerAs: 'tables'
    });

};
