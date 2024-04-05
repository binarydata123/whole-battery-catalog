import React, { useState } from 'react';
import { Button, Space, Table, Avatar, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import FormModalDelete from '../FormModalDelete';
import EditModalForm from '../EditModalForm';
import Titles from '@/app/commonUl/Titles';
import Link from 'next/link';

// const { Column } = Table;

// interface DataType {
// 	key: any;
// 	name: any;
// 	Weight: number;
// 	Assigned: any;
// 	Status: any;
// 	contact: any;
// 	location: any;
// 	Gender: any;
// }

export default function FormTableData({ allBatteryData }: any) {
	// const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	// const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	// const showDeleteModal = () => {
	// 	setIsDeleteModalOpen(true);
	// };

	// const showEditModal = () => {
	// 	setIsEditModalOpen(true);
	// };

	// const handleDeleteModalOk = () => {
	// 	setIsDeleteModalOpen(false);
	// };

	// const handleDeleteModalCancel = () => {
	// 	setIsDeleteModalOpen(false);
	// };

	// const handleEditModalOk = () => {
	// 	setIsEditModalOpen(false);
	// };

	// const handleEditModalCancel = () => {
	// 	setIsEditModalOpen(false);
	// };

	// const data: DataType[] = [
	// 	{
	// 		key: '1',
	// 		name: (
	// 			<div>
	// 				<Avatar size={40} icon={<UserOutlined />} />
	// 				<span style={{ marginLeft: '10px' }}>John S. Elliott</span>
	// 			</div>
	// 		),
	// 		Gender: 'Male',
	// 		Weight: 32,
	// 		Assigned: 'New York No. 1 Lake Park',
	// 		contact: '9999999999',
	// 		location: 'Mohali',

	// 		Status: (
	// 			<>
	// 				<Space size="middle">
	// 					{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
	// 					<Button icon={<FaRegEdit />} onClick={showEditModal}></Button>
	// 				</Space>
	// 			</>
	// 		)
	// 	},
	// 	{
	// 		key: '2',
	// 		name: (
	// 			<div>
	// 				<Avatar size={40} icon={<UserOutlined />} />
	// 				<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
	// 			</div>
	// 		),
	// 		Gender: 'Male',
	// 		Weight: 32,
	// 		Assigned: 'New York No. 1 Lake Park',
	// 		contact: '9999999999',
	// 		location: 'Mohali',

	// 		Status: (
	// 			<>
	// 				<Space size="middle">
	// 					{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
	// 					<Button icon={<FaRegEdit />} onClick={showEditModal}></Button>
	// 				</Space>
	// 			</>
	// 		)
	// 	},
	// 	{
	// 		key: '3',
	// 		name: (
	// 			<div>
	// 				<Avatar size={40} icon={<UserOutlined />} />
	// 				<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
	// 			</div>
	// 		),
	// 		Gender: 'Male',
	// 		Weight: 32,
	// 		Assigned: 'New York No. 1 Lake Park',
	// 		contact: '9999999999',
	// 		location: 'Mohali',

	// 		Status: (
	// 			<>
	// 				<Space size="middle">
	// 					{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
	// 					<Button icon={<FaRegEdit />} onClick={showEditModal}></Button>
	// 				</Space>
	// 			</>
	// 		)
	// 	},
	// 	{
	// 		key: '4',
	// 		name: (
	// 			<div>
	// 				<Avatar size={40} icon={<UserOutlined />} />
	// 				<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
	// 			</div>
	// 		),
	// 		Gender: 'Male',
	// 		Weight: 32,
	// 		Assigned: 'New York No. 1 Lake Park',
	// 		contact: '9999999999',
	// 		location: 'Mohali',

	// 		Status: (
	// 			<>
	// 				<Space size="middle">
	// 					{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
	// 					<Button icon={<FaRegEdit />} onClick={showEditModal}></Button>
	// 				</Space>
	// 			</>
	// 		)
	// 	},
	// 	{
	// 		key: '5',
	// 		name: (
	// 			<div>
	// 				<Avatar size={40} icon={<UserOutlined />} />
	// 				<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
	// 			</div>
	// 		),
	// 		Gender: 'Male',
	// 		Weight: 32,
	// 		Assigned: 'New York No. 1 Lake Park',
	// 		contact: '9999999999',
	// 		location: 'Mohali',

	// 		Status: (
	// 			<>
	// 				<Space size="middle">
	// 					{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
	// 					<Button icon={<FaRegEdit />} onClick={showEditModal}></Button>
	// 				</Space>
	// 			</>
	// 		)
	// 	},
	// 	{
	// 		key: '6',
	// 		name: (
	// 			<div>
	// 				<Avatar size={40} icon={<UserOutlined />} />
	// 				<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
	// 			</div>
	// 		),
	// 		Gender: 'Male',
	// 		Weight: 32,
	// 		Assigned: 'New York No. 1 Lake Park',
	// 		contact: '9999999999',
	// 		location: 'Mohali',

	// 		Status: (
	// 			<>
	// 				<Space size="middle">
	// 					{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
	// 					<Button icon={<FaRegEdit />} onClick={showEditModal}></Button>
	// 				</Space>
	// 			</>
	// 		)
	// 	}
	// ];

	// Columns configuration for the table
	const batteryColumns = [
		{
			title: 'OEM',
			dataIndex: 'oem',
			key: 'oem'
		},
		{
			title: 'MODEL',
			dataIndex: 'model',
			key: 'model'
		},
		{
			title: 'SERIAL',
			dataIndex: 'serial',
			key: 'serial'
		},
		{
			title: 'DATE',
			dataIndex: 'date',
			key: 'date'
		}
	];

	const batteryDataSource = allBatteryData
		?.map((data: any, index: number) => {
			let model = (data.batteryModel?.model_name || 'N/A').replace(/-/g, '/');
			if (model) {
				model = 'Model ' + model;
			}
			return {
				key: index + 1,
				batteryId: data.battery_id,
				oem: data.oem ? data.oem.oem_name : 'N/A',
				model: model,
				serial: data.oem_identifier ? data.oem_identifier : 'N/A',
				date: data.created_on ? new Date(data.updated_on).toISOString().split('T')[0] : 'N/A'
			};
		})
		.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 6);

	return (
		<>
			<div className="" style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
				<Titles color="black" level={5}>
					Recent Reports
				</Titles>
				<div className="gapMarginTopTwo"></div>
				<Link href="/en/user/generate-report">
					<Table
						dataSource={batteryDataSource}
						columns={batteryColumns}
						className="table-container"
						pagination={false}
					/>
				</Link>
				{/* <Column title="Name" dataIndex="name" key="name" />
					<Column title="Gender" dataIndex="Gender" key="Gender" />
					<Column title="Weight" dataIndex="Weight" key="Weight" />
					<Column title="Assigned" dataIndex="Assigned" key="Assigned" />
					<Column title="Contact" dataIndex="contact" key="contact" />
					<Column title="Location" dataIndex="location" key="location" />
					<Column title="Status" dataIndex="Status" key="Status" /> */}
				{/* </Table> */}
				{/* <Modal
					title="Delete Form"
					open={isDeleteModalOpen}
					onOk={handleDeleteModalOk}
					onCancel={handleDeleteModalCancel}
					centered
					footer={null}
				>
					<FormModalDelete />
				</Modal>
				<Modal
					title="Edit Form"
					open={isEditModalOpen}
					onOk={handleEditModalOk}
					onCancel={handleEditModalCancel}
					footer={null}
					centered
				>
					<EditModalForm />
				</Modal> */}
			</div>
		</>
	);
}
