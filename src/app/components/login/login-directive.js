'use strict';

import angular from 'angular';
import LoginTpl from './login.html';

function loginBox() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h2>Login</h2>'
  }
}

export default angular.module('directives.login', [])
  .directive('login-box', loginBox)
  .name;
