'use strict';

import UsersTpl from './users-tpl.html';

export default function routing($stateProvider) {

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: UsersTpl,
      controller: 'UsersCtrl',
      controllerAs: 'users'
    });
};
