'use strict';

import Hapi from 'hapi';
import mysql from 'mysql';
import Joi from 'joi';
import good from 'good';
import goodConsole from 'good-console';
import path from 'path';
import Inert from 'inert';

/**
 * List of configuration requires.
 */
import STACKCONF from '../configs/stack.conf';
import MYSQLCONF from '../configs/mysql.conf';

/**
 * Fetch all routes module.
 */
import databaseRoutes from './routes/v1/databases';
import tableRoutes from './routes/v1/tables';
import runSQLRoutes from './routes/v1/sql';
import authenticateRoutes from './routes/v1/authenticate';

/**
 * Create Mysql Connection.
 */
let connection = mysql.createConnection(MYSQLCONF.create.connection);
connection.connect();

/**
 * Passing Mysql session connection and Joi to routes apis.
 */
let dbApi = databaseRoutes(connection, Joi);
let	tblApi = tableRoutes(connection, Joi);
let	sqlApi = runSQLRoutes(connection, Joi);
let authenticateApi = authenticateRoutes();

/**
 * Create a new hapi server object.
 */
let server = new Hapi.Server();

/**
 * Add a connection to the server, passing in a port number to listen on.
 */
server.connection({
  host: STACKCONF.server.host,
	port: STACKCONF.server.port
});
server.register(Inert, () => {});
server.register({
	register: good,
	options: {
		reporters: [{
			reporter: goodConsole,
			events: {
				response: '*',
				log: '*'
			}
		}]
	}
});

/**
 * Adding routes and serving static files via directory handler.
 */
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: STACKCONF.client.staticServe,
            redirectToSlash: true,
            listing: STACKCONF.client.listing,
      			index: STACKCONF.client.index,
      			showHidden: STACKCONF.clientshowHidden
        }
    }
});

server.route(dbApi.databases());
server.route(tblApi.tables());
server.route(sqlApi.runSQL());
server.route(authenticateApi.authenticate());

/**
 * Starts the hapi server connections by listening
 * for incoming requests on the configured port of each listener
 * (unless the connection was configured with autoListen set to false).
 */
server.start((error) => {
    if (error) {
        throw error;
    }
    /**
		 * Logs server events that cannot be associated with a specific request.
		 * When called the server emits a 'log' event which can be used by Good plugin
		 * to record the information or output to the console via Good-console format.
		 */
		console.log("Info", "Server running at: ", server.info.uri);
});
