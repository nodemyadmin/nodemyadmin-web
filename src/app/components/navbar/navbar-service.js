'use strict';

import angular from 'angular';

class NavbarService {
  constructor() {
    this.navbar = {
      "navItems": [{
        "label": "Dashboard",
        "linkTo": "#"
      }, {
        "label": "Databases",
        "linkTo": "#databases"
      }, {
        "label": "SQL",
        "linkTo": "#sql",
        "icon": "#"
      }, {
        "label": "Help",
        "linkTo": "#",
        "subItems": [{
          "label": "Github Home Page",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/nodemyadmin"
        }, {
          "divider": true
        }, {
          "label": "Release Page",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/nodemyadmin/releases"
        }]
      }]
    };
  }

  getNavbar() {
    return this.navbar;
  }
};

export default angular.module('service.navbar', [])
  .service('NavbarService', NavbarService)
  .name;
