'use client';
import React from 'react';
import './style.css';
import { Button, Checkbox, Form, type FormProps, Input, Row, Col, notification, message } from 'antd';
import { signIn, signOut, useSession } from 'next-auth/react';
import { socialLogin } from '@/lib/ApiAdapter';
import { useRouter } from 'next/navigation';
import AuthContext from '@/contexts/AuthContext';
import Cookies from 'js-cookie';
import ParaText from '@/app/commonUl/ParaText';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Titles from '@/app/commonUl/Titles';
import ErrorHandler from '@/lib/ErrorHandler';

type FieldType = {
	username: string;
	password: string;
	remember: Boolean;
};
export default function LoginForm() {
	const { data: session } = useSession();
	const [loading, setLoading] = React.useState<Boolean>(false);
	const [form] = Form.useForm();
	const RememberMeCookie = 'rememberMe';
	const { login, setUser } = React.useContext(AuthContext);
	const router = useRouter();

	const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
		setLoading(true);
		try {
			if (values.remember) {
				// if remember me is checked
				Cookies.set(
					RememberMeCookie,
					JSON.stringify({ username: values.username, password: values.password, remember: values.remember })
				);
			} else {
				Cookies.remove(RememberMeCookie);
			}

			await login(values.username, values.password, '');
		} catch (error: any) {
			setLoading(false);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	React.useEffect(() => {
		// Check if remember me cookie exists and fill in the form fields
		const rememberMeData = Cookies.get(RememberMeCookie);
		if (rememberMeData) {
			const parsedData = JSON.parse(rememberMeData);
			if (parsedData && parsedData.username) {
				form.setFieldsValue({
					username: parsedData.username,
					password: parsedData.password || '',
					remember: true
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const SocialData = (user: any) => {
		const data = {
			name: user.name,
			email: user.email
		};
		socialLogin(data)
			.then((res: any) => {
				if (res) {
					Cookies.set('session_token', res.token);
					// console.log("res.user", res.user);
					setUser(res.user);

					// signOut({ redirect: false }).then();
					router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/${res.user.role}/dashboard`);
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

	React.useEffect(() => {
		if (session) {
			SocialData(session.user);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session]);

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
					form={form}
					name="basic"
					onFinish={(values) => onFinish(values)}
					autoComplete="off"
					layout="vertical"
				>
					<Form.Item<FieldType>
						label="Username"
						name="username"
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

					<Row align="middle">
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
							<Form.Item<FieldType> name="remember" valuePropName="checked">
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
							{loading ? 'Please wait...' : 'Login'}
						</Button>
					</Form.Item>
					<Form.Item>
						<Button
							icon={<FcGoogle style={{ fontSize: '20px' }} />}
							type="link"
							onClick={handleGoogleLogin}
							className="defaultButton"
							style={{ width: '100%', height: '45px' }}
						>
							Sign in with Google
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
