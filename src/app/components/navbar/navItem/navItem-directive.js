'use strict';

import angular from 'angular';
import NavItemTpl from './navItem-tpl.html';

function navItem() {
  return {
    restrict: 'E',
    replace: true,
  	scope: {
  		label: '@',
      linkTo: '@'
  	},
    templateUrl: NavItemTpl
  }
}

export default angular.module('directives.navItem', [])
  .directive('navItem', navItem)
  .name;
