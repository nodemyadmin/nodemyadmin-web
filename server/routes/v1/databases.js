module.exports = function(connection, Joi) {

	'use strict';

	return {
		databases: function() {
			return [{
				method: 'GET',
				path: '/api/v1/databases/show',
				handler: function(request, reply) {
					connection.query('SHOW DATABASES', function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'POST',
				path: '/api/v1/database/use',
				handler: function(request, reply) {
					var dbName = request.payload.dbName;

					connection.query('USE ' + dbName, function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				},
				config: {
					validate: {
						payload: {
							dbName: Joi.string().alphanum().min(1).max(64).required()
						}
					}
				}
			}, {
				method: 'POST',
				path: '/api/v1/database/create',
				handler: function(request, reply) {
					var dbName = request.payload.dbName;

					connection.query('CREATE DATABASE ' + dbName, function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'DELETE',
				path: '/api/v1/database/drop',
				handler: function(request, reply) {
					var dbName = request.payload.dbName;

					connection.query('DROP DATABASE IF EXISTS ' + dbName, function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}];
		}
	};

};