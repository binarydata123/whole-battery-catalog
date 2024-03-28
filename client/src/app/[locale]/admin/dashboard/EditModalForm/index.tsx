'use client';
import React, { useEffect } from 'react';
import { Col, Form, Row, Select } from 'antd';
import UploadImage from '../UploadImage';
import FormInput from '@/app/commonUl/FormInput';
import PrimaryButton from '@/app/commonUl/PrimaryButton';
import { addUpdateUser } from '@/lib/adminApi';
export default function EditModalForm(props: any) {
	const onFinish = async (values: any) => {
		const formData = new FormData();
		try {
			formData.append('name', values.name);
			formData.append('gender', values.gender);
			formData.append('address', values.address);
			formData.append('phoneNumber', values.phoneNumber);
			formData.append('userID', values.userID);
		} catch (error) {}
	};

	useEffect(() => {
		addUpdateUser(FormData).then((res) => {
			if (res && res.users) {
				console.log(res, 'userData');
			}
		});
	}, []);

	return (
		<>
			<Form onClick={onFinish}>
				<label htmlFor="">Title</label>
				<Form.Item
					name="title"
					rules={[
						{
							required: true,
							message: 'Please enter blog title!'
						}
					]}
				>
					<FormInput placeHolder="Blog title" type="text" maxLength={50} />
				</Form.Item>
				<label htmlFor="">Slug</label>
				<Form.Item name="slug">
					<FormInput placeHolder="slug" type="text" />
				</Form.Item>
				<label htmlFor="">Time To Read</label>
				<Form.Item name="timeToRead">
					<FormInput placeHolder="timeToRead" type="text" />
				</Form.Item>
				<label htmlFor="">Meta Title</label>
				<Form.Item name="metaTitle">
					<FormInput placeHolder="metaTitle" type="text" maxLength={60} />
				</Form.Item>

				<label htmlFor="">Meta Description</label>
				<Form.Item name="metaDescription">
					<FormInput placeHolder="metaDescription" type="text" maxLength={150} />
				</Form.Item>

				<label htmlFor="">Blog Status</label>
				<Form.Item name="status">
					<Select defaultValue="active" style={{ height: '40px' }}>
						<Select.Option value="active">Active</Select.Option>
						<Select.Option value="inactive">Inactive</Select.Option>
					</Select>
				</Form.Item>
				<UploadImage />
				<div className="gapMarginTop"></div>
				<Row align="middle" gutter={[16, 16]}>
					<Col lg={24} md={24} sm={24} xs={24}>
						<PrimaryButton label="Save" className="w100" />
					</Col>
				</Row>
			</Form>
		</>
	);
}
