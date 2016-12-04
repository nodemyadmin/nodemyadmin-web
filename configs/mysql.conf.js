/**
 * MYSQL driver (Node.js) configuration setup.
 */
'use strict';

module.exports = {
	/**
	 * More connection options: https://github.com/felixge/node-mysql#connection-options
	 */
	"create": {
		"connection": {
			"host": "localhost",
			"user": "root",
			"password": "root",
			"port": 3306
		}
	}
};
