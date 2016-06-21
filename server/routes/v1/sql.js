module.exports = function(connection, Joi) {

	'use strict';

	return {
		runSQL: () => {
			return [{
				method: 'POST',
				path: '/api/v1/sql/run',
				handler: (request, reply) => {
					let rawSQLQuery = request.payload.rawSQLQuery;

					connection.query(rawSQLQuery, (error, rows) => {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				},
				config: {
					validate: {
						payload: {
							rawSQLQuery: Joi.string().required()
						}
					}
				}
			}];
		}
	};

};
