import axios from 'axios';

export const fetchDataByVendorId = () => {
	return new Promise((resolve, reject) => {
		axios
			.get(`http://ec2-52-25-67-77.us-west-2.compute.amazonaws.com:3000/battery/byVendorId/11`)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				reject(error);
			});
	});
};
