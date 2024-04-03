'use client';

import { useState, createContext, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { User } from '@/lib/types';
import Cookies from 'js-cookie';
import { message, notification, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import MyLoaderAnimation from '@/components/LoaderAnimation';
import ErrorHandler from '@/lib/ErrorHandler';

const api = axios.create({
	baseURL: process.env['NEXT_PUBLIC_API_URL'] || ''
});

interface AuthContextDefaults {
	user?: User | undefined;
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
	logout: () => Promise<void>;
	vendorLogin: (username: string, password: string) => Promise<any>;
	vendorRegister: (fullName: string, username: string, email: string, password: string) => Promise<any>;
}

interface AuthContextProp {
	children?: React.ReactNode;
}

const VendorAuth = createContext<AuthContextDefaults>({
	logout: () => Promise.resolve(),
	vendorLogin: () => Promise.resolve(''),
	vendorRegister: () => Promise.resolve(''),
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
				Cookies.set('refresh_token', loggedInUser.refresh_token);
				const { refresh_token, ...userData } = loggedInUser;
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

	// Render Spinner or null while initialization is in progress
	if (!initialized) {
		return (
			<>
				<MyLoaderAnimation />
			</>
		);
	}

	return (
		<VendorAuth.Provider value={{ user, setUser, vendorLogin, vendorRegister, logout }}>
			{children}
		</VendorAuth.Provider>
	);
};

export { VendorAuthProvider };
export default VendorAuth;
