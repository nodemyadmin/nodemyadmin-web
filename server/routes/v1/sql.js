module.exports = function(connection, Joi) {

	'use strict';

	return {
		runSQL: function() {
			return [{
				method: 'POST',
				path: '/api/v1/sql/run',
				handler: function(request, reply) {
					var rawSQLQuery = request.payload.rawSQLQuery;

					connection.query(rawSQLQuery, function(error, rows) {
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