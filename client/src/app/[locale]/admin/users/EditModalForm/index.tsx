'use client';
import React, { useEffect } from 'react';
import { Col, Form, Row, Select, message, notification } from 'antd';
import UploadImage from '../UploadImage';
import FormInput from '@/app/commonUl/FormInput';
import PrimaryButton from '@/app/commonUl/PrimaryButton';
import { addUpdateUser } from '@/lib/adminApi';

interface Props {
	onEdit?: any;
}

export default function EditModalForm({ onEdit }: Props) {
	const [form] = Form.useForm();

	useEffect(() => {
		if (onEdit && onEdit.address) {
			form.setFieldsValue({
				name: onEdit.name,
				gender: onEdit.gender,
				address: onEdit.address.street,
				phoneNumber: onEdit.phoneNumber
			});
		}
	}, [onEdit]);

	const onFinish = async (values: any) => {
		try {
			const formData = new FormData();
			formData.append('name', values.name);
			formData.append('gender', values.gender);
			formData.append('address', values.address);
			formData.append('phoneNumber', values.phoneNumber);
			formData.append('', values.phoneNumber);
			formData.append('userId', onEdit._id);

			const res = await addUpdateUser(values);
			if (res.status === true) {
				form.resetFields();
				notification.success({ message: res.message });
			}
		} catch (error) {
			console.error('Error:', error);
			message.error('Failed to update user');
		}
	};

	return (
		<Form onFinish={onFinish} form={form}>
			<label htmlFor="">Name</label>
			<Form.Item
				name="name"
				rules={[
					{
						required: true,
						message: 'Please enter name!'
					}
				]}
			>
				<FormInput placeHolder="Name" type="text" />
			</Form.Item>
			<label htmlFor="">Gender</label>
			<Form.Item
				name="gender"
				rules={[
					{
						required: true,
						message: 'Please select gender!'
					}
				]}
			>
				<Select defaultValue="male" style={{ height: '40px' }}>
					<Select.Option value="male">Male</Select.Option>
					<Select.Option value="female">Female</Select.Option>
				</Select>
			</Form.Item>

			<label htmlFor="">Address</label>
			<Form.Item name="address">
				<FormInput placeHolder="Address" type="text" />
			</Form.Item>
			<label htmlFor="">Phone Number</label>
			<Form.Item name="phoneNumber">
				<FormInput placeHolder="Phone Number" type="text" />
			</Form.Item>

			<UploadImage />
			<div className="gapMarginTop"></div>
			<Row align="middle" gutter={[16, 16]}>
				<Col lg={24} md={24} sm={24} xs={24}>
					<PrimaryButton label="Save" className="w100" />
				</Col>
			</Row>
		</Form>
	);
}
