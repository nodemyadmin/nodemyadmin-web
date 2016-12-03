import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SettingsRoute from './settings-route';
import SettingsCtrl from './settings-ctrl';

export default angular.module('nodemyadmin.settings', [uiRouter])
  .config(['$stateProvider', SettingsRoute])
  .controller('SettingsCtrl', SettingsCtrl)
  .name;
