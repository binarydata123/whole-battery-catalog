import axios from 'axios';
import { getDecryptedCookie } from '@/helpers/cookie-encrypt';

const token: string = getDecryptedCookie('access_token');

export const allBatteryByVendor = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/user/battery/`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getBatteryDataById = async (id: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/user/battery/byBatteryId/${id}`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const allPeriscopeTestByBatteryId = async (id: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/user/battery/allPeriscopeTest/byBatteryId/${id}`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};

export const getPeriscopeTestData = async (id: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		const req = axios.request({
			url: `${process.env['NEXT_PUBLIC_API_URL']}/user/battery/periscopeTest/${id}`,
			method: 'get',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		req.then((res) => resolve(res.data)).catch((err) => reject(err));
	});
};
