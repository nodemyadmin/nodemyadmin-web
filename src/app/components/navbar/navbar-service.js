'use strict';

import angular from 'angular';

class NavbarService {
  constructor() {
    this.states = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
      'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
      'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
      'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana'
    ];
  }

  getState() {
    return this.states;
  }
};

export default angular.module('service.navbar', [])
  .service('NavbarService', NavbarService)
  .name;
