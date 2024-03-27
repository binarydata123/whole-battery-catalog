'use client';
// import { SessionProvider } from 'next-auth/react';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import AntdConfig from '@/lib/AntdConfig';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import Header from '../Header';
import Footer from '../Footer';
interface Props {
	children: ReactNode;
}

const Providers = (props: Props) => {
	const pathname = usePathname();

	const { user } = useContext(AuthContext);
	const excludedPaths = [
		'/admin',
		'/user',
		'/staff',
		'/login',
		'/otp',
		'/register',
		'/forgot-password',
		'/reset-password',
		'/payment'
	];

	return (
		<SessionProvider>
			{excludedPaths.some((path) => pathname.includes(path)) ? null : <Header />}
			{props.children}
			{excludedPaths.some((path) => pathname.includes(path)) ? null : <Footer />}
		</SessionProvider>
	);
};

export default Providers;
