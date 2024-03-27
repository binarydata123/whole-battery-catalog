import React from 'react';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import ParaText from '@/app/commonUl/ParaText';
export default function General() {
	return (
		<div>
			<Row align="middle">
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
					<ParaText size="medium" color="black" fontWeightBold={600}>
						General Setting
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
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Account info
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Account Type"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Agency Name"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						System
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Language"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Defualt Currency"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Date Format"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Decimal Separator"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Address
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Street/Number"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Zip Code"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
						{/* <Form.Item
							label="State"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item> */}
					</Form>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="City"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Country"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Contact info
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Phone Number"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Alternate Number"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</div>
	);
}
