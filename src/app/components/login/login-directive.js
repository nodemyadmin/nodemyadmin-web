'use strict';

import angular from 'angular';
import LoginTpl from './login.html';

function loginBox() {
  return {
    restrict: 'E',
	scope: {
		formname: "@formname"
	},
    templateUrl: LoginTpl
  }
}

export default angular.module('directives.login', [])
  .directive('login', loginBox)
  .name;
