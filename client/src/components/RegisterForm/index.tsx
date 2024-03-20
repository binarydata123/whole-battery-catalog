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
export default function RegisterForm() {
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
						label="Fast Name"
						name="username"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Last Name"
						name="username"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input style={{ width: '100%', height: '45px' }} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Email"
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
									href="/en/auth/login"
									className="fontWeightEight"
									style={{ color: '#0A8FDC', marginBottom: '12px', display: 'block' }}
								>
									Login
								</Link>
							</ParaText>
						</Col>
					</Row>

					<Form.Item>
						<Link href="/en/auth/register">
							<Button type="primary" htmlType="submit" style={{ width: '100%', height: '45px' }}>
								Sign in
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
