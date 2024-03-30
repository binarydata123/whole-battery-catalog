'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, Row, Select, Button, Upload, message, notification, Modal, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { RcFile, UploadFile } from 'antd/es/upload/interface';
import imageCompression from 'browser-image-compression';
import { addUpdateBlogDetails, getAllBlogs, getAllAuthors, getAllBlogCategories } from '@/lib/adminApi';
import ErrorHandler from '@/lib/ErrorHandler';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AuthContext from '@/contexts/AuthContext';
import TextArea from 'antd/es/input/TextArea';
import FormInput from '@/app/commonUl/FormInput';

interface props {
	blog?: any;
	edit?: any;
}

export default function FormModal(props: any) {
	console.log(props);

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [blogId, setBlogId] = useState('');
	const [value, setValue] = useState('');
	const [allBlogCategories, setAllBlogCategories] = useState<[]>([]);
	const [allAuthors, setAllAuthors] = useState<[]>([]);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		if (props.blog && props.blog !== null) {
			form.setFieldsValue({
				// Other fields...
				authorName: props.authorName // Set initial value of author name field
			});
		} else {
			// Other form initialization...
		}
	}, [props.blog, props.authorName]); // Update when the blog data or author name changes

	// Other code...

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

	const handleBeforeUpload = async (file: RcFile) => {
		const isImage = file.type.startsWith('image/png') || file.type.startsWith('image/jpeg');
		if (!isImage) {
			message.error('You can only upload JPG, JPEG, and PNG files!');
			return false;
		}

		// Check if the file size is less than 2 MB
		if (file.size / 1024 / 1024 >= 2) {
			message.error('Image size must be less than 2 MB!');
			return false;
		}

		const options = {
			maxSizeMB: 0.1, // Maximum size in MB (0.1 MB = 100 KB)
			maxWidthOrHeight: 1024, // Maximum width or height
			useWebWorker: true // Use web workers for faster compression
		};

		try {
			const compressedFile = await imageCompression(file, options);
			// Check if the compressed file size is less than or equal to 2 MB
			if (compressedFile.size / 1024 <= 100) {
				// Convert the compressed file back to Ant Design's format
				const formattedFile = new File([compressedFile], compressedFile.name, {
					type: compressedFile.type,
					lastModified: Date.now()
				});
				return formattedFile; // Return the compressed file for upload
			}
			// else {
			//    message.error('Image must be smaller than 2 MB!');
			//    return false;
			// }
		} catch (error) {
			console.error('Image compression error:', error);
			message.error('Failed to compress image!');
			return false;
		}

		// Default return statement
		return false;
	};

	console.log(props.blog);
	useEffect(() => {
		if (props.blog && props.blog !== null) {
			setBlogId(props.blog._id);
			form.setFieldsValue({
				title: props.blog.title,
				slug: props.blog.slug || generateSlug(props.blog.title),
				description: props.blog.description,
				metaTitle: props.blog.metaTitle,
				metaDescription: props.blog.metaDescription,
				timeToRead: props.blog.timeToRead,
				imageAltText: props.blog.imageAltText,
				status: props.blog.status,
				categoryId: props.blog.categoryId,
				authorId: props.blog.authorId._id,

				userID: user?._id
			});
			if (props.blog.image) {
				setFileList([
					{
						uid: '1',
						name: props.blog.image,
						status: 'done',
						url: `${process.env.NEXT_PUBLIC_IMAGE_URL}/blog/${props.blog.image}`
					}
				]);
			} else {
				setFileList([]);
			}

			// No need to set fileList from props.blog here
		} else {
			setBlogId('');
			form.resetFields();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.blog]);

	const generateSlug = (text: string) => {
		return text
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '');
	};

	const onFinish = async (values: any) => {
		console.log(fileList);
		try {
			setLoading(true);
			const formData = new FormData();

			if (fileList && fileList.length > 0) {
				console.log(fileList);

				if (fileList[0]?.originFileObj) {
					const file = fileList[0]?.originFileObj as File;
					formData.append('image', file);
				} else {
					const file = fileList[0]?.name;
					formData.append('image', file as string);
				}
			}
			formData.append('title', values.title);
			formData.append('slug', values.slug);
			formData.append('description', values.description);
			formData.append('metaTitle', values.metaTitle);
			formData.append('metaDescription', values.metaDescription);
			formData.append('timeToRead', values.timeToRead);
			formData.append('imageAltText', values.imageAltText || '');
			formData.append('status', values.status);
			formData.append('authorId', values.authorId);
			formData.append('blogId', blogId);
			const res = await addUpdateBlogDetails(formData);
			if (res.status === true) {
				props.onClose();
				props.onEdit();
				form.resetFields();

				// Show success notification after successful save
				notification.success({ message: res.message });
			}
		} catch (error) {
			ErrorHandler.showNotification(error);
		} finally {
			setLoading(false);
		}
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const nameValue = e.target.value;
		form.setFieldsValue({
			slug: generateSlug(nameValue)
		});
	};
	const handleQuillChange = (content: string) => {
		setValue(content);
		form.setFieldsValue({
			description: content
		});
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await getAllBlogCategories();
				if (res.status === true) {
					setAllBlogCategories(res.data);
				}
			} catch (error) {
				ErrorHandler.showNotification(error);
			}
		};

		const fetchAuthors = async () => {
			try {
				const res = await getAllAuthors();

				if (res.status === true) {
					console.log(res.data.name, 'names');
					setAllAuthors(res.data);
				}
			} catch (error) {
				ErrorHandler.showNotification(error);
			}
		};
		fetchAuthors();
	}, []);

	return (
		<>
			<Form form={form} onFinish={onFinish} layout="vertical" initialValues={{ status: 'active' }}>
				<Form.Item
					label="Title"
					name="title"
					rules={[
						{
							required: true,
							message: 'Please enter title'
						}
					]}
				>
					<FormInput placeHolder="Blog title" type="text" onChange={handleNameChange} />
				</Form.Item>
				<Row align="middle" gutter={[16, 16]}>
					<Col lg={12} md={12} sm={24} xs={24}>
						<Form.Item label="Slug" name="slug" rules={[{ required: true, message: 'Please enter slug' }]}>
							<FormInput placeHolder="Slug" type="text" />
						</Form.Item>
					</Col>
					<Col lg={12} md={12} sm={24} xs={24}>
						<Form.Item
							label="Author Name"
							name="authorId"
							rules={[
								{
									required: true,
									message: 'Please select author'
								}
							]}
						>
							<Select placeholder="Select a Author">
								<Select.Option disabled>Select a category</Select.Option>
								{allAuthors?.map((author: any, index: any) => (
									<Select.Option key={index} value={author._id}>
										{author.name}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
				</Row>

				<Form.Item name="description" label="Description">
					<ReactQuill onChange={handleQuillChange} style={{ height: '100px', marginBottom: '40px' }} />
				</Form.Item>

				<Row align="middle" gutter={[16, 16]}>
					<Col lg={12} md={12} sm={24} xs={24}>
						<Form.Item
							label="Meta Title"
							name="metaTitle"
							rules={[{ required: true, message: 'Please enter meta title' }]}
						>
							<FormInput placeHolder="Meta Title" type="text" maxLength={60} />
						</Form.Item>
					</Col>
					<Col lg={12} md={12} sm={24} xs={24}>
						<Form.Item
							name="metaDescription"
							label="Meta Description"
							rules={[{ required: true, message: 'Please enter meta description' }]}
						>
							<FormInput placeHolder="Meta Description" type="text" maxLength={120} />
						</Form.Item>
					</Col>
				</Row>

				<Row align="middle" gutter={[16, 16]}>
					<Col lg={12} md={12} sm={24} xs={24}>
						<Form.Item
							label="Time to Read"
							name="timeToRead"
							// rules={[{ required: true, message: 'Please input your Time to Read..' }]}
						>
							<FormInput placeHolder="Time To Read" type="text" />
						</Form.Item>
					</Col>
					<Col lg={12} md={12} sm={24} xs={24}>
						<Form.Item name="status" label="Status">
							<Select style={{ height: '40px' }}>
								<Select.Option value="active">Active</Select.Option>
								<Select.Option value="inactive">Inactive</Select.Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>

				<Upload
					action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
					listType="picture-card"
					fileList={fileList}
					onPreview={handlePreview}
					onChange={handleChange}
					beforeUpload={handleBeforeUpload}
					accept=".jpg,.jpeg,.png"
				>
					{fileList.length >= 1 ? null : uploadButton}
				</Upload>

				<Row align="stretch" gutter={[16, 16]} style={{ justifyContent: 'end' }}>
					<Col lg={4} md={4} sm={12} xs={12}>
						<Button type="primary" htmlType="submit" className="w100">
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
function generateSlug(title: any): any {
	throw new Error('Function not implemented.');
}
