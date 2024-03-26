'use client';
import React, { useState } from 'react';
import { Col, Modal, Row, Image } from 'antd';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import ParaText from '@/app/commonUl/ParaText';
import ModalPopup from './ModalPopup';
interface DataType {
	key: string;
	name: any;
	email: any;
	phone: any;
	address: any;
	tags: any;
	age: any;
}

export default function ReportSingle() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const columns: TableProps<DataType>['columns'] = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>
		},
		{
			title: 'Age',
			key: 'age',
			dataIndex: 'age'
		},
		{
			title: 'Email Address',
			dataIndex: 'email',
			key: 'email'
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			key: 'phone'
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address'
		},
		{
			title: 'Action',
			key: 'tags',
			dataIndex: 'tags'
		}
	];

	const data: DataType[] = [
		{
			key: '1',
			name: (
				<div>
					<Row gutter={[16, 16]} align="middle">
						<Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
							<Image
								src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
								alt="Ev Battery"
								preview={false}
								style={{
									borderRadius: '50%',
									height: '50px',
									width: '50px'
								}}
							/>
						</Col>
						<Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
							<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
								Mark Johnson
							</ParaText>
						</Col>
					</Row>
				</div>
			),
			age: '20',
			email: 'New York No. 1 Lake Park',
			phone: '999999999',
			address: 'mohali',
			tags: (
				<>
					<Space>
						<FaRegEdit style={{ cursor: 'pointer' }} onClick={showModal} />
						<GrView style={{ cursor: 'pointer' }} />
					</Space>
				</>
			)
		},
		{
			key: '2',
			name: (
				<div>
					<Row gutter={[16, 16]} align="middle">
						<Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
							<Image
								src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
								alt="Ev Battery"
								preview={false}
								style={{
									borderRadius: '50%',
									height: '50px',
									width: '50px'
								}}
							/>
						</Col>
						<Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
							<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
								Chris Crains
							</ParaText>
						</Col>
					</Row>
				</div>
			),
			age: '20',
			email: 'New York No. 1 Lake Park',
			phone: '999999999',
			address: 'mohali',
			tags: (
				<>
					<Space>
						<FaRegEdit style={{ cursor: 'pointer' }} onClick={showModal} />
						<GrView style={{ cursor: 'pointer' }} />
					</Space>
				</>
			)
		},
		{
			key: '4',
			name: (
				<div>
					<Row gutter={[16, 16]} align="middle">
						<Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
							<Image
								src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
								alt="Ev Battery"
								preview={false}
								style={{
									borderRadius: '50%',
									height: '50px',
									width: '50px'
								}}
							/>
						</Col>
						<Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
							<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
								Sain Williams
							</ParaText>
						</Col>
					</Row>
				</div>
			),
			age: '20',
			email: 'New York No. 1 Lake Park',
			phone: '9999999999',
			address: 'mohali',
			tags: (
				<>
					<Space>
						<FaRegEdit style={{ cursor: 'pointer' }} onClick={showModal} />
						<GrView style={{ cursor: 'pointer' }} />
					</Space>
				</>
			)
		},
		{
			key: '4',
			name: (
				<div>
					<Row gutter={[16, 16]} align="middle">
						<Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
							<Image
								src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
								alt="Ev Battery"
								preview={false}
								style={{
									borderRadius: '50%',
									height: '50px',
									width: '50px'
								}}
							/>
						</Col>
						<Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
							<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
								Rahul Bose
							</ParaText>
						</Col>
					</Row>
				</div>
			),
			age: '20',
			email: 'New York No. 1 Lake Park',
			phone: '9999999999',
			address: 'mohali',
			tags: (
				<>
					<Space>
						<FaRegEdit style={{ cursor: 'pointer' }} onClick={showModal} />
						<GrView style={{ cursor: 'pointer' }} />
					</Space>
				</>
			)
		},
		{
			key: '5',
			name: (
				<div>
					<Row gutter={[16, 16]} align="middle">
						<Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
							<Image
								src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
								alt="Ev Battery"
								preview={false}
								style={{
									borderRadius: '50%',
									height: '50px',
									width: '50px'
								}}
							/>
						</Col>
						<Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
							<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
								Rohit Sharma
							</ParaText>
						</Col>
					</Row>
				</div>
			),
			age: '20',
			email: 'New York No. 1 Lake Park',
			phone: '9999999999',
			address: 'mohali',
			tags: (
				<>
					<Space>
						<FaRegEdit style={{ cursor: 'pointer' }} onClick={showModal} />
						<GrView style={{ cursor: 'pointer' }} />
					</Space>
				</>
			)
		},
		{
			key: '6',
			name: (
				<div>
					<Row gutter={[16, 16]} align="middle">
						<Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
							<Image
								src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
								alt="Ev Battery"
								preview={false}
								style={{
									borderRadius: '50%',
									height: '50px',
									width: '50px'
								}}
							/>
						</Col>
						<Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
							<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
								Electric Vehicle
							</ParaText>
						</Col>
					</Row>
				</div>
			),
			age: '20',
			email: 'New York No. 1 Lake Park',
			phone: '9999999999',
			address: 'mohali',
			tags: (
				<>
					<Space>
						<FaRegEdit style={{ cursor: 'pointer' }} onClick={showModal} />
						<GrView style={{ cursor: 'pointer' }} />
					</Space>
				</>
			)
		}
	];
	return (
		<>
			<div className="table-container">
				<Table columns={columns} dataSource={data} />
			</div>
			<Modal
				title="Basic Modal"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				centered
			>
				<ModalPopup />
			</Modal>
		</>
	);
}
