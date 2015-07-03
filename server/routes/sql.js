module.exports = function(Hapi, connection) {

	return {
		runSQL: function() {
			return [{
				method: 'POST',
				path: '/runSQL',
				handler: function(request, reply) {
					var rawSQLQuery = request.payload.rawSQLQuery;

					connection.query(rawSQLQuery, function(error, rows) {
						if(error) {
							throw error;
						}

						reply(rows);
					});
				}
			}];
		}
	};

};