'use client';
import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Table, Modal, Button, Popconfirm, notification } from 'antd';
import FormModal from '../FormModal';
import { getAllBlogs, deleteBlog, getAllAuthors } from '@/lib/adminApi';
import ErrorHandler from '@/lib/ErrorHandler';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface Item {
	authorId: any;
	_id: string;
	key: string;
	title: string;
	description: string;
	address: string;
}
interface FormModalProps {
	blog: Item | null;
	onsave: () => void; // Define onsave property
}

interface TableDataProps {
	blogs: Item[];
	setBlogs: any;
	fetchData: Function;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: any;
	inputType: 'number' | 'text';
	record: Item;
	index: number;
	children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

	return (
		<td {...restProps}>
			{editing && dataIndex !== 'authorId' ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `Please Input ${title}!`
						}
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				<div>{children}</div>
			)}
		</td>
	);
};

const TableData: React.FC<TableDataProps> = ({ blogs, setBlogs, fetchData }) => {
	const [form] = Form.useForm();
	const [reload, setReload] = useState(false);
	const [editingKey, setEditingKey] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [authorName, setAuthorName] = useState('');
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [selectedBlog, setSelectedBlog] = useState<Item | null>(null);
	const [allAuthors, setAllAuthors] = useState<[]>([]);
	const [id, setId] = useState(null);
	const isEditing = (record: Item) => record.key === editingKey;

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const showDeleteModal = async (id: any) => {
		setId(id);
		setIsDeleteModalOpen(true);
	};

	const handleDelete = async (_id: string | null) => {
		try {
			const res = await deleteBlog({ id: _id });
			if (res.status === true) {
				setBlogs((prevBlogs: Object[]) => prevBlogs.filter((blog: any) => blog._id !== _id));
				fetchData();
				return res;
			} else {
				console.error('Failed to delete blog:', res.message);
			}
		} catch (error) {
			console.error('Error deleting blog:', error);
		}
	};

	const confirmDelete = async (_id: string | null) => {
		try {
			await handleDelete(_id);
			setIsDeleteModalOpen(false);
		} catch (error) {
			console.error('Error deleting blog:', error);
		}
	};

	const handleDeleteModalOk = async () => {
		const res = await handleDelete(id);
		if (res) {
			setIsDeleteModalOpen(false);
		}
	};

	const handleDeleteModalCancel = () => {
		setIsDeleteModalOpen(false);
	};

	const handleEditClick = (record: Item) => {
		setSelectedBlog(record);
		setAuthorName(record.authorId?.name || ''); // Set the author's name when editing
		setIsModalOpen(true);
	};

	const columns = [
		{
			title: 'Sr No',
			dataIndex: 'index',
			key: 'index',
			width: '5%',
			render: (index: number) => index + 1 // Adding 1 to make index 1-based
		},
		{
			title: 'Title',
			dataIndex: 'title',
			width: '30%',
			editable: true,
			key: 'title'
		},
		{
			title: 'Status',
			dataIndex: 'status',
			width: '15%',
			editable: true,
			key: 'status',
			render: (status: string) => status.charAt(0).toUpperCase() + status.slice(1) // Capitalizing first letter of status
		},
		{
			title: 'Created Date',
			dataIndex: 'createdAt',
			width: '15%',
			render: (createdAt: any) => {
				const date = new Date(createdAt);
				const day = date.getDate().toString().padStart(2, '0');
				const month = (date.getMonth() + 1).toString().padStart(2, '0');
				const year = date.getFullYear();
				return `${month}/${day}/${year}`;
			}
		},
		{
			title: 'Author',
			dataIndex: 'authorId',
			width: '20%',
			render: (authorId: { name?: string }) => authorId?.name || 'Unknown',
			key: 'authorName'
		},
		{
			title: 'Action',
			dataIndex: 'operation',
			render: (_: any, record: Item) => (
				<>
					<Button
						onClick={() => {
							showModal();
							handleEditClick(record);
						}}
					>
						<EditOutlined />
					</Button>
					<Popconfirm
						title="Are you sure you want to delete this blog?"
						onConfirm={() => confirmDelete(record._id)}
						okText="Yes"
						cancelText="No"
					>
						<Button style={{ marginLeft: '10px' }}>
							<DeleteOutlined />
						</Button>
					</Popconfirm>
				</>
			)
		}
	];

	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: Item) => ({
				record,
				inputType: col.dataIndex === 'age' ? 'number' : 'text',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record)
			})
		};
	});

	const cancel = () => {
		setEditingKey('');
	};

	return (
		<>
			<Form form={form} component={false}>
				<Table
					className="table-container"
					components={{
						body: {
							cell: EditableCell
						}
					}}
					bordered
					dataSource={blogs.map((record, index) => ({ ...record, index }))}
					columns={mergedColumns}
					rowClassName="editable-row"
					pagination={{
						onChange: cancel
					}}
				/>
			</Form>
			<Modal
				title="Edit Blog"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				width={900}
			>
				<FormModal blog={selectedBlog} onEdit={fetchData} onClose={handleCancel} />
			</Modal>
			<Modal
				title="Are you sure you want to delete the Blog?"
				open={isDeleteModalOpen}
				onOk={handleDeleteModalOk}
				onCancel={handleDeleteModalCancel}
			></Modal>
		</>
	);
};

export default TableData;
