import angular from 'angular';

class NavbarService {
  constructor() {
    this.navbar = {
      "navItems": [{
        "title": "Dashboard",
        "label": "Dashboard",
        "linkTo": "#"
      }, {
        "title": "Databases",
        "label": "Databases",
        "linkTo": "#databases"
      }, {
        "title": "SQL",
        "label": "SQL",
        "linkTo": "#sql"
      }, {
        "title": "Developers Connection",
        "linkTo": "#",
        "icon": {
          "size": "fa-lg",
          "name": "fa-connectdevelop"
        },
        "placement": "navbar-right",
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
        }, {
          "label": "Milestones",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/nodemyadmin/milestones"
        }, {
          "divider": true
        }, {
          "label": "Issues Page",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/nodemyadmin/issues"
        }, {
          "label": "Open Pull Requests",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/nodemyadmin/pulls"
        }, {
          "divider": true
        }, {
          "label": "About nodemyadmin",
          "target": "_blank",
          "linkTo": "//github.com/hegdeashwin/nodemyadmin"
        }]
      }, {
        "title": "More Information, Help etc.",
        "linkTo": "#",
        "icon": {
          "size": "fa-lg",
          "name": "fa-life-saver"
        },
        "placement": "navbar-right",
        "subItems": [{
          "title": "Take a Tour",
          "label": "Take a Tour",
          "linkTo": "#"
        }, {
          "title": "What's New",
          "label": "What's New",
          "linkTo": "#"
        }, {
          "divider": true
        }, {
          "title": "API Explorer",
          "label": "API Explorer",
          "target": "_blank",
          "linkTo": "#"
        }, {
          "title": "Documentation",
          "label": "Documentation",
          "target": "_blank",
          "linkTo": "#"
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
