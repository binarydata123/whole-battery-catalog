import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('session_token');

export const getAllBlogs = async (searchTerm: string = ''): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/blogs`,
			method: 'get',
			params: {
				searchTerm: searchTerm
			},
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getAlluser = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/user/all-users`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const addUpdateUser = async (data: any): Promise<any> => {
	return new Promise(async (resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/user/update-User`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json', // Assuming you're sending JSON data
				Authorization: `Bearer ${token}`
			}
		});
		// const response = await axios.post(
		//     `${process.env.NEXT_PUBLIC_API_URL}/admin/user/update-User`,
		//     data,
		//     {
		//         headers: {
		//             Accept: 'application/json',
		//             'Content-Type': 'application/json', // Assuming you're sending JSON data
		//             Authorization: `Bearer ${token}`
		//         }
		//     }
		// )

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const updateUser = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/authors/updateUser`,
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				Authorization: `Bearer ${token}`
			},
			data
		});
		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const deleteUser = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/user/delete-user`,
			method: 'post',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			data
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};
