'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './app/stylesheets/override.less';
import './app/stylesheets/common.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Routing from './app/router/router-config';

import uiBootstrap from 'angular-ui-bootstrap';

import PageHeaderDirective from './app/components/pageHeader/pageHeader-directive';

import DashboardPage from './app/pages/dashboard/dashboard';
import DatabasesPage from './app/pages/databases/databases';
import SqlPage from './app/pages/sql/sql';
import TablePage from './app/pages/tables/tables';
import UsersPage from './app/pages/users/users';
import SettingsPage from './app/pages/settings/settings';
import PageNotFoundPage from './app/pages/pageNotFound/pageNotFound';
import SignInPage from './app/pages/signin/signin';

import AuthService from './app/common/services/authenticate';

let app = angular.module('nodemyadmin', [
    uiRouter,
    uiBootstrap,
    DashboardPage,
    DatabasesPage,
    SqlPage,
    TablePage,
    UsersPage,
    SettingsPage,
    PageNotFoundPage,
    SignInPage,
    PageHeaderDirective,
    AuthService
  ]);

app.config(['$stateProvider', '$urlRouterProvider', Routing])

app.run(['$rootScope', '$location', '$state', 'AuthService', ($rootScope, $location, $state, AuthService) => {
    $rootScope.$on('$stateChangeStart', () => {
      if(!AuthService.getCredentials()) {
        $state.go('signin', {}, {notify: false});
        return;
      } else {
        if($location.path() === '/signin') {
          $state.go('dashboard', {}, {notify: false});
        }
      }
    });
  }]);
