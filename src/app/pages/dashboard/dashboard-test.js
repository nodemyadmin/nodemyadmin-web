'use strict';

import Dashboard from './dashboard';

describe('Controller: Dashboard', function () {
    let $controller;

    beforeEach(angular.mock.module(Dashboard));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('name is initialized to Ashwin', function() {
        let ctrl = $controller('DashboardCtrl');
        expect(ctrl.name).toBe('Ashwin');
    });
});
