module.exports = function() {

	'use strict';

	return {
		authenticate: () => {
			return [{
				method: 'POST',
				path: '/api/v1/authenticate',
				handler: (request, reply) => {
					let payload = request.payload;

					reply({
            "isAuthenticate": (payload.username === "Ashwin") && (payload.password === "Ashwin")
          });
				}
			}];
		}
	};

};
