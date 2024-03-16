import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('session_token');

export const getAllBlogs = async (searchTerm: string = ''): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/blogs`,
			method: 'get',
			params: {
				searchTerm: searchTerm // Pass the searchTerm as a query parameter
			},
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const addUpdateBlogDetails = async (formData: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.post(`${process.env['NEXT_PUBLIC_API_URL']}/admin/blogs/addUpdateBlogDetails`, formData, {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const deleteBlog = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/blogs/deleteBlog`,
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
