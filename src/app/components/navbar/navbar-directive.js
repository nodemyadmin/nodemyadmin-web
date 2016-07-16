'use strict';

import angular from 'angular';
import NavbarTpl from './navbar.html';
import NavItemDirective from './navItem/navItem-directive';

import './navbar.less';

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

export default angular.module('directives.navbar', [NavItemDirective])
  .directive('navbar', navbar)
  .name;
