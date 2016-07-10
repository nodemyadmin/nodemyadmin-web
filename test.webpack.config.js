'use strict';

import 'angular';
import 'angular-mocks/angular-mocks';

var testsContext = require.context("./src/app/", true, /-test$/);
testsContext.keys().forEach(testsContext);
