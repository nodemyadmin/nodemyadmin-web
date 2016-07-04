'use strict';

import SqlTpl from './sql-tpl.html';

export default function routing($stateProvider) {

  $stateProvider
    .state('sql', {
      url: '/sql',
      templateUrl: SqlTpl,
      controller: 'SqlCtrl',
      controllerAs: 'sql'
    });

};
