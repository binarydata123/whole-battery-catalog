'use client';
import React from 'react';
import './style.css';
import { Button, Form, Input } from 'antd';
import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';
import { forgetEmailPassword } from '@/lib/ApiAdapter';

export default function ForgotPassword() {
	const onFinish = async (values: { email: string }) => {
		try {
			await forgetEmailPassword(values);
			console.log('Reset password link sent successfully');
		} catch (error) {
			console.error('Failed to send reset password link:', error);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className="customContainer">
			<div className="loginForm">
				<Titles level={5} color="black" className="textUppercase textCenter">
					Forgot Password
				</Titles>
				<div className="gapMarginTop"></div>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
						<Input className="site-form-item-icon" style={{ height: '45px' }} placeholder="Email" />
					</Form.Item>
					<div className="gapMarginTop"></div>
					<div className="textEnd">
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							style={{ width: '100%' }}
						>
							Send Me The Link
						</Button>
					</div>
					<div className="gapMarginTop textCenter">
						<ParaText color="black" size="textGraf">
							<Link
								href="/en/login"
								style={{ color: 'rgba(46, 163, 242, 1) !important', fontWeight: 'bold !important' }}
							>
								{' '}
								<FaArrowLeft /> Back to login{' '}
							</Link>{' '}
						</ParaText>
					</div>
				</Form>
			</div>
		</div>
	);
}
