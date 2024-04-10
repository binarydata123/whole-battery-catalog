'use client';

import { useState, createContext, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { User } from '@/lib/types';
import Cookies from 'js-cookie';
import { setEncryptedCookie, getDecryptedCookie } from '@/helpers/cookie-encrypt';
import { message, notification, Spin } from 'antd';
import { useRouter } from 'next/navigation';
// import MyLoaderAnimation from '@/components/LoaderAnimation';
import ErrorHandler from '@/lib/ErrorHandler';

const api = axios.create({
	baseURL: process.env['NEXT_PUBLIC_API_URL'] || ''
});

interface AuthContextDefaults {
	user?: User | undefined;
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
	setInitialized: React.Dispatch<React.SetStateAction<boolean>>;
	logout: () => Promise<void>;
	vendorLogin: (username: string, password: string) => Promise<any>;
	adminLogin: (username: string, password: string) => Promise<any>;
	vendorRegister: (fullName: string, username: string, email: string, password: string) => Promise<any>;
}

interface AuthContextProp {
	children?: React.ReactNode;
}

const VendorAuth = createContext<AuthContextDefaults>({
	logout: () => Promise.resolve(),
	vendorLogin: () => Promise.resolve(''),
	adminLogin: () => Promise.resolve(''),
	vendorRegister: () => Promise.resolve(''),
	setInitialized: () => Promise.resolve(''),
	setUser: () => {}
});

const VendorAuthProvider = ({ children }: AuthContextProp) => {
	const router = useRouter();
	const [user, setUser] = useState<User | undefined>(undefined); // Change to User type
	const [initialized, setInitialized] = useState<boolean>(false);

	const logout = async (): Promise<void> => {
		setUser(undefined);
		sessionStorage.removeItem('user'); // Clear user data from sessionStorage
		Cookies.remove('refresh_token');
		Cookies.remove('session_token');
		localStorage.clear(); //removes all menu keys saved for menu bar navigation
		router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/login`);
	};

	useEffect(() => {
		// On component mount, check if user data exists in sessionStorage and set it to state
		const storedUser = sessionStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setInitialized(true);
	}, []);

	useEffect(() => {
		// const token = Cookies.get('session_token');
		const token = getDecryptedCookie('session_token');
		const checkSession = async () => {
			// console.log('checkSession triggered');
			if (token) {
				try {
					const response = await api.get('/auth/check-session', {
						headers: {
							Authorization: `${token}`
						}
					});

					if (response && response.data && response.data.user) {
						setInitialized(true);
						setUser(response.data.user);
						// console.log('refreshed token', response.data.refreshedToken);
						// Cookies.set('session_token', response.data.refreshedToken);
						getDecryptedCookie('session_token');
					} else {
						setInitialized(true);
						Cookies.remove('session_token');
						setUser(undefined);
						router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
					}
				} catch (error) {
					setInitialized(true);
					ErrorHandler.showNotification(error);
					Cookies.remove('session_token');
					setUser(undefined);
					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
				}
			}
			// } else {
			// 	// router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
			// }
		};

		checkSession();
	}, [router]);

	useEffect(() => {
		if (initialized && user) {
			const currentPath = window.location.pathname;
			if (
				(currentPath.startsWith('/en/admin') && user?.role !== 'admin') ||
				(currentPath.startsWith('/en/user') && user?.role !== 'user')
			) {
				console.error('[AUTH] Unauthorized');
				switch (user?.role) {
					case 'admin':
						router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/admin/dashboard`);
						break;
					case 'user':
						router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/user/dashboard`);
						break;
					default:
						router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
						break;
				}
				return;
			} else {
				return;
			}
		}
	}, [initialized, user, router]);

	const performAuthAction = async (
		requestData: any,
		url: string,
		successRedirectUrl?: string,
		successMessage?: string
	) => {
		const requestConfig: AxiosRequestConfig = {
			url: process.env['NEXT_PUBLIC_API_URL'] + url,
			method: 'post',
			data: {
				...requestData
			}
		};

		try {
			const response = await axios(requestConfig);
			if (response && response.data && response.data.data) {
				const { vendorRegistrationResponse: loggedInUser } = response.data.data;
				// Cookies.set('refresh_token', loggedInUser.refresh_token);
				setEncryptedCookie('refresh_token', loggedInUser.refresh_token, 7);
				setEncryptedCookie('access_token', loggedInUser.access_token, null);

				const userData: any = {
					access_token: loggedInUser.access_token,
					email: loggedInUser.vendor_email_id,
					username: loggedInUser.vendor_username,
					role: 'user'
				};
				setUser(userData);
				sessionStorage.setItem('user', JSON.stringify(userData)); // Store user data in sessionStorage
				message.success(successMessage);
				if (successRedirectUrl) {
					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}${successRedirectUrl}`);
				}
			}
		} catch (error: any) {
			ErrorHandler.showNotification(error);
		}
	};

	const vendorLogin = async (username: string, password: string) => {
		const requestData = {
			vendor_username: username,
			password
		};
		await performAuthAction(requestData, '/vendorAuth/login', '/user/dashboard', 'You are logged In!');
	};

	const vendorRegister = async (fullName: string, username: string, email: string, password: string) => {
		const requestData = {
			vendor_name: fullName,
			vendor_username: username,
			password,
			vendor_email_id: email
		};
		await performAuthAction(requestData, '/vendorAuth/register', '/user/dashboard', 'Registration Successful');
	};

	// Admin Login
	const adminLogin = async (username: string, password: string) => {
		const requestConfigAdmin: AxiosRequestConfig = {
			url: process.env.NEXT_PUBLIC_API_URL + '/auth/login',
			method: 'POST',
			data: {
				username,
				password
			}
		};

		try {
			const response = await axios(requestConfigAdmin);

			if (response && response.data.token && response.data.user) {
				const { token: access_token, user: loggedInUser } = response.data;

				if (loggedInUser.role !== 'admin') {
					notification.error({
						message: 'Not an admin',
						duration: 3
					});
				} else {
					// axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
					// Cookies.set('refresh_token', loggedInUser.refresh_token);
					// Cookies.set('session_token', access_token);
					setEncryptedCookie('refresh_token', loggedInUser.refresh_token, 7);
					setEncryptedCookie('session_token', access_token, null);
					const userData: any = {
						access_token,
						username: loggedInUser.username,
						email: loggedInUser.email,
						role: loggedInUser.role
					};
					setUser(userData);
					sessionStorage.setItem('user', JSON.stringify(userData));
					message.success('Login Successful');
					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/admin/dashboard`);
				}
			}
		} catch (error) {
			ErrorHandler.showNotification(error);
		}
	};

	return (
		<VendorAuth.Provider value={{ user, setUser, setInitialized, vendorLogin, adminLogin, vendorRegister, logout }}>
			{children}
		</VendorAuth.Provider>
	);
};

export { VendorAuthProvider };
export default VendorAuth;
