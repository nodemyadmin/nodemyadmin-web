'use strict';

import UsersTpl from './users-tpl.html';

export default function routes($stateProvider) {

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: UsersTpl,
      controller: 'UsersCtrl',
      controllerAs: 'users'
    });
};
