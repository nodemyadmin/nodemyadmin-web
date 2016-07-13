'use strict';

import LoginTpl from './login-tpl.html';

export default function routing($stateProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: LoginTpl,
      controller: 'LoginCtrl',
      controllerAs: 'login'
    });
};
