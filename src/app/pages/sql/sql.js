'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SqlRoute from './sql-route';
import SqlCtrl from './sql-ctrl';

export default angular.module('nodemyadmin.sql', [uiRouter])
  .config(SqlRoute)
  .controller('SqlCtrl', SqlCtrl)
  .name;
