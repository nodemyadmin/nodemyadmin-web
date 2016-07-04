'use strict';

import PageNotFound from '../pages/pageNotFound/pageNotFound.html';
import PageNotFoundCharacter from '../../assets/imgs/page-not-found.png';
import '../pages/pageNotFound/pageNotFound.less';

export default function routing($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('users', {
      url: '/users',
      template: '<h1>User Accounts</h1>'
    })
    .state('settings', {
      url: '/settings',
      template: '<h1>Settings</h1>'
    })
    .state('pagenotfound', {
      url: '/pagenotfound',
      templateUrl: PageNotFound,
      controller: function($scope) {
        $scope.PageNotFoundCharacter = PageNotFoundCharacter;
      }
    });

  $urlRouterProvider.otherwise('/pagenotfound');
};
