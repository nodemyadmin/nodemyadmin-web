module.exports = function(connection, Joi) {

	'use strict';

	return {
		tables: () => {
			return [{
				method: 'GET',
				path: '/api/v1/tables/show',
				handler: (request, reply) => {
					connection.query('show tables', (error, rows) => {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'POST',
				path: '/api/v1/table/select',
				handler: (request, reply) => {
					let tblName = request.payload.tblName;

					connection.query('SELECT * FROM ' + tblName, (error, rows) => {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				},
				config: {
					validate: {
						payload: {
							tblName: Joi.string().alphanum().min(1).max(64).required()
						}
					}
				}
			}, {
				method: 'POST',
				path: '/api/v1/table/describe',
				handler: (request, reply) => {
					let tblName = request.payload.tblName;

					connection.query('DESCRIBE ' + tblName, (error, rows) => {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				},
				config: {
					validate: {
						payload: {
							tblName: Joi.string().alphanum().min(1).max(64).required()
						}
					}
				}
			}, {
				method: 'DELETE',
				path: '/api/v1/table/drop',
				handler: (request, reply) => {
					let tblName = request.payload.tblName;

					connection.query('DROP TABLE ' + tblName, (error, rows) => {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				},
				config: {
					validate: {
						payload: {
							tblName: Joi.string().alphanum().min(1).max(64).required()
						}
					}
				}
			}];
		}
	};

};
