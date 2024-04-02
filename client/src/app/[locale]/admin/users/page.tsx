'use client';
import React from 'react';
import { getUserList } from '@/lib/adminApi';
import ErrorHandler from '@/lib/ErrorHandler';
import { Col, Modal, Row, Input } from 'antd';
import PrimaryButton from '@/app/commonUl/PrimaryButton';
import TableData from './TableUser';
import FormModal from './FormModal';

export default function Users() {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
	const [users, setUsers] = React.useState<any>([]);
	const [searchQuery, setSearchQuery] = React.useState('');
	const [filteredUsers, setFilteredUsers] = React.useState<any>([]);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const filterUsers = () => {
		const filtered = users.filter((user: any) => user.name?.toLowerCase().includes(searchQuery.toLowerCase()));
		setFilteredUsers(filtered);
	};

	const handleSearchChange = (e: any) => {
		setSearchQuery(e.target.value);
	};

	const fetchData = async () => {
		try {
			const res = await getUserList();
			setUsers(res.data);
		} catch (err: any) {
			ErrorHandler.showNotification(err?.message);
		}
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	React.useEffect(() => {
		filterUsers();
	}, [searchQuery, users]);

	return (
		<>
			<Row gutter={[16, 16]} align={'middle'}>
				<Col xl={5} md={5} sm={12} xs={12}>
					<Input
						placeholder="Enter user"
						allowClear
						style={{ height: '45px' }}
						value={searchQuery}
						onChange={handleSearchChange}
					/>
				</Col>
				{/* <Col xl={19} md={19} sm={24} xs={24} className="textEnd mNone">
					<PrimaryButton label="Add User" onClick={showModal} />
				</Col> */}
			</Row>
			<div className="gapMarginTopOne"></div>
			<TableData users={filteredUsers} fetchUser={fetchData} />
			<Modal
				title="Add New User"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				width={900}
			>
				<FormModal fetchUser={fetchData} onCancel={handleCancel} />
			</Modal>
		</>
	);
}
