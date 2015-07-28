module.exports = function(connection, Joi) {

	'use strict';

	return {
		tables: function() {
			return [{
				method: 'GET',
				path: '/api/v1/tables/show',
				handler: function(request, reply) {
					connection.query('show tables', function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'POST',
				path: '/api/v1/table/select',
				handler: function(request, reply) {
					var tblName = request.payload.tblName;

					connection.query('SELECT * FROM ' + tblName, function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'POST',
				path: '/api/v1/table/describe',
				handler: function(request, reply) {
					var tblName = request.payload.tblName;

					connection.query('DESCRIBE ' + tblName, function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'DELETE',
				path: '/api/v1/table/drop',
				handler: function(request, reply) {
					var tblName = request.payload.tblName;

					connection.query('DROP TABLE ' + tblName, function(error, rows) {
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