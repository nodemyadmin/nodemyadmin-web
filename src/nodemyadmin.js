'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './app/router/router-config';

import DashboardPage from './app/pages/dashboard/dashboard';
import DatabasesPage from './app/pages/databases/databases';
import SqlPage from './app/pages/sql/sql';
import TablePage from './app/pages/tables/tables';

angular.module('nodemyadmin', [uiRouter, DashboardPage, DatabasesPage, SqlPage, TablePage])
  .config(routing);
