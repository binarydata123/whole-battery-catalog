'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import AuthContext from '@/contexts/AuthContext';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { socialLogin } from '@/lib/ApiAdapter';
import ErrorHandler from '@/lib/ErrorHandler';

const LoginForm = () => {
	const [form] = Form.useForm();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { setUser, login } = useContext(AuthContext);
	const { data: session } = useSession();

	const onFinish = async (values: any) => {
		setLoading(true);
		try {
			await login(values.email, values.password, '');
		} catch (error) {
			setLoading(false);
			message.error('Invalid email or password. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	const SocialData = async (user: any) => {
		const data = {
			name: user.name,
			email: user.email
		};
		try {
			const res = await socialLogin(data);
			if (res) {
				Cookies.set('session_token', res.token);
				setUser(res.user);
				router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
			} else {
				message.error('Social login failed.');
			}
		} catch (err) {
			console.error('Social login failed:', err);
			ErrorHandler.showNotification(err);
		}
	};

	const handleGoogleLogin = async () => {
		try {
			await signIn('google');
		} catch (error) {
			console.error('Google login failed:', error);
			message.error('Google login failed. Please try again.');
		}
	};

	const handleFacebookLogin = async () => {
		try {
			await signIn('facebook');
		} catch (error) {
			console.error('Facebook login failed:', error);
			message.error('Facebook login failed. Please try again.');
		}
	};

	return (
		<div style={{ maxWidth: '300px', margin: 'auto', paddingTop: '300px' }}>
			<h1 style={{ textAlign: 'center' }}>Login</h1>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				form={form}
				style={{ paddingTop: '20px' }}
			>
				<Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
				</Form.Item>
				<Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
						{loading ? 'Please wait...' : 'Log in'}
					</Button>
				</Form.Item>
				<Form.Item>
					<div style={{ textAlign: 'center' }}>Or</div>
					<div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
						<Button
							type="primary"
							style={{ width: '45%' }}
							icon={<i className="fab fa-google" style={{ marginRight: '5px' }} />}
							onClick={handleGoogleLogin}
						>
							Google
						</Button>
						<Button
							type="primary"
							style={{ width: '45%' }}
							icon={<i className="fab fa-facebook" style={{ marginRight: '5px' }} />}
							onClick={handleFacebookLogin}
						>
							Facebook
						</Button>
					</div>
				</Form.Item>
			</Form>
			<div style={{ textAlign: 'center', marginTop: '20px' }}>
				<span>
					Not registered?{' '}
					<Link href="/en/Register" passHref>
						Register here
					</Link>
				</span>
			</div>
			<div style={{ textAlign: 'center', marginTop: '20px' }}>
				<span>
					Forgot Password?{' '}
					<Link href="/en/forgot-password" passHref>
						Click here
					</Link>
				</span>
			</div>
		</div>
	);
};

export default LoginForm;
