'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './app/router/router-config';

import Dashboard from './app/pages/dashboard/dashboard';

angular.module('nodemyadmin', [uiRouter, Dashboard])
  .config(routing);
