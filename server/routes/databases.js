module.exports = function(Hapi, connection) {

	return {
		databases: function() {
			return [{
			    method: 'GET',
			    path: '/showDatabases',
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
				path: '/useDatabase',
				handler: function(request, reply) {
					var dbName = request.payload.dbName;
					
					connection.query('USE ' + dbName, function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'POST',
				path: '/createDatabase',
				handler: function(request, reply) {
					var dbName = request.payload.dbName;

					connection.query('CREATE DATABASE ' + dbName, function(error, rows) {
						if(error) {
							throw error;
						}

						reply(rows);
					});
				}
			}, {
				method: 'DELETE',
				path: '/dropDatabase',
				handler: function(request, reply) {
					var dbName = request.payload.dbName;

					connection.query('DROP DATABASE IF EXISTS ' + dbName, function(error, rows) {
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