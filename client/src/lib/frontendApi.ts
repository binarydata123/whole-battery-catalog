import axios from 'axios';

export const getBlogs = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/blogs`,
			method: 'get'
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getSingleBlog = async (slug: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/blogs/${slug}`,
			method: 'get'
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};
