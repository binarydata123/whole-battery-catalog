import axios from 'axios';
// import Cookies from 'js-cookie';
import { getDecryptedCookie } from '@/helpers/cookie-encrypt';

const sessionData = getDecryptedCookie('admin');
const token = sessionData?.token;

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

export const deleteBlogImage = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/blogs/deleteBlogImage`,
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

export const getAllBlogCategories = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/blogCategories`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getAllAuthors = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/authors`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getAllInquiry = async (search?: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/inquiry/getAllInquiry`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			params: {
				search
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getSingleInquiry = async (id: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/inquiry/getSingleInquiry/${id}`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const deleteInquiry = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/inquiry/deleteInquiry`,
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

export const addUpdateUserInfo = async (formData: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.post(`${process.env['NEXT_PUBLIC_API_URL']}/admin/rates/addUpdateUserInfo`, formData, {
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
export const getAllUserEmails = async (search?: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/guest/guestEmails`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			params: {
				search
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};
export const getSingleUsers = async (id: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.get(`${process.env['NEXT_PUBLIC_API_URL']}/admin/users/getSingleUser/${id}`, {
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

// contactUs
export const contactUs = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/contactUs`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const updateAuthor = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/authors/addUpdateAuthorDetails`,
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

export const deleteAuthor = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/authors/deleteAuthor`,
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

export const adminUpdate = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/user`,
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

export const updateProfile = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/profile/update`,
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

export const getDashboardDetails = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/appointment/dashboardDetails`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getAllNotifications = async (id: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/contactUs/allNotifications/${id}`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getUserList = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/users`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const updateUser = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/users/addOrUpdateUser`,
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
			url: `${process.env.NEXT_PUBLIC_API_URL}/admin/users/deleteUser`,
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

// admin battery access
export const allBatteryReports = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/battery`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const allVendor = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/admin/vendors`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};
