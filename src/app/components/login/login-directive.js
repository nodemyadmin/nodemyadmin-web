'use strict';

import angular from 'angular';
import LoginTpl from './login.html';

function loginBox() {
  return {
    restrict: 'E',
  	scope: {
  		name: "="
  	},
    templateUrl: LoginTpl
  }
}

export default angular.module('directives.login', [])
  .directive('login', loginBox)
  .name;
