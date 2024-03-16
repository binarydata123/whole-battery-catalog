import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { User } from '@/lib/types';

export const register = async (data?: any): Promise<User[]> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
		data: {
			...data
		}
	});
	return response.data;
};

export const OtpMatch = async (data?: any): Promise<User[]> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/otp-match`, {
		data: {
			...data
		}
	});
	return response.data;
};

export const forgetEmailPassword = async (data?: any): Promise<User[]> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/forget-password`, {
		data: {
			...data
		}
	});
	return response.data;
};

export const createNewPassword = async (data?: any): Promise<User[]> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/create-password`, {
		data: {
			...data
		}
	});
	return response.data;
};

export const resendOtp = async (data?: any): Promise<User[]> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/resend-otp`, {
		data: {
			...data
		} // Directly pass the object
	});
	return response.data;
};

export const socialLogin = async (data?: any): Promise<User[]> => {
	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/socialLogin`, {
		data: {
			...data
		}
	});
	return response.data;
};
