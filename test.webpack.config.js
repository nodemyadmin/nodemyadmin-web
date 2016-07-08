'use strict';

var testsContext = require.context("./src/app/pages", true, /-test$/);
testsContext.keys().forEach(testsContext);
