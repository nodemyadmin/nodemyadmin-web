'use strict';

import angular from 'angular';
import NavbarTpl from './navbar.html';

function navbar() {
  return {
    restrict: 'E',
  	scope: {
  		name: "="
  	},
    templateUrl: NavbarTpl
  }
}

export default angular.module('directives.navbar', [])
  .directive('navbar', navbar)
  .name;
