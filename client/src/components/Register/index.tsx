'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import AuthContext from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/ApiAdapter';
import { signIn, signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { socialLogin } from '@/lib/ApiAdapter';
import ErrorHandler from '@/lib/ErrorHandler';

const Register = () => {
	const [form] = Form.useForm();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { login, setUser } = useContext(AuthContext);
	const { data: session } = useSession();

	const onFinish = async (values: any) => {
		try {
			setLoading(true);
			const res = await register(values);
			if (res.status === true) {
				message.success(res.message);
				form.resetFields();
				router.push('/en/login');
			} else {
				message.error(res.message);
			}
		} catch (error) {
			console.log(error);
			message.error('Failed to register. Please try again later.');
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
			<h1 style={{ textAlign: 'center' }}>Register</h1>
			<Form
				name="normal_register"
				className="register-form"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				form={form}
				style={{ paddingTop: '20px' }}
			>
				<Form.Item name="name" rules={[{ required: true, message: 'Please input your Full Name!' }]}>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
				</Form.Item>
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
				<Form.Item
					name="confirmPassword"
					dependencies={['password']}
					rules={[
						{ required: true, message: 'Please confirm your Password!' },
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve();
								}
								return Promise.reject(new Error('The two passwords do not match!'));
							}
						})
					]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Confirm Password"
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="register-form-button" style={{ width: '100%' }}>
						{loading ? 'Please wait...' : 'Register'}
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
					Already registered?{' '}
					<Link href="/en/login" passHref>
						Log in here
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Register;
