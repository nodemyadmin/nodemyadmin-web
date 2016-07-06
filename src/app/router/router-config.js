'use strict';

export default function routing($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/pagenotfound');
};
