'use strict';

import PageNotFoundTpl from './pageNotFound-tpl.html';

export default function routing($stateProvider) {

  $stateProvider
    .state('pagenotfound', {
      url: '/pagenotfound',
      templateUrl: PageNotFoundTpl,
      controller: 'PageNotFoundCtrl',
      controllerAs: 'pagenotfound'
    });
};
