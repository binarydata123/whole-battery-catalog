'use client';
import React, { useState } from 'react';
// import ImageWithFallback from '@/components/ImageWithFallback';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Modal, Row, Col, Button, notification } from 'antd';
// import FormModal from '../FormModal';
// import { deleteUser } from '@/lib/adminApi';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface props {
	vendors?: any;
	fetchVendor: (type: string) => void;
}

interface Item {
	_id: string;
	name: string;
	key: string;
	title: string;
}
// interface FormModalProps {
// 	user: any;
// 	onsave: () => void; // Define onsave property
// }

// interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
// 	editing: boolean;
// 	dataIndex: string;
// 	title: any;
// 	inputType: 'number' | 'text';
// 	record: Item;
// 	index: number;
// 	children: React.ReactNode;
// }

// const EditableCell: React.FC<EditableCellProps> = ({
// 	editing,
// 	dataIndex,
// 	title,
// 	inputType,
// 	record,
// 	index,
// 	children,
// 	...restProps
// }) => {
// 	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

// 	return (
// 		<td {...restProps}>
// 			{editing ? (
// 				<Form.Item
// 					name={dataIndex}
// 					style={{ margin: 0 }}
// 					rules={[
// 						{
// 							required: true,
// 							message: `Please Input ${title}!`
// 						}
// 					]}
// 				>
// 					{inputNode}
// 				</Form.Item>
// 			) : (
// 				children
// 			)}
// 		</td>
// 	);
// };

const TableData = ({ vendors, fetchVendor }: props) => {
	const [form] = Form.useForm();

	// const [reload, setReload] = useState(false);
	// const [userdata, setUserdata] = useState<any>([]);
	// const [edit, setEdit] = useState('');
	// const [isModalOpen, setIsModalOpen] = useState(false);
	// const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	// const [id, setId] = useState('');

	// const showModal = () => {
	// 	setIsModalOpen(true);
	// };

	// const handleOk = () => {
	// 	setIsModalOpen(false);
	// };

	// const handleCancel = () => {
	// 	setIsModalOpen(false);
	// };

	// const handleDelete = async (id: any) => {
	// 	const res = await deleteUser({ id });
	// 	if (res) {
	// 		fetchUser('delete');
	// 		setIsDeleteModalOpen(false);
	// 	}
	// };
	// function handleDeleteCancel() {
	// 	setIsDeleteModalOpen(false);
	// }

	const columns = [
		{
			title: 'Sr. No',
			key: 'id',
			render: (_: any, __: any, index: number) => index + 1
		},

		{
			title: 'Name',
			dataIndex: 'vendor_name',
			render: (name: string) => name.charAt(0).toUpperCase() + name.slice(1), // Capitalizing first letter of status
			key: 'title'
		},
		{
			title: 'Username',
			dataIndex: 'vendor_username',
			key: 'username',
			width: '20%'
		},

		{
			title: 'Email',
			dataIndex: 'email_id',
			key: 'email',
			width: '20%',
			render: (email: string) => {
				return <span>{email || 'N/A'}</span>;
			}
		},
		{
			title: 'Created Date',
			dataIndex: 'created_on',
			sorter: (a: { created_on: string }, b: { created_on: string }) => {
				const dateA = new Date(a.created_on);
				const dateB = new Date(b.created_on);
				return dateB.getTime() - dateA.getTime(); // Sorting from most recent to past
			},
			render: (created_on: string) => {
				const date = new Date(created_on);
				const formattedDate = date.toISOString().split('T')[0];
				return formattedDate;
			}
		}

		// {
		// 	title: 'Action',
		// 	dataIndex: 'operation',
		// 	width: '15%',
		// 	render: (_: any, record: Item) => (
		// 		<>
		// 			<div>
		// 				<Button
		// 					onClick={() => {
		// 						showModal();
		// 						handleEditClick(record);
		// 					}}
		// 				>
		// 					<EditOutlined />
		// 				</Button>
		// 				<Popconfirm
		// 					title="Are you sure to delete this user?"
		// 					onConfirm={() => handleDelete(record._id)}
		// 					okText="Yes"
		// 					cancelText="No"
		// 					onCancel={handleDeleteCancel}
		// 				>
		// 					<Button style={{ marginLeft: '10px' }}>
		// 						<DeleteOutlined />
		// 					</Button>
		// 				</Popconfirm>
		// 			</div>
		// 		</>
		// 	)
		// }
	];

	// const mergedColumns = columns.map((col) => {
	// 	if (!col.editable) {
	// 		return col;
	// 	}
	// 	return {
	// 		...col,
	// 		onCell: (record: Item) => ({
	// 			record,
	// 			inputType: col.dataIndex === 'age' ? 'number' : 'text',
	// 			dataIndex: col.dataIndex,
	// 			title: col.title
	// 			// editing: isEditing(record),
	// 		})
	// 	};
	// });

	// const handleEditClick = async (record: any) => {
	// 	setEdit(record);
	// };

	return (
		<>
			<Form form={form} component={false}>
				<Table
					className="table-container"
					// components={{
					// 	body: {
					// 		cell: EditableCell
					// 	}
					// }}
					bordered
					dataSource={vendors}
					columns={columns}
					rowClassName="editable-row"
					pagination={
						{
							// onChange: cancel,
						}
					}
				/>
			</Form>
			{/* <Modal
				title="Edit User"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				width={800}
			>
				<FormModal dataUser={edit} fetchUser={fetchUser} onCancel={handleCancel} />
			</Modal> */}
		</>
	);
};

export default TableData;
