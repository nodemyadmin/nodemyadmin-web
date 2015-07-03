module.exports = function(Hapi, connection) {

	return {
		databases: function() {
			return [{
			    method: 'GET',
			    path: '/showDatabases',
			    handler: function(request, reply) {
			    	connection.query('show databases', function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
			    }
			}, {
				method: 'POST',
				path: '/useDatabase',
				handler: function(request, reply) {
					var dbName = request.payload.dbName;
					
					connection.query('use ' + dbName, function(error, rows) {
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