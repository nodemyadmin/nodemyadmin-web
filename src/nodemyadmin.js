'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './app/stylesheets/override.less';
import './app/stylesheets/common.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Routing from './app/router/router-config';

import PageHeaderDirective from './app/components/pageHeader/pageHeader-directive';

import DashboardPage from './app/pages/dashboard/dashboard';
import DatabasesPage from './app/pages/databases/databases';
import SqlPage from './app/pages/sql/sql';
import TablePage from './app/pages/tables/tables';
import UsersPage from './app/pages/users/users';
import SettingsPage from './app/pages/settings/settings';
import PageNotFoundPage from './app/pages/pageNotFound/pageNotFound';
import LoginPage from './app/pages/login/login';

angular.module('nodemyadmin', [
    uiRouter,
    DashboardPage,
    DatabasesPage,
    SqlPage,
    TablePage,
    UsersPage,
    PageNotFoundPage,
    LoginPage,
    PageHeaderDirective
  ])
  .config(['$stateProvider', '$urlRouterProvider', Routing]);
