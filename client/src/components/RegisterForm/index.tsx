'use client';
import React, { useContext, useState } from 'react';
import './style.css';
import { Button, Form, Input, message, notification, Spin } from 'antd';
import ParaText from '@/app/commonUl/ParaText';
// import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Titles from '@/app/commonUl/Titles';
import { useRouter } from 'next/navigation';
// import { vendorRegister } from '@/lib/vendorApiAdapter';
import VendorAuth from '@/contexts/VendorAuthProvider';
// import Cookies from 'js-cookie';
// import handlePayment from '../Payment/handlePayment';

type FieldType = {
	fullName?: string;
	username?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	remember?: string;
};
export default function RegisterForm() {
	const { vendorRegister } = useContext(VendorAuth);

	const [form] = Form.useForm();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const onFinish = async (values: any) => {
		try {
			setLoading(true);
			await vendorRegister(values.fullName, values.username, values.email, values.password);
		} catch (error: any) {
			setLoading(false);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="" id="loginForm">
				<div>
					<Titles level={3} color="black" className="textCenter">
						Create Your Account
					</Titles>
					<ParaText color="black" size="small" className="textCenter dBlock">
						Join Our Community Today and Unlock Exclusive Benefits!
					</ParaText>
				</div>
				<div className="gapMarginFourTeenTop"></div>
				<Form name="basic" onFinish={onFinish} autoComplete="off" layout="vertical" form={form}>
					<Form.Item<FieldType>
						label="Full Name"
						name="fullName"
						rules={[
							{ required: true, message: 'Please input your full name!' },
							{ pattern: /^[a-zA-Z\s]+$/, message: 'Only alphabets and whitespace allowed' }
						]}
					>
						<Input style={{ width: '100%', height: '45px', textTransform: 'capitalize' }} maxLength={50} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Username"
						name="username"
						rules={[
							{ required: true, message: 'Please input your username!' },
							{
								pattern: /^(?!.*\s)[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)?$/,
								message: 'only alphanumerics, one (.) and one (_) allowed, no whitespace'
							}
						]}
					>
						<Input style={{ width: '100%', height: '45px' }} maxLength={40} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Email"
						name="email"
						rules={[
							{ required: true, message: 'Please input your email!' },
							{
								pattern: /^[\w\.-]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*$/,
								message: 'Please enter valid email address'
							}
						]}
					>
						<Input style={{ width: '100%', height: '45px' }} maxLength={50} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Password"
						name="password"
						rules={[
							{ required: true, message: 'Please input your password!' },
							{ min: 8, message: 'Need at least 8 characters' },
							{ pattern: /^\S*$/, message: 'No whitespace allowed' }
						]}
					>
						<Input.Password style={{ width: '100%', height: '45px' }} maxLength={50} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Confirm Password"
						name="confirmPassword"
						dependencies={['password']}
						rules={[
							// { required: true, message: 'Please input your password again!' },
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
						<Input.Password style={{ width: '100%', height: '45px' }} maxLength={50} />
					</Form.Item>
					<div className="gapMarginFourTeenTop"></div>
					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%', height: '45px' }}>
							{loading ? 'Please wait...' : 'Register'}
						</Button>
					</Form.Item>
					{/* <Form.Item>
						<Button
							icon={<FcGoogle style={{ fontSize: '20px' }} />}
							// htmlType="submit"
							className="defaultButton"
							style={{ width: '100%', height: '45px' }}
						>
							Sign in with Google
						</Button>
					</Form.Item> */}
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
