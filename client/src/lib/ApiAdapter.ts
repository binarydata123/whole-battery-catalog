import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { User } from '@/lib/types';

export const register = async (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
			method: 'post',
			headers: {
				Accept: 'application/json'
			},
			data: {
				...data
			}
		});
		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const login = async (username: string, password: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
			method: 'post',
			headers: {
				Accept: 'application/json'
			},
			data: {
				username,
				password
			}
		});
		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const OtpMatch = async (data?: any): Promise<any> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/otp-match`, {
		data: {
			...data
		}
	});
	return response.data;
};

export const forgetEmailPassword = async (data?: any): Promise<any> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/forget-password`, {
		data: {
			...data
		}
	});
	return response.data;
};

export const createNewPassword = async (data?: any): Promise<any> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/create-password`, {
		data: {
			...data
		}
	});
	return response.data;
};

export const resendOtp = async (data?: any): Promise<any> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/resend-otp`, {
		data: {
			...data
		} // Directly pass the object
	});
	return response.data;
};

export const socialLogin = async (data?: any): Promise<any> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/socialLogin`, {
		data: {
			...data
		}
	});
	return response.data;
};
