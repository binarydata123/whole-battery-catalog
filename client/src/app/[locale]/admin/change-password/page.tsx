'use client';
import { Form, Input, Button, message, Row, Col } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import { createNewPassword } from '@/lib/ApiAdapter';
import { useRouter, useSearchParams } from 'next/navigation';
import ErrorHandler from '@/lib/ErrorHandler';
import AuthContext from '@/contexts/AuthContext';
import Link from 'next/link';

export default function ResetPassword() {
	const [form] = Form.useForm();
	const searchParams = useSearchParams();
	const userID = searchParams.get('userId');
	const token = searchParams.get('token');
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { user } = useContext(AuthContext);

	const newPassword = async (values: any) => {
		try {
			setLoading(true);
			const updatedValues = { ...values, userId: user?._id, token: token };
			const res = await createNewPassword(updatedValues);
			if (res) {
				setLoading(false);
				message.success('New password has been set successfully');
				router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/login`);
				console.log('successfully changed');
			}
		} catch (error) {
			setLoading(false);
			ErrorHandler.showNotification(error);
		}
	};

	return (
		<div>
			<div style={{ maxWidth: '600px' }}>
				<h1 style={{ textAlign: 'start' }}>Set New Password</h1>
				<div className='gapMarginTop'></div>
				<Form
					layout='vertical'
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={newPassword}
					form={form}
				>
					<Form.Item
						name="currentPassword"
						label='Enter Current Password'
						rules={[{ required: true, message: 'Please input your Current Password!' }]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Enter Current Password"
							style={{ height: '40px' }}
						/>
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} label='Enter New Password'>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Enter New Password"
							style={{ height: '40px' }}
						/>
					</Form.Item>
					<Form.Item
						name="confirmPassword"
						label='Enter Confirm Password'
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
							placeholder="Enter Confirm Password"
							style={{ height: '40px' }}
						/>
					</Form.Item>
					<Form.Item>
						<div className='textEnd'>
							<Button
								type="primary"
								htmlType="submit"
								className="register-form-button"
							>
								{loading ? 'Please wait...' : 'Reset Password'}
							</Button>
						</div>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
