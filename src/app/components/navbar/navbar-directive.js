'use strict';

import angular from 'angular';
import NavbarTpl from './navbar.html';

import NavbarCtrl from './navbar-ctrl';
import NavbarDirective from './navItem-directive';

function navbar() {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      linkTo: '@',
      version: '@'
    },
  	templateUrl: NavbarTpl,
    link: function(scope, el, attr) {

    }
  }
}

export default angular.module('directives.navbar', [NavbarDirective])
  .directive('navbar', navbar)
  .controller('NavbarCtrl', ['$scope', NavbarCtrl])
  .name;
