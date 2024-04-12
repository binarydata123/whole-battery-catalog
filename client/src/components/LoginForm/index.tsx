'use client';
import React from 'react';
import './style.css';
import { Button, Checkbox, Form, type FormProps, Input, Row, Col, notification, message, Spin, Segmented } from 'antd';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import { socialLogin } from '@/lib/ApiAdapter';
import { useRouter } from 'next/navigation';
import VendorAuth from '@/contexts/VendorAuthProvider';
// import { vendorLogin } from '@/lib/vendorApiAdapter';
import Cookies from 'js-cookie';
import ParaText from '@/app/commonUl/ParaText';
import { getDecryptedCookie, setEncryptedCookie } from '@/helpers/cookie-encrypt';
// import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Titles from '@/app/commonUl/Titles';
import AuthContext from '@/contexts/AuthContext';
import { SegmentedValue } from 'antd/es/segmented';
// import ErrorHandler from '@/lib/ErrorHandler';

type FieldType = {
	username: string;
	password: string;
	keepMeLoggedIn: Boolean;
};
export default function LoginForm() {
	const [loginOption, setLoginOption] = React.useState<SegmentedValue>('User');
	const [loading, setLoading] = React.useState<Boolean>(false);
	const [form] = Form.useForm();

	// const RememberMeCookie = 'rememberMe';
	const { vendorLogin, adminLogin, user, setUser } = React.useContext(VendorAuth);
	const router = useRouter();

	const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
		setLoading(true);
		try {
			if (values.keepMeLoggedIn) {
				// if remember me is checked
				setEncryptedCookie(
					'rememberMe',
					{
						keepLoggedIn: values.keepMeLoggedIn,
						username: values.username
					},
					7
				);
			} else {
				Cookies.remove('rememberMe');
			}

			if (loginOption === 'User') {
				await vendorLogin(values.username, values.password);
			} else {
				await adminLogin(values.username, values.password);
			}
		} catch (error: any) {
			setLoading(false);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	// React.useEffect(() => {
	// 	// Check if remember me cookie exists and fill in the form fields

	// 	const rememberMe = getDecryptedCookie('rememberMe');
	// 	if (rememberMe?.keepLoggedIn) {
	// 		if (document.cookie.includes('user')) {
	// 			router.prefetch(`${process.env['NEXT_PUBLIC_SITE_URL']}/${(rememberMe?.role).toLowerCase()}/dashboard`);
	// 			setUser(getDecryptedCookie('user'));
	// 		}

	// 		// if (document.cookie.includes('session')) {
	// 		// 	router.prefetch(`${process.env['NEXT_PUBLIC_SITE_URL']}/${(rememberMe?.role).toLowerCase()}/dashboard`);
	// 		// 	setUser(getDecryptedCookie('session'));
	// 		// }

	// 		router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/${(rememberMe?.role).toLowerCase()}/dashboard`);
	// 	}
	// }, [router, setUser]);

	return (
		<>
			<div className="" id="loginForm">
				<div>
					<Titles level={3} color="black" className="textCenter">
						{loginOption === 'User' ? 'Welcome back!' : 'Admin Panel'}
					</Titles>
					<ParaText color="black" size="medium" className="textCenter dBlock">
						Login to Your Account and Explore Exciting Features
					</ParaText>
				</div>
				<div className="gapMarginFourTeenTop"></div>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
					<Segmented
						options={['User', 'Admin']}
						defaultValue={loginOption}
						value={loginOption}
						onChange={setLoginOption}
						style={{ backgroundColor: '#1ca0f0', color: 'white' }}
					/>
				</div>
				<div className="gapMarginTop"></div>
				<Form
					form={form}
					name="basic"
					onFinish={(values) => onFinish(values)}
					autoComplete="off"
					layout="vertical"
				>
					<Form.Item<FieldType>
						label="Username"
						name="username"
						rules={[
							{ required: true, message: 'Please input your username!' },
							{
								pattern: /^[a-zA-Z0-9._]+$/,
								message: 'only alphanumerics, (.) and (_) allowed, no whitespace'
							}
						]}
					>
						<Input style={{ width: '100%', height: '45px' }} maxLength={40} />
					</Form.Item>

					<Form.Item<FieldType>
						label="Password"
						name="password"
						rules={[
							{ required: true, message: 'Please input your password!' },
							{ pattern: /^\S*$/, message: 'No whitespace allowed' }
						]}
					>
						<Input.Password style={{ width: '100%', height: '45px' }} maxLength={50} />
					</Form.Item>

					<Row align="middle">
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
							<Form.Item<FieldType> name="keepMeLoggedIn" valuePropName="checked">
								<Checkbox>Keep me logged in</Checkbox>
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="textEnd">
							<ParaText size="extraSmall" color="defaultColor">
								<Link
									href="/en/forgot-password"
									className="fontWeightEight"
									style={{ color: '#0A8FDC', marginBottom: '12px', display: 'block' }}
								>
									Forgot password?
								</Link>
							</ParaText>
						</Col>
					</Row>

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%', height: '45px' }}>
							{loading ? 'Please wait...' : 'Login'}
						</Button>
					</Form.Item>
					<div className="gapMarginFourTeenTop"></div>
					<div className="textCenter">
						<ParaText size="extraSmall" color="defaultColor">
							Don&apos;t have an account?{' '}
							<Link href="/en/register" className="fontWeightEight" style={{ color: '#0A8FDC' }}>
								Sign up
							</Link>
						</ParaText>
					</div>
				</Form>
			</div>
		</>
	);
}
