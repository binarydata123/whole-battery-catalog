import React, { useContext, useEffect, useState } from 'react';
import { Button, Space, Table, Avatar, Modal, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import FormModalDelete from '../FormModalDelete';
import EditModalForm from '../EditModalForm';
import Titles from '@/app/commonUl/Titles';
import { getAlluser, deleteUser } from '@/lib/adminApi';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AuthContext from '@/contexts/AuthContext';

const { Column } = Table;
interface DataType {
	key: any;
	name: any;
	Weight: number;
	Assigned: any;
	Status: any;
	contact: any;
	location: any;
	Gender: any;
}
interface Item {
	_id: string;
	key: string;
	title: string;
	description: string;
	address: string;
}
export default function FormModalEdit() {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [userData, setUserData] = useState([]);
	const [edit, setEdit] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { user } = useContext(AuthContext);

	const showDeleteModal = () => {
		setIsDeleteModalOpen(true);
	};

	const showEditModal = () => {
		setIsEditModalOpen(true);
	};

	const handleDeleteModalOk = () => {
		setIsDeleteModalOpen(false);
	};

	const handleDeleteModalCancel = () => {
		setIsDeleteModalOpen(false);
	};

	const handleEditModalOk = () => {
		setIsEditModalOpen(false);
	};

	const handleEditModalCancel = () => {
		setIsEditModalOpen(false);
	};

	useEffect(() => {
		getAlluser().then((res) => {
			if (res && res.users) {
				console.log(res.users, 'userData');
				setUserData(res.users);
			}
		});
	}, []);

	const fetchuser = async () => {
		const users = await getAlluser();
	};

	const handleEditClick = async (record: any) => {
		// console.log(record, 'data');
		setEdit(record);
		setIsEditModalOpen(true);
	};
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleDelete = async (id: string) => {
		console.log(id, 'userId');
		try {
			const data = {
				id: id,
				userId: user?._id
			};
			await deleteUser(data);
			message.success('User has been deleted successfully');
			getAlluser().then((res) => {
				if (res && res.users) {
					setUserData(res.users);
				}
			});
		} catch (error) {
			message.error('Something went wrong');
		}
	};

	const columns = [
		{
			title: 'Id',
			key: 'id',
			render: (_: any, __: any, index: number) => index + 1
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text: string, record: any) => (
				<div>
					<Avatar size={40} icon={<UserOutlined />} />
					<span style={{ marginLeft: '10px' }}>{text}</span>
				</div>
			)
		},

		{
			title: 'Gender',
			dataIndex: 'gender',
			key: 'gender'
		},

		{
			title: 'Contact',
			dataIndex: 'phoneNumber',
			key: 'phoneNumber'
		},
		{
			title: 'Created Date',
			dataIndex: 'createdAt',

			render: (createdAt: any) => {
				const date = new Date(createdAt);
				const day = date.getDate().toString().padStart(2, '0');
				const month = (date.getMonth() + 1).toString().padStart(2, '0');
				const year = date.getFullYear();
				return `${month}/${day}/${year}`;
			}
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status'
		},
		{
			title: 'Action',
			dataIndex: 'operation',
			width: '10%',
			render: (_: any, record: Item) => (
				<>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button
							onClick={() => {
								showModal();
								handleEditClick(record);
							}}
						>
							<EditOutlined />{' '}
						</Button>
						<Button
							onClick={() => {
								handleDelete(record._id);
							}}
						>
							<DeleteOutlined />{' '}
						</Button>
					</div>
				</>
			)
		}
	];
	return (
		<>
			<div className="" style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
				<Titles color="black" level={5}>
					Users List
				</Titles>
				<div className="gapMarginTopTwo"></div>
				<Table
					dataSource={Array.isArray(userData) ? userData : []}
					columns={columns}
					className="table-container"
				/>

				<Modal
					title="Delete Form"
					visible={isDeleteModalOpen}
					onOk={handleDeleteModalOk}
					onCancel={handleDeleteModalCancel}
					centered
					footer={null}
				>
					<FormModalDelete />
				</Modal>
				<Modal
					title="Edit User"
					visible={isEditModalOpen}
					onOk={handleEditModalOk}
					onCancel={handleEditModalCancel}
					footer={null}
					centered
				>
					<EditModalForm onEdit={edit} />
				</Modal>
			</div>
		</>
	);
}
