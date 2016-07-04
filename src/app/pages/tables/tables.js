'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import TablesRoute from './tables-route';
import TablesCtrl from './tables-ctrl';

export default angular.module('nodemyadmin.tables', [uiRouter])
  .config(TablesRoute)
  .controller('TablesCtrl', TablesCtrl)
  .name;
