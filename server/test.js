const http = require('http');

// Configuration for the request
let options = {
	hostname: 'ec2-52-25-67-77.us-west-2.compute.amazonaws.com',
	port: 3000,
	path: '/battery/byVendorId/11',
	method: 'GET',
	headers: {
		vendor_unique_token: '3M4PD5'
	}
};

// Making the HTTP request
const req = http.request(options, (res) => {
	let data = '';

	// A chunk of data has been received.
	res.on('data', (chunk) => {
		data += chunk;
	});

	// The whole response has been received.
	res.on('end', () => {
		console.log(JSON.parse(data));
	});
});

// Handling errors
req.on('error', (error) => {
	console.error(error);
});

// End the request
req.end();
