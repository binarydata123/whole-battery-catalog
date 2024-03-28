'use client';
import { Form, Input, Button, message, Row, Col, Flex, Rate } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { createNewPassword } from '@/lib/ApiAdapter';
import { useRouter, useSearchParams } from 'next/navigation';
import ErrorHandler from '@/lib/ErrorHandler';
import Link from 'next/link';

const ResetPasswordForm = () => {
	const [form] = Form.useForm();
	const searchParams = useSearchParams();
	const userID = searchParams.get('userId');
	const token = searchParams.get('token');
	const router = useRouter();
	const [value, setValue] = useState<number>(0);
	const [loading, setLoading] = useState(false);

	const newPassword = async (values: any) => {
		try {
			setLoading(true);
			const updatedValues = { ...values, userId: userID, token: token };
			const res = await createNewPassword(updatedValues);
			if (res) {
				setLoading(false);
				message.success('New password has been set successfully');
				router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/login`);
			}
		} catch (error) {
			setLoading(false);
			ErrorHandler.showNotification(error);
		}
	};
	return (
		<div style={{ maxWidth: '300px', margin: 'auto', paddingTop: '300px' }}>
			<h1 style={{ textAlign: 'center' }}>Set New Password</h1>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={newPassword}
				form={form}
				style={{ paddingTop: '20px' }}
			>
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
						{loading ? 'Please wait...' : 'Reset Password'}
					</Button>
				</Form.Item>
				<Link href="/en/login" passHref>
					<Button type="primary" style={{ width: '100%' }}>
						Back To Login
					</Button>
				</Link>
			</Form>
		</div>
	);
};

export default ResetPasswordForm;
