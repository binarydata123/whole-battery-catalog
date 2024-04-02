/* eslint-disable no-console */
const http = require('http');

const vendorAuthController = {
	vendorRegister: async (req, res) => {
		try {
			const bodyData = JSON.stringify(req.body);

			const options = {
				hostname: 'ec2-52-25-67-77.us-west-2.compute.amazonaws.com',
				port: 3000,
				path: '/vendorportal/register',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': Buffer.byteLength(bodyData)
				}
			};

			const httpReq = http.request(options, (response) => {
				let data = '';

				response.on('data', (chunk) => {
					data += chunk;
				});

				response.on('end', () => {
					const responseData = JSON.parse(data);

					if (Object.prototype.hasOwnProperty.call(responseData, 'vendorRegistrationResponse')) {
						res.status(201).json({
							status: true,
							data: { ...responseData },
							message: 'Registration Successful'
						});
					} else {
						res.status(responseData.statusCode).json({ status: false, message: responseData.message });
					}
				});
			});

			httpReq.on('error', (error) => {
				console.error(error);
				res.status(500).json({ error: 'Error fetching batteries from external API' });
			});

			// Write the body data to the request
			httpReq.write(bodyData);
			httpReq.end();
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	},

	vendorLogin: async (req, res) => {
		try {
			const bodyData = JSON.stringify(req.body);

			const options = {
				hostname: 'ec2-52-25-67-77.us-west-2.compute.amazonaws.com',
				port: 3000,
				path: '/vendorportal/login',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': Buffer.byteLength(bodyData)
				}
			};

			const httpReq = http.request(options, (response) => {
				let data = '';

				response.on('data', (chunk) => {
					data += chunk;
				});

				response.on('end', () => {
					const responseData = JSON.parse(data);

					if (Object.prototype.hasOwnProperty.call(responseData, 'vendorRegistrationResponse')) {
						res.status(200).json({
							status: true,
							data: responseData,
							message: 'Login Successful'
						});
					} else {
						res.status(responseData.statusCode).json({ status: false, message: responseData.message });
					}
				});
			});

			httpReq.on('error', (error) => {
				console.error(error);
				res.status(500).json({ error: 'Error fetching batteries from external API' });
			});

			// Write the body data to the request
			httpReq.write(bodyData);
			httpReq.end();
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
};

module.exports = vendorAuthController;
