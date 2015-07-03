/**
 * List of 3rd party npms requires.
 */
var Hapi = require('hapi');
var GoodConsole = require('good');

/**
 * List of configuration requires.
 */
var properties = require('./configs/properties.config');

/**
 * Create a new hapi server object.
 */
var server = new Hapi.Server();

/**
 * Add a connection to the server, passing in a port number to listen on.
 */
server.connection({
	"host": properties.server.host,
	"port": properties.server.port
});

/**
 * Adding routes and serving static files via directory handler.
 */
server.route({
	method: 'GET',
	path: '/{param*}',
	handler: {
		directory: {
			path: properties.client.staticServe,
			listing: properties.client.listing,
			index: properties.client.index,
			showHidden: properties.clientshowHidden
		}
	}
});

/**
 * Registers a plugin,
 * Here, Good, Good-console are being register to server.
 */
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

	/**
	 * Starts the hapi server connections by listening 
	 * for incoming requests on the configured port of each listener 
	 * (unless the connection was configured with autoListen set to false).
	 */
	server.start(function(error) {

		if(error) {
			throw error;
		}
		/**
		 * Logs server events that cannot be associated with a specific request. 
		 * When called the server emits a 'log' event which can be used by Good plugin
		 * to record the information or output to the console via Good-console format.
		 */
		server.log("Info", "Server running at: ", server.info.uri);
	});
});