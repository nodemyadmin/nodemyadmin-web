/**
 * NPM's configuration setup.
 *
 * How to use:
 * var <npm-name> = require('../../configs/npm.conf').<npm-exported-name>;
 */

(function() {
	'use strict';

	/**
	 * Joi: Object schema description language and validator for JavaScript objects.
	 * More info: https://github.com/hapijs/joi
	 *
	 * var joi = require('../../configs/npm.conf').joi;
	 */
	var joi = require('joi');
	exports.joi = joi;

})();