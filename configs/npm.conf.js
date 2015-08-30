(function() {
	'use strict';

	/**
	 * NPM's configuration setup.
	 *
	 * Support you want to use [nodegit] in some another file, Do the following
	 *
	 * Include it using following Syntax:
	 * var nodegit = require('../../config/npm.config').nodegit;
	 *
	 */

	/**
	 * Joi: Object schema description language and validator for JavaScript objects.
	 *
	 * More info: https://github.com/hapijs/joi
	 */
	var joi = require('joi');
	exports.joi = joi;
	
})();