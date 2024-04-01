'use client';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './admin-blogs.module.css';
import { Col, Input, Row } from 'antd';
import TableData from './TableData';
import FormModal from './FormModal';
import { getAllBlogs } from '@/lib/adminApi';
import ErrorHandler from '@/lib/ErrorHandler';
import PrimaryButton from '@/app/commonUl/PrimaryButton';

interface Blog {
	_id: string;
	title: string;
	slug: string;
	description: string;
	metaTitle: string;
	metaDescription: string;
	timeToRead: string;
	imageAltText: string;
	status: 'active' | 'inactive';
	categoryId: string;
	authorId: string;
	authorName: string;
	image?: string;
}
export default function AdminBlogs() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [blogs, setBlogs] = useState([]);
	const [foundBlog, setFoundBlog] = useState<Blog[] | null>(null);
	const [searchNull, setSearchNull] = useState(false);

	useEffect(() => {
		// getBlogs();
		fetchData();
	}, []);

	async function fetchData() {
		try {
			const res = await getAllBlogs();
			console.log('fetch data response', res);
			setBlogs(res.data);
		} catch (error) {
			ErrorHandler.showNotification(error);
		}
	}

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleUpdateBlog = () => {
		fetchData();
		setIsModalOpen(false);
	};

	return (
		<>
			<div className={styles.dashBody}>
				<>
					<Row gutter={[16, 16]} align={'middle'}>
						<Col xl={5} md={5} sm={12} xs={12}>
							{/* <Input placeholder="Enter Blog" allowClear style={{ height: '45px' }} /> */}
						</Col>
						<Col xl={19} md={19} sm={12} xs={12} className="textEnd mNone">
							<PrimaryButton label="Add Blog" onClick={showModal} />
						</Col>
					</Row>
					<div className="gapMarginTopOne"></div>
					<TableData blogs={blogs} setBlogs={setBlogs} fetchData={fetchData} />
					<Modal
						title="Add Blogs"
						open={isModalOpen}
						onOk={handleOk}
						onCancel={handleCancel}
						footer={null}
						width={900}
					>
						<FormModal onEdit={handleUpdateBlog} onClose={handleCancel} />
					</Modal>
				</>
			</div>
		</>
	);
}
