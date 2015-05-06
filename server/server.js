var Hapi = require('hapi');
var GoodConsole = require('good');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 3000
});

server.route({
	method: 'GET',
	path: '/{param*}',
	handler: {
		directory: {
			path: 'client/',
			listing: true
		}
	}
});

server.register({
	register: GoodConsole,
	options: {
		reporters: [{
			reporter: require('good-console'),
			events: {
				response: '*',
				log: '*'
			}
		}]
	}
}, function(error) {
	if(error) {
		throw error;
	}

	server.start(function() {
		server.log("Info", "Server running at: ", server.info.uri);
	});
});