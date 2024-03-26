'use client';
import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { Button, Checkbox, Form, type FormProps, Input, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import ParaText from '@/app/commonUl/ParaText';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Titles from '@/app/commonUl/Titles';
import { useRouter } from 'next/navigation';
import AuthContext from '@/contexts/AuthContext';
import { signIn, signOut, useSession } from 'next-auth/react';
import { register, socialLogin } from '@/lib/ApiAdapter';
import Cookies from 'js-cookie';
import ErrorHandler from '@/lib/ErrorHandler';
type FieldType = {
	name?: string;
	email?: string;
	password?: string;
	remember?: string;
	confirmPassword?: string;
};
export default function RegisterForm() {
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
				<Form name="basic" onFinish={onFinish} autoComplete="off" layout="vertical">
					<Form.Item<FieldType>
						label="Full Name"
						name="name"
						rules={[{ required: true, message: 'Please input your FullName!' }]}
					>
						<Input style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Email"
						name="email"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password style={{ width: '100%', height: '45px' }} />
					</Form.Item>

					<Form.Item<FieldType>
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
							<Form.Item<FieldType> name="remember" valuePropName="checked">
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
						<Link href="/en/register">
							<Button type="primary" htmlType="submit" style={{ width: '100%', height: '45px' }}>
								{loading ? 'Please wait...' : 'Sign Up '}
							</Button>
						</Link>
					</Form.Item>
					<Form.Item>
						<Link href="/en/auth/sign-google">
							<Button
								icon={<FcGoogle style={{ fontSize: '20px' }} />}
								htmlType="submit"
								className="defaultButton"
								style={{ width: '100%', height: '45px' }}
							>
								Sign in with Google
							</Button>
						</Link>
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
