'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/ApiAdapter';
import Cookies from 'js-cookie';
import './style.css';
import ErrorHandler from '@/lib/ErrorHandler';

export default function RegisterForm() {
	const [form] = Form.useForm();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { data: session } = useSession();

	const onFinish = async (values: any) => {
		setLoading(true);
		try {
			const response = await register(values);
			console.log('Registration response:', response);

			message.success('Registration successful');
			router.push('/en/login');
		} catch (error) {
			console.error('Registration failed:', error);
			message.error('Registration failed. Please try again later.');
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	useEffect(() => {
		if (session) {
		}
	}, [session]);

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
		<>
			<div className="" id="loginForm">
				<div>
					<Titles level={3} color="black" className="textCenter">
						Welcome back
					</Titles>
					<ParaText color="black" size="medium" className="textCenter dBlock">
						Welcome back! Please enter your details.
					</ParaText>
				</div>
				<div className="gapMarginFourTeenTop"></div>
				<Form
					name="basic"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					layout="vertical"
				>
					<Form.Item
						label="First Name"
						name="name"
						rules={[{ required: true, message: 'Please input your first name!' }]}
					>
						<Input style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<Form.Item
						label="Last Name"
						name="lastName"
						rules={[{ required: true, message: 'Please input your last name!' }]}
					>
						<Input style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<Form.Item
						label="Email"
						name="email"
						rules={[{ required: true, message: 'Please input your email!' }]}
					>
						<Input style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password style={{ width: '100%', height: '45px' }} />
					</Form.Item>

					<Form.Item
						label="Confirm Password"
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
						<Input.Password style={{ width: '100%', height: '45px' }} />
					</Form.Item>

					<Row align="middle">
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
							<Form.Item name="remember" valuePropName="checked">
								<Checkbox>Remember me</Checkbox>
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="textEnd">
							<ParaText size="extraSmall" color="defaultColor">
								<Link
									href="/en/login"
									className="fontWeightEight"
									style={{ color: '#0A8FDC', marginBottom: '12px', display: 'block' }}
								>
									Login
								</Link>
							</ParaText>
						</Col>
					</Row>

					<Form.Item>
						<Button type="primary" style={{ width: '100%', height: '45px' }} htmlType="submit">
							Sign in
						</Button>
					</Form.Item>
					<Form.Item>
						<Button
							icon={<FcGoogle style={{ fontSize: '20px' }} />}
							htmlType="submit"
							className="defaultButton"
							style={{ width: '100%', height: '45px' }}
							onClick={handleGoogleLogin}
						>
							Sign in with Google
						</Button>
					</Form.Item>
					<div className="gapMarginFourTeenTop"></div>
					<div className="textCenter">
						<ParaText size="extraSmall" color="defaultColor">
							Don’t have an account?{' '}
							<Link href="/en//login" className="fontWeightEight" style={{ color: '#0A8FDC' }}>
								Login
							</Link>
						</ParaText>
					</div>
				</Form>
			</div>
		</>
	);
}
