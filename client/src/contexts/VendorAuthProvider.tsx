'use client';

import { useState, createContext, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { setEncryptedCookie, getDecryptedCookie, encryptData } from '@/helpers/cookie-encrypt';
import { message, notification, Spin } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import ErrorHandler from '@/lib/ErrorHandler';
import { getVendorAccessToken } from '@/lib/vendorApiAdapter';

const api = axios.create({
	baseURL: process.env['NEXT_PUBLIC_API_URL'] || ''
});

interface AuthContextDefaults {
	user?: any;
	setUser: React.Dispatch<React.SetStateAction<any>>;
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
	const pathname = usePathname();
	const [user, setUser] = useState(undefined); // Change to User type
	const [initialized, setInitialized] = useState<boolean>(false);

	const logout = async (): Promise<void> => {
		setUser(undefined);
		Cookies.remove('access_token');
		Cookies.remove('user');
		Cookies.remove('admin');
		Cookies.remove('rememberMe');
		router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/login`);
	};

	useEffect(() => {
		// On component mount, check if user data exists in sessionStorage and set it to state

		const storedUser = document.cookie.includes('user') ? getDecryptedCookie('user') : getDecryptedCookie('admin');

		if (storedUser) {
			pathname === '/en/login'
				? router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/${storedUser?.role}/dashboard`)
				: null;
			setUser(storedUser);
		} else {
			pathname.includes('user') || pathname.includes('admin')
				? router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/login`)
				: null;
		}
		setInitialized(true);
	}, [initialized, router, pathname]);

	useEffect(() => {
		// const token = Cookies.get('session_token');
		const sessionData = getDecryptedCookie('admin');

		const checkSession = async () => {
			if (sessionData?.role === 'admin' && sessionData?.token) {
				try {
					const response = await api.get('/auth/check-session', {
						headers: {
							Authorization: `${sessionData?.token}`
						}
					});

					if (response && response.data && response.data.user) {
						setInitialized(true);
						console.log('got response from check session');
						// console.log(response.data);
						setUser(response.data.user);
						setEncryptedCookie(
							'admin',
							{
								token: response.data.refreshedToken,
								role: response.data.user.role,
								username: response.data.user.username,
								email: response.data.user.email
							},
							7
						);
					} else {
						setInitialized(true);
						Cookies.remove('admin');
						setUser(undefined);
						router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
					}
				} catch (error) {
					setInitialized(true);
					ErrorHandler.showNotification(error);
					Cookies.remove('admin');
					setUser(undefined);
					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
				}
			}
		};

		checkSession();
	}, [router]);

	useEffect(() => {
		const vendorSessionData = getDecryptedCookie('user');
		const getNewVendorAccess = async () => {
			if (vendorSessionData?.role === 'user' && vendorSessionData?.refresh_token) {
				try {
					const response = await getVendorAccessToken(vendorSessionData?.refresh_token);

					if (response.status === true) {
						// console.log('got response from generateAccessToken');
						setInitialized(true);
						setEncryptedCookie('access_token', response.data['access_token'], null);
					} else {
						setInitialized(true);
						Cookies.remove('access_token');
						Cookies.remove('user');
						router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
					}
				} catch (error) {
					setInitialized(true);
					ErrorHandler.showNotification(error);
					Cookies.remove('access_token');
					Cookies.remove('user');
					setUser(undefined);
					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
				}
			}
		};
		getNewVendorAccess();
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
				router.prefetch(`${process.env['NEXT_PUBLIC_SITE_URL']}${successRedirectUrl}`);

				const { vendorRegistrationResponse: loggedInUser } = response.data.data;

				const rememberMeData = getDecryptedCookie('rememberMe');

				//encypted access token with expire to session
				setEncryptedCookie('access_token', loggedInUser.access_token, null);

				//encrypted user data and expiry to 7 days
				setEncryptedCookie(
					'user',
					{
						refresh_token: loggedInUser.refresh_token,
						role: 'user',
						email: loggedInUser.vendor_email_id,
						username: loggedInUser.vendor_username
					},
					rememberMeData && rememberMeData?.keepLoggedIn == true ? 30 : 7
				);
				setUser({
					refresh_token: loggedInUser.refresh_token,
					role: 'user',
					email: loggedInUser.vendor_email_id,
					username: loggedInUser.vendor_username
				});
				message.success(successMessage);
				if (successRedirectUrl) {
					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}${successRedirectUrl}`);
				}
			}
		} catch (error: any) {
			console.log(error);
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
					setEncryptedCookie(
						'admin',
						{
							token: access_token,
							role: loggedInUser.role,
							username: loggedInUser.username,
							email: loggedInUser.email
						},
						7
					);
					setUser({
						token: access_token,
						role: loggedInUser.role,
						username: loggedInUser.username,
						email: loggedInUser.email
					});
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
