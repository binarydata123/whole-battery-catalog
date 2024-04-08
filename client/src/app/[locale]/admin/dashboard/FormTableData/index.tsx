import React, { useState } from 'react';
import { Button, Space, Table, Avatar, Modal } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { MdDelete } from 'react-icons/md';
// import { FaRegEdit } from 'react-icons/fa';
// import FormModalDelete from '../FormModalDelete';
// import EditModalForm from '../EditModalForm';
import Titles from '@/app/commonUl/Titles';
import Link from 'next/link';

export default function FormTableData({ allBatteryData }: any) {
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
				<Link href="/en/admin/battery-reports">
					<Table
						dataSource={batteryDataSource}
						columns={batteryColumns}
						className="table-container"
						pagination={false}
					/>
				</Link>
			</div>
		</>
	);
}
