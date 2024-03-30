'use client';
import React, { useContext, useState } from 'react';
import { Button, Col, Form, Modal, Row, Select, Upload, message, notification } from 'antd';
import { RcFile, UploadFile } from 'antd/es/upload/interface';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { updateAuthor } from '@/lib/adminApi';
import { PlusOutlined } from '@ant-design/icons';
import AuthContext from '@/contexts/AuthContext';
import FormInput from '@/app/commonUl/FormInput';
interface DataType {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}
interface Props {
	fetchAuthor?: any;
	dataAuthor?: any;
	onCancel?: any;
}

export default function FormModal({ dataAuthor, fetchAuthor, onCancel }: Props) {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewTitle, setPreviewTitle] = useState('');
	const [authorId, setAuthorId] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		console.log(dataAuthor);

		if (dataAuthor && dataAuthor !== null) {
			setAuthorId(dataAuthor._id);

			form.setFieldsValue(dataAuthor);
			if (dataAuthor?.profileImage) {
				setFileList([
					{
						uid: '1',
						name: dataAuthor.profileImage,
						status: 'done',
						url: `${process.env.NEXT_PUBLIC_IMAGE_URL}/author/${dataAuthor.profileImage}`
					}
				]);
			}
		} else {
			setAuthorId('');
			form.resetFields();
		}
	}, [dataAuthor]);

	const onFinish = async (values: any) => {
		try {
			const formData = new FormData();

			if (fileList && fileList.length > 0) {
				console.log(fileList);

				if (fileList[0]?.originFileObj) {
					const file = fileList[0]?.originFileObj as Blob;
					formData.append('profileImage', file);
				} else {
					const file = fileList[0]?.name;
					formData.append('profileImage', file as string);
				}
			}

			formData.append('name', values.name);
			formData.append('designation', values.designation);
			formData.append('gender', values.gender);
			formData.append('linkedin', values.linkedin);
			formData.append('facebook', values.facebook);
			formData.append('twitter', values.twitter);
			formData.append('instagram', values.instagram);
			formData.append('status', values.status);
			formData.append('authorId', authorId);

			const res = await updateAuthor(formData);
			console.log(values, 'data');
			if (res.status === true) {
				fetchAuthor();
				onCancel();
				form.resetFields();
				notification.success({ message: res.message });
			}
		} catch (error) {
			console.error('Error:', error);
			message.error('Failed to update author');
		}
	};

	const handlePreview = async (file: any) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(file.url || file.preview);
		setPreviewOpen(true);
		setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
	};

	const handleChange = ({ fileList: newFileList }: any) => {
		setFileList(newFileList);
	};

	const handleBeforeUpload = async (event: any) => {
		const imageFile = event.target.files[0];
		console.log('originalFile instanceof Blob', imageFile instanceof Blob);
		console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true
		};
		try {
			const compressedFile = await imageCompression(imageFile, options);
			console.log('compressedFile instanceof Blob', compressedFile instanceof Blob);
			console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);

			uploadToServer(compressedFile);
		} catch (error) {
			console.log(error);
		}
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	return (
		<>
			<Form
				form={form}
				onFinish={onFinish}
				initialValues={{
					status: 'active',
					gender: 'male'
				}}
			>
				<Row gutter={[16, 16]} align={'middle'}>
					<Col xl={12} md={12} sm={24} xs={24}>
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
							<FormInput placeHolder="Please enter name" type="text" maxLength={50} />
						</Form.Item>
					</Col>
					<Col xl={12} md={12} sm={24} xs={24}>
						<label htmlFor="">Designation</label>
						<Form.Item
							name="designation"
							rules={[
								{
									required: true,
									message: 'Please enter designation!'
								}
							]}
						>
							<FormInput placeHolder="Please enter designation" type="text" />
						</Form.Item>
					</Col>
				</Row>

				<Row gutter={[16, 16]} align={'middle'}>
					<Col xl={12} md={12} sm={24} xs={24}>
						<label htmlFor="">Gender</label>
						<Form.Item
							name="gender"
							rules={[
								{
									required: true,
									message: 'Please enter gender!'
								}
							]}
						>
							<Select defaultValue="male" style={{ height: '40px' }}>
								<Select.Option value="male">Male</Select.Option>
								<Select.Option value="female">Female</Select.Option>
								<Select.Option value="others">Others</Select.Option>
							</Select>
						</Form.Item>{' '}
					</Col>

					<Col xl={12} md={12} sm={24} xs={24}>
						{' '}
						<label htmlFor="">Author Status</label>
						<Form.Item
							name="status"
							rules={[
								{
									required: true,
									message: 'Please enter author status!'
								}
							]}
						>
							<Select defaultValue="active" style={{ height: '40px' }}>
								<Select.Option value="active">Active</Select.Option>
								<Select.Option value="inactive">Inactive</Select.Option>
							</Select>
						</Form.Item>{' '}
					</Col>
				</Row>

				<label htmlFor="">Description</label>
				<Form.Item name="description">
					<TextArea placeholder="Message" maxLength={400} />
				</Form.Item>

				<Row gutter={[16, 16]} align={'middle'}>
					<Col xl={12} md={12} sm={24} xs={24}>
						{' '}
						<label htmlFor="">Linkedin Url</label>
						<Form.Item name="linkedin">
							<FormInput placeHolder="https://www.linkedin.com" type="text" />
						</Form.Item>{' '}
					</Col>

					<Col xl={12} md={12} sm={24} xs={24}>
						{' '}
						<label htmlFor="">Facebook Url</label>
						<Form.Item name="facebook">
							<FormInput placeHolder="https://www.facebook.com" type="text" />
						</Form.Item>{' '}
					</Col>
				</Row>

				<Row gutter={[16, 16]} align={'middle'}>
					<Col xl={12} md={12} sm={24} xs={24}>
						{' '}
						<label htmlFor="">Twitter Url</label>
						<Form.Item name="twitter">
							<FormInput placeHolder="https://www.twitter.com" type="text" />
						</Form.Item>{' '}
					</Col>

					<Col xl={12} md={12} sm={24} xs={24}>
						{' '}
						<label htmlFor="">Instagram Url</label>
						<Form.Item name="instagram">
							<FormInput placeHolder="https://www.instagram.com" type="text" />
						</Form.Item>{' '}
					</Col>
				</Row>

				<Row gutter={[16, 16]}>
					<Col span={12}>
						<Upload
							action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
							listType="picture-card"
							fileList={fileList}
							onPreview={handlePreview}
							onChange={handleChange}
							beforeUpload={handleBeforeUpload}
							accept=".jpg,.jpeg,.png"
							style={{ width: '100%' }}
						>
							{fileList.length >= 1 ? '' : uploadButton}
						</Upload>
					</Col>
				</Row>
				<Row justify="end" align="middle" style={{ height: '100%', padding: '0px' }}>
					<Col lg={4} md={4} sm={24} xs={24}>
						<Button
							type="primary"
							className="w100"
							htmlType="submit"
							style={{ padding: '0', width: '100%', display: 'block' }}
						>
							Save
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
}

function getBase64(originFileObj: any): any {
	throw new Error('Function not implemented.');
}
function uploadToServer(compressedFile: File) {
	throw new Error('Function not implemented.');
}
