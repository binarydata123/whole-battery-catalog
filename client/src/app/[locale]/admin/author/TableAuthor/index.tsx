'use client';
import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Modal, Row, Col, Button, notification } from 'antd';
import FormModal from '../FormModal';
import { getAllBlogs, getAllAuthors, deleteAuthor } from '@/lib/adminApi';
import ErrorHandler from '@/lib/ErrorHandler';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface props {
	author?: any;
	fetchAuthor: (type: string) => void;
}

interface Item {
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
			{editing ? (
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
				children
			)}
		</td>
	);
};

const TableData = ({ author, fetchAuthor }: props) => {
	const [form] = Form.useForm();
	const [reload, setReload] = useState(false);
	const [authorData, setAuthor] = useState<Item[]>([]);
	const [edit, setEdit] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [id, setId] = useState('');

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const showDeleteModal = (record: Item) => {
		setId(record._id);
		setIsDeleteModalOpen(true);
	};

	const handleDelete = async (id: any) => {
		const res = await deleteAuthor({ id: id });
		if (res) {
			fetchAuthor('delete');
			setIsDeleteModalOpen(false);
		}
	};
	function handleDeleteCancel() {
		setIsDeleteModalOpen(false);
	}

	const columns = [
		{
			title: 'Id',
			key: 'id',
			render: (_: any, __: any, index: number) => index + 1
		},

		{
			title: 'Name',
			dataIndex: 'name',

			editable: true,
			key: 'title'
		},
		{
			title: 'Image',
			dataIndex: 'profileImage',
			key: 'profileImage',
			render: (_: any, author: any) => (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					src={
						author.profileImage
							? `${process.env['NEXT_PUBLIC_IMAGE_URL']}/author/${author.profileImage}`
							: `${process.env['NEXT_PUBLIC_IMAGE_URL']}/default/users.jpg`
					}
					alt="Profile"
					style={{ width: 50, height: 50 }}
				/>
			)
		},

		{
			title: 'Status',
			dataIndex: 'status',

			editable: true,
			key: 'status',
			render: (status: string) => status.charAt(0).toUpperCase() + status.slice(1) // Capitalizing first letter of status
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
			title: 'Action',
			dataIndex: 'operation',
			width: '15%',
			render: (_: any, record: Item) => (
				<>
					<div>
						<Button
							onClick={() => {
								showModal();
								handleEditClick(record);
							}}
						>
							<EditOutlined />{' '}
						</Button>
						<Popconfirm
							title="Are you sure to delete this author?"
							onConfirm={() => handleDelete(record._id)}
							okText="Yes"
							cancelText="No"
						>
							<Button style={{ marginLeft: '10px' }}>
								<DeleteOutlined />{' '}
							</Button>
						</Popconfirm>
					</div>
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
				title: col.title
				// editing: isEditing(record),
			})
		};
	});

	const handleEditClick = async (record: any) => {
		setEdit(record);
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
					dataSource={author}
					columns={mergedColumns}
					rowClassName="editable-row"
					pagination={
						{
							// onChange: cancel,
						}
					}
				/>
			</Form>
			<Modal
				title="Edit Author"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				width={800}
			>
				<FormModal dataAuthor={edit} fetchAuthor={fetchAuthor} onCancel={handleCancel} />
			</Modal>
		</>
	);
};

export default TableData;
