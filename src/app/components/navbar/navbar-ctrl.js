'use strict';

import angular from 'angular';

export default class NavbarCtrl {
  constructor($scope) {
    $scope.openSubItems = function($event) {
      angular.element(document.querySelectorAll('.dropdown')).removeClass('open');
      angular.element($event.currentTarget).parent().addClass('open');
    };

    $scope.closeSubItems = function($event) {
      angular.element(document.querySelector('.dropdown.open')).removeClass('open');
    }
  }
};
