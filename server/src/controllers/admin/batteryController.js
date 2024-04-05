const http = require('http');
const batteryController = {
	allBattery: async (req, res) => {
		try {
			// Configuration for the HTTP request
			let options = {
				hostname: 'ec2-52-25-67-77.us-west-2.compute.amazonaws.com',
				port: 3000,
				path: '/battery',
				method: 'GET'
			};

			// Making the HTTP request
			const httpReq = http.request(options, (response) => {
				let data = '';

				// A chunk of data has been received.
				response.on('data', (chunk) => {
					data += chunk;
				});

				// The whole response has been received.
				response.on('end', () => {
					// Send the received data as the response to the client
					// res.json(JSON.parse(data));
					res.status(200).json({ status: true, data: JSON.parse(data) });
				});
			});

			// Handling errors
			httpReq.on('error', (error) => {
				console.error(error);
				res.status(500).json({ error: 'Error fetching batteries from external API' });
			});

			// End the request
			httpReq.end();
		} catch (error) {
			// If an error occurs, send a 500 status with the error message
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
};

module.exports = batteryController;
