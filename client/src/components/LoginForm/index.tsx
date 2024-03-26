'use client';
import React, { useContext, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthContext from '@/contexts/AuthContext';
import { signIn } from 'next-auth/react';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';
import { FcGoogle } from 'react-icons/fc';
import { Row, Col } from 'antd';

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};

export default function LoginForm() {
	const router = useRouter();
	const { user, login } = useContext(AuthContext);
	const [loginError, setLoginError] = useState(false);
	const [loading, setLoading] = useState(false);

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

	const handleGoogleLogin = async () => {
		try {
			await signIn('google');
		} catch (error) {
			console.error('Google login failed:', error);
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
					<Form.Item
						label="Username"
						name="email"
						rules={[{ required: true, message: 'Please input your username!' }]}
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

					<Row align="middle">
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
							<Form.Item name="remember" valuePropName="checked">
								<Checkbox>Remember me</Checkbox>
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="textEnd">
							<ParaText size="extraSmall" color="defaultColor">
								<Link
									href="/en/forgot-password"
									className="fontWeightEight"
									style={{ color: '#0A8FDC', marginBottom: '12px', display: 'block' }}
								>
									Forgot password
								</Link>
							</ParaText>
						</Col>
					</Row>

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%', height: '45px' }}>
							Log in
						</Button>
					</Form.Item>
					<Form.Item>
						<Button type="primary" onClick={handleGoogleLogin} style={{ width: '100%', height: '45px' }}>
							Sign in with Google
						</Button>
					</Form.Item>
					<div className="gapMarginFourTeenTop"></div>
					<div className="textCenter">
						<ParaText size="extraSmall" color="defaultColor">
							Don’t have an account?{' '}
							<Link href="/en/register" className="fontWeightEight" style={{ color: '#0A8FDC' }}>
								Sign up
							</Link>
						</ParaText>
					</div>
				</Form>
				{loginError && <div style={{ color: 'red' }}>Invalid username or password. Please try again.</div>}
			</div>
		</>
	);
}
