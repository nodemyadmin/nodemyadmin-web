'use strict';

import SignInTpl from './signin-tpl.html';

export default function routes($stateProvider) {

  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: SignInTpl,
      controller: 'SignInCtrl',
      controllerAs: 'signin'
    });
};
