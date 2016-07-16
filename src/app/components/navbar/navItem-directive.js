'use strict';

import angular from 'angular';
import NavItemTpl from './navItem-tpl.html';

function navItem() {
  return {
    // require: '^navbar',
    restrict: 'E',
    replace: true,
  	scope: {
  		label: '@',
      linkTo: '@'
  	},
    templateUrl: NavItemTpl,
    link: function(scope, el, attr, ctrl) {

    }
  }
}

export default angular.module('directives.navItem', [])
  .directive('navItem', navItem)
  .name;
