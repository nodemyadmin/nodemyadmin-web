module.exports = function(connection) {

	return {
		showDatabases: function() {
			return [{
			    method: 'GET',
			    path: '/showdbs',
			    handler: function(request, reply) {
			    	connection.query('show databases', function(error, rows) {
						if (error) {
							throw error;
						}

						reply(rows);
					});
			    }
			}]
		}
	};

};