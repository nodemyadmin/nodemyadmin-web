'use strict';

import angular from 'angular';
import NavbarTpl from './navbar.html';
import NavbarService from './navbar-service';
import NavbarCtrl from './navbar-ctrl';

function navbar(NavbarService) {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      version: '@',
      linkTo: '@'
    },
  	templateUrl: NavbarTpl,
    link: (scope, el, attr) => {
      scope.navbar = NavbarService.getNavbar();
    }
  }
}

export default angular.module('directives.navbar', [NavbarService])
  .directive('navbar', ['NavbarService', navbar])
  .controller('NavbarCtrl', ['$scope', '$document', NavbarCtrl])
  .name;
