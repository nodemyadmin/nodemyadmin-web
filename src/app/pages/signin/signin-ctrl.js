'use strict';

import angular from 'angular';

export default class SignInCtrl {
  constructor($rootScope, $scope, $cookies, SignInService) {
    this.rootScope = $rootScope;
    this.cookieStore = $cookies;
    this.signInService = SignInService;
  }

  setCredentials(username, password) {
    console.log('Log: Setting Credentials');
    this.rootScope.authenticate = {
      username: username
    };

    this.cookieStore.put('authenticate', this.rootScope.authenticate);
  }

  unsetCredentials() {
    console.log('Log: Unset Credentials');
    this.rootScope.authenticate = {};
    this.cookieStore.remove('authenticate');
  }

  isAuthenticate() {
    console.log('Log: IsAuthenticate Controller');
    this.signInService.authenticate({
      username: formUsername.value,
      password: formPassword.value
    });
    this.setCredentials(formUsername.value, formPassword.value);
  }
};
