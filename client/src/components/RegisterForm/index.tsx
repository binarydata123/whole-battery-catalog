'use client';
import React, { useContext, useState } from 'react';
import './style.css';
import { Button, Checkbox, Form, type FormProps, Input, Row, Col, message, Select } from 'antd';
import ParaText from '@/app/commonUl/ParaText';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Titles from '@/app/commonUl/Titles';
import { useRouter } from 'next/navigation';
import AuthContext from '@/contexts/AuthContext';
import { useSession } from 'next-auth/react';
import { register } from '@/lib/ApiAdapter';
import { loadStripe } from '@stripe/stripe-js';
import { UserOutlined } from '@ant-design/icons';

type FieldType = {
	name?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	remember?: string;
};
export default function RegisterForm() {
	const [form] = Form.useForm();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [currency, setCurrency] = useState('');
	// const { login, setUser } = useContext(AuthContext);
	// const { data: session } = useSession();

	const stripePromise = loadStripe('pk_test_FQu4ActGupRmMrkmBpwU26js');

	const handlePayment = async (price: any, userId: any, currency: string) => {
		try {
			setLoading(true);
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/create-checkout-session`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ price: price, userId, currency })
			});

			const session = await response.json();

			const stripe = await stripePromise;
			const result = await stripe?.redirectToCheckout({
				sessionId: session.id
			});

			if (result?.error) {
				console.error('Error:', result.error);
				message.error('Payment failed');
			}
		} catch (error) {
			console.error('Error:', error);
			message.error('Payment failed');
		} finally {
			setLoading(false);
		}
	};

	const onFinish = async (values: any) => {
		try {
			setLoading(true);
			const res = await register(values);
			console.log(res);
			if (res.status === true) {
				await handlePayment(10, res.user._id, 'usd');
				// message.success(res.message);
				// form.resetFields();
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
				<Form name="basic" onFinish={onFinish} autoComplete="off" layout="vertical" form={form}>
					<Form.Item<FieldType>
						label="Full Name"
						name="name"
						rules={[{ required: true, message: 'Please input your first name!' }]}
					>
						<Input style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Email"
						name="email"
						rules={[{ required: true, message: 'Please input your email!' }]}
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
							{ required: true, message: 'Please input your password!' },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error('passwords do not match'));
								}
							})
						]}
					>
						<Input.Password style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<div className="gapMarginFourTeenTop"></div>
					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%', height: '45px' }}>
							{loading ? 'Please wait...' : 'Register'}
						</Button>
					</Form.Item>
					<Form.Item>
						<Button
							icon={<FcGoogle style={{ fontSize: '20px' }} />}
							htmlType="submit"
							className="defaultButton"
							style={{ width: '100%', height: '45px' }}
						>
							Sign in with Google
						</Button>
					</Form.Item>
					<div className="gapMarginFourTeenTop"></div>
					<div className="textCenter">
						<ParaText size="extraSmall" color="defaultColor">
							Already have an account?{' '}
							<Link href="/en/login" className="fontWeightEight" style={{ color: '#0A8FDC' }}>
								Login
							</Link>
						</ParaText>
					</div>
				</Form>
			</div>
		</>
	);
}
