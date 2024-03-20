'use client';
import React from 'react';
import './style.css';
import { Button, Checkbox, Form, type FormProps, Input, Row, Col } from 'antd';
import ParaText from '@/app/commonUl/ParaText';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Titles from '@/app/commonUl/Titles';
type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};
export default function ForgotPassword() {
	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo);
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
					<Form.Item<FieldType>
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<div className="textEnd">
						<ParaText size="extraSmall" color="defaultColor">
							<Link href="/en/auth/login" className="fontWeightEight" style={{ color: '#0A8FDC' }}>
								Login
							</Link>
						</ParaText>
					</div>
				</Form>
			</div>
		</>
	);
}
