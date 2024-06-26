'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import AuthContext from '@/contexts/AuthContext';
import { signIn, signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { socialLogin } from '@/lib/ApiAdapter';
import { redirect, useRouter } from 'next/navigation';
import ErrorHandler from '@/lib/ErrorHandler';

const Login = () => {
	const [form] = Form.useForm();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { login, setUser } = useContext(AuthContext);
	const { data: session } = useSession();

	const onFinish = async (values: any) => {
		setLoading(true);
		try {
			await login(values.email, values.password, '');
		} catch (error) {
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (session) {
			SocialData(session.user);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session]);

	const SocialData = (user: any) => {
		const data = {
			name: user.name,
			email: user.email
		};
		socialLogin(data)
			.then((res: any) => {
				if (res) {
					Cookies.set('session_token', res.token);
					setUser(res.user);
					signOut({ redirect: false }).then();
					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}`);
				} else {
					message.error(res.message);
				}
			})
			.catch((err) => {
				ErrorHandler.showNotification(err);
			});
	};

	const handleGoogleLogin = async () => {
		try {
			await signIn('google');
		} catch (error) {
			console.error('Google login failed:', error);
		}
	};

	const handleFacebookLogin = async () => {
		try {
			await signIn('facebook');
		} catch (error) {
			console.error('Facebook login failed:', error);
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
					<Link href="/en/register" passHref>
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

export default Login;
