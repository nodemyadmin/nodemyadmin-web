'use strict';

import LoginTpl from './login-tpl.html';

export default function routes($stateProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: LoginTpl,
      controller: 'LoginCtrl',
      controllerAs: 'login'
    });
};
