'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import ErrorHandler from '@/lib/ErrorHandler';
import { User } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { message, notification, Spin } from 'antd';
// import handlePayment from '@/components/Payment/handlePayment';
// import verifyPayment from '@/components/Payment/verifyPayment';

const api = axios.create({
	baseURL: process.env['NEXT_PUBLIC_API_URL'] || ''
});

interface AuthContextDefaults {
	user?: User | undefined;
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
	logout: () => Promise<void>;
	login: (email: string, password: string, url: string) => Promise<string>;
}

interface AuthContextProp {
	children?: React.ReactNode;
}

const AuthContext = createContext<AuthContextDefaults>({
	logout: () => Promise.resolve(),
	login: () => Promise.resolve(''),
	setUser: () => {}
});

const AuthContextProvider = ({ children }: AuthContextProp) => {
	const router = useRouter();
	const [user, setUser] = useState<User | undefined>();
	const [sessionId, setSessionId] = useState(null);
	const [initialized, setInitialized] = useState<boolean>(false);

	// useEffect(() => {
	// 	const token = Cookies.get('session_token');
	// 	const checkSession = async () => {
	// 		if (token) {
	// 			try {
	// 				const response = await api.get('/auth/check-session', {
	// 					headers: {
	// 						Authorization: `${token}`
	// 					}
	// 				});

	// 				if (response && response.data && response.data.user) {
	// 					setInitialized(true);
	// 					setUser(response.data.user);
	// 					Cookies.set('session_token', response.data.refreshedToken);
	// 				} else {
	// 					setInitialized(true);
	// 					Cookies.remove('session_token');
	// 					setUser(undefined);
	// 					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
	// 				}
	// 			} catch (error) {
	// 				setInitialized(true);
	// 				ErrorHandler.showNotification(error);
	// 				Cookies.remove('session_token');
	// 				setUser(undefined);
	// 				router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
	// 			}
	// 		} else {
	// 			// router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
	// 		}
	// 	};

	// 	checkSession();
	// }, []);

	// useEffect(() => {
	// 	if (initialized && user) {
	// 		const currentPath = window.location.pathname;
	// 		if (
	// 			(currentPath.startsWith('/admin') && user?.role !== 'admin') ||
	// 			(currentPath.startsWith('/user') && user?.role !== 'user')
	// 		) {
	// 			console.error('[AUTH] Unauthorized');
	// 			switch (user?.role) {
	// 				case 'admin':
	// 					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/admin/dashboard`);
	// 					break;
	// 				case 'user':
	// 					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
	// 					break;
	// 				default:
	// 					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
	// 					break;
	// 			}
	// 			return;
	// 		} else {
	// 			return;
	// 		}
	// 	}
	// }, [initialized, user]);

	const login = async (username: string, password: string, url: string) => {
		const data = {
			username: username,
			password: password
		};
		const requestConfig: AxiosRequestConfig = {
			url: process.env['NEXT_PUBLIC_API_URL'] + '/auth/login',
			method: 'post',
			data: {
				...data
			}
		};

		try {
			const response = await axios(requestConfig);
			console.log('response from reqConfig', response);
			if (response && response.data && response.data.token && response.data.user) {
				const { token, user: loggedInUser } = response.data;

				//check user has paid or not
				// if (!loggedInUser.hasPaid) {
				// 	notification.info({
				// 		message: 'No active subscription',
				// 		description: (
				// 			<div style={{ display: 'flex', columnGap: 6 }}>
				// 				<Spin />
				// 				<p>redirecting to payment page...</p>
				// 			</div>
				// 		),
				// 		duration: 3000
				// 	});
				// 	setTimeout(async () => {
				// 		await handlePayment(10, 'usd', loggedInUser._id);
				// 	}, 3000);
				// } else {
				axios.defaults.headers.common.Authorization = `Bearer ${token}`;
				Cookies.set('session_token', token);
				setUser(loggedInUser);
				message.success('You are logged In!');
				if (url) {
					router.push(url);
				} else {
					switch (loggedInUser.role) {
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
				}

				return token;
			}
			// }
		} catch (error: any) {
			ErrorHandler.showNotification(error);
		}
	};

	const logout = async (): Promise<void> => {
		setUser(undefined);
		Cookies.remove('session_token');
		router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/login`);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				logout,
				setUser,
				login
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContextProvider };
export default AuthContext;
