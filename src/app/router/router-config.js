'use strict';

import PageNotFound from '../pages/pageNotFound/pageNotFound.html';
import PageNotFoundCharacter from '../../assets/imgs/page-not-found.png';
import '../pages/pageNotFound/pageNotFound.less';

export default function routing($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('databases', {
      url: '/databases',
      template: '<h1>Databases</h1>'
    })
    .state('sql', {
      url: '/sql',
      template: '<h1>SQL</h1>'
    })
    .state('users', {
      url: '/users',
      template: '<h1>User Accounts</h1>'
    })
    .state('tables', {
      url: '/tables',
      template: '<h1>Tables</h1>'
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
