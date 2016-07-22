'use strict';

import angular from 'angular';

export default class SignInCtrl {
  constructor($rootScope, $scope, $cookies, SignInService) {
    this.rootScope = $rootScope;
    this.cookieStore = $cookies;
    this.signInService = SignInService;

    this.unsetCredentials();
  }

  setCredentials(username, password) {
    this.rootScope.authenticate = {
      username: username
    };

    this.cookieStore.put('authenticate', this.rootScope.authenticate);
  }

  unsetCredentials() {
    this.rootScope.authenticate = {};
    this.cookieStore.remove('authenticate');
  }

  isAuthenticate() {
    let promise = this.signInService.authenticate({
      username: formUsername.value,
      password: formPassword.value
    });

    promise.then((response) => {
      console.log(response);
      this.setCredentials(formUsername.value, formPassword.value);
    }, (response) => {
      console.error('Error: ', response);
    });
  }
};
