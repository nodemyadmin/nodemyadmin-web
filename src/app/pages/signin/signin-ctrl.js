'use strict';

import angular from 'angular';

export default class SignInCtrl {
  constructor($rootScope, $scope, $cookies, $location, SignInService) {
    this.rootScope = $rootScope;
    this.scope = $scope;
    this.cookieStore = $cookies;
    this.location = $location;

    this.signInService = SignInService;
    this.unsetCredentials();

    this.hasError = false;
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
      if(response.isAuthenticate) {
        this.setCredentials(formUsername.value, formPassword.value);
        this.location.path('/');
      } else {
        this.scope.hasError = true;
        this.scope.alert = {
          type: 'danger',
          msg: 'Username or password is incorrect. Please try again.'
        };
      }
    }, (response) => {
      this.scope.hasError = true;
      this.scope.alert = {
        type: 'danger',
        msg: 'Some thing went wrong with services!'
      };
    });
  }

  closeAlert(index) {
    this.scope.hasError = false;
  }

};
