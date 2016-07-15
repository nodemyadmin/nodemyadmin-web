'use strict';

import angular from 'angular';
import NavbarTpl from './navbar.html';

import typeahead from 'angular-ui-bootstrap/src/typeahead';

import NavbarService from './navbar-service';

function navbar(NavbarService) {
  return {
    restrict: 'E',
  	scope: {
  		name: "="
  	},
    templateUrl: NavbarTpl,
    link: function(scope, element, attrs) {
      scope.states = NavbarService.getState();
    }
  }
}

export default angular.module('directives.navbar', [typeahead, NavbarService])
  .directive('navbar', ['NavbarService', navbar])
  .name;
