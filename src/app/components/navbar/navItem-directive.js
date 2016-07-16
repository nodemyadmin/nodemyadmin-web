'use strict';

import angular from 'angular';
import NavItemTpl from './navItem-tpl.html';

function navitem() {
  return {
    require: '^navbar',
    restrict: 'E',
  	scope: {
  		label: '@'
  	},
    templateUrl: NavItemTpl,
    link: function(scope, el, attr, ctrl) {

    }
  }
}

export default angular.module('directives.navItem', [])
  .directive('navItem', navitem)
  .name;
