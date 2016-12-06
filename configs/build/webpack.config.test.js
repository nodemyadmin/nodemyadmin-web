'use strict';

var BUILD_CONFIG = require('../build/build.config');

var testsContext = require.context('../../src', true, /-spec.ts$/);
testsContext.keys().forEach(testsContext);
