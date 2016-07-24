'use strict';

import angular from 'angular';

export default class SignInCtrl {
  constructor($scope, $cookies, $location, SignInService) {
    this.scope = $scope;
    this.cookieStore = $cookies;
    this.location = $location;

    this.signInService = SignInService;

    this.hasError = false;
  }

  setCredentials(username) {
    let authenticate = {
      username: username,
      isAuthenticate: true
    };

    this.cookieStore.put('authenticate', authenticate);
  }

  unsetCredentials() {
    this.cookieStore.remove('authenticate');
  }

  submitCredentials(isValid) {
    if (isValid) {
      this.isAuthenticate(formUsername.value, formPassword.value);
    }
  }

  isAuthenticate(isValid) {
    if(isValid) {
      let username = formUsername.value;
      let password = formPassword.value;

      let promise = this.signInService.authenticate({
        username: username,
        password: password
      });

      promise.then((response) => {
        if(response.isAuthenticate) {
          this.setCredentials(username);
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
          msg: 'Some thing went wrong with service!'
        };
      });
    }
  }

  closeAlert(index) {
    this.scope.hasError = false;
  }

};
