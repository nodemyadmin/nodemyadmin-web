module.exports = function(connection, Joi) {

	'use strict';

	return {
		databases: () => {
			return [{
				method: 'GET',
				path: '/api/v1/databases/show',
				handler: (request, reply) => {
					connection.query('SHOW DATABASES', (error, rows) => {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'POST',
				path: '/api/v1/database/use',
				handler: (request, reply) => {
					let dbName = request.payload.dbName;

					connection.query('USE ' + dbName, (error, rows) => {
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
				handler: (request, reply) => {
					let dbName = request.payload.dbName;

					connection.query('CREATE DATABASE ' + dbName, (error, rows) => {
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
				method: 'DELETE',
				path: '/api/v1/database/drop',
				handler: (request, reply) => {
					let dbName = request.payload.dbName;

					connection.query('DROP DATABASE IF EXISTS ' + dbName, (error, rows) => {
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
			}];
		}
	};

};
