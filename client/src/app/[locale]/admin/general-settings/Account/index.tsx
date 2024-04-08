import React from 'react';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import ParaText from '@/app/commonUl/ParaText';
export default function Account() {
	return (
		<div>
			<Row align="middle">
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
					<ParaText size="medium" color="black" fontWeightBold={600}>
						Accounting Settings
					</ParaText>
					<ParaText size="extraSmall" color="black" className="dBlock">
						{' '}
						Manage Your General Account Setting
					</ParaText>
				</Col>
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="textEnd">
					<Button type="primary">Edit</Button>
				</Col>
			</Row>

			<Divider />
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Bank Details
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Account Holder"
							name="accountholder"
							rules={[{ required: true, message: 'Please input your account holder!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Country Of Bank"
							name="accountholder"
							rules={[{ required: true, message: 'Please input your account holder!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="SWIFT/ BIC"
							name="accountholder"
							rules={[{ required: true, message: 'Please input your account holder!' }]}
						>
							<Input.Password />
						</Form.Item>
					</Form>
					0{' '}
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Bank Name"
							name="bank name"
							rules={[{ required: true, message: 'Please input your bank name!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Account Number"
							name="bank name"
							rules={[{ required: true, message: 'Please input your bank name!' }]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item
							label="IFSC Code"
							name="bank name"
							rules={[{ required: true, message: 'Please input your bank name!' }]}
						>
							<Input.Password />
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Taxes
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Texes Id"
							name="username"
							rules={[{ required: true, message: 'Please input your texes id!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Username"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
		</div>
	);
}
