import axios from 'axios';

export const vendorRegister = async (
	fullName: string,
	username: string,
	email: string,
	password: string
): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/vendorAuth/register`,
			method: 'post',
			headers: {
				Accept: 'application/json'
			},
			data: {
				vendor_name: fullName,
				vendor_username: username,
				password,
				vendor_email_id: email
			}
		});
		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const vendorLogin = async (username: string, password: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/vendorAuth/login`,
			method: 'post',
			headers: {
				Accept: 'application/json'
			},
			data: {
				vendor_username: username,
				password
			}
		});
		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};
