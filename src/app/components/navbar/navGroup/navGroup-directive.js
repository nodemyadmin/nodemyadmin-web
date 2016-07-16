'use strict';

import angular from 'angular';
import NavGroupTpl from './navGroup-tpl.html';

import NavItemDirective from '../navItem/navItem-directive';

function navGroup() {
  return {
    transclude: true,
    restrict: 'E',
  	templateUrl: NavGroupTpl
  }
}

export default angular.module('directives.navGroup', [NavItemDirective])
  .directive('navGroup', navGroup)
  .name;
