'use strict';

import angular from 'angular';
import NavbarTpl from './navbar.html';
import NavGroupDirective from './navGroup/navGroup-directive';

function navbar() {
  return {
    transclude: true,
    restrict: 'E',
    scope: {
      name: '@',
      version: '@',
      linkTo: '@'
    },
  	templateUrl: NavbarTpl
  }
}

export default angular.module('directives.navbar', [NavGroupDirective])
  .directive('navbar', navbar)
  .name;
