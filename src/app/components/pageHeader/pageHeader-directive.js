'use strict';

import angular from 'angular';
import PageHeaderTpl from './pageHeader-tpl.html';

import NavbarDirective from '../navbar/navbar-directive';

function pageHeader() {
  return {
    transclude: true,
    restrict: 'E',
    templateUrl: PageHeaderTpl
  }
}

export default angular.module('directives.pageHeader', [NavbarDirective])
  .directive('pageHeader', pageHeader)
  .name;
