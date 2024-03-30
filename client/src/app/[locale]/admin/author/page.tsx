'use client';
import React, { useState, useEffect } from 'react';
import { Col, Input, Modal, Row } from 'antd';
import TableAuthor from './TableAuthor';
import FormModal from './FormModal';
import { getAllAuthors } from '@/lib/adminApi';
import PrimaryButton from '@/app/commonUl/PrimaryButton';
interface Author {
	_id: string;
	name: string;
}
export default function Author() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [authors, setAuthors] = useState<Author[]>([]);
	const [filteredAuthors, setFilteredAuthors] = useState<Author[]>([]);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		getAuthors();
	}, []);

	useEffect(() => {
		filterAuthors();
	}, [searchQuery, authors]);

	const getAuthors = async () => {
		try {
			const response = await getAllAuthors();
			setAuthors(response.data);
		} catch (error) {
			console.error('Error fetching authors:', error);
		}
	};

	const filterAuthors = () => {
		const filtered = authors.filter((author) => author.name?.toLowerCase().includes(searchQuery.toLowerCase()));
		setFilteredAuthors(filtered);
	};

	const handleSearchChange = (e: any) => {
		setSearchQuery(e.target.value);
	};

	const handleData = () => {
		getAuthors();
	};

	return (
		<div>
			<>
				<Row gutter={[16, 16]} align={'middle'}>
					<Col xl={5} md={5} sm={12} xs={12}>
						<Input
							placeholder="Enter Author"
							allowClear
							style={{ height: '45px' }}
							value={searchQuery}
							onChange={handleSearchChange}
						/>
					</Col>
					<Col xl={19} md={19} sm={24} xs={24} className="textEnd mNone">
						<PrimaryButton label="Add Author" onClick={showModal} />
					</Col>
				</Row>
				<div className="gapMarginTopOne"></div>
				<TableAuthor fetchAuthor={handleData} author={filteredAuthors} />
				<Modal
					title="Add New Author"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={null}
					width={900}
				>
					<FormModal fetchAuthor={handleData} onCancel={handleCancel} />
				</Modal>
			</>
		</div>
	);
}
