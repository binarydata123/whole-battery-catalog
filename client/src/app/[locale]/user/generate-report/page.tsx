'use client';
import ParaText from '@/app/commonUl/ParaText';
import { Col, Image, Row, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';
import RateStar from '@/app/commonUl/RateStar';
import { CiHeart } from 'react-icons/ci';
import { fetchDataByVendorId } from '@/lib/vendorApi';

export default function Page() {
	const [data, setData] = useState<any[]>([]); // Adjust the type as per your response data structure

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		fetchDataByVendorId()
			.then((responseData) => {
				console.log(responseData);
				// setData(responseData);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};

	const dataSource = [
		{ key: '1', oem: 'OEM1', model: 'Model1', serial: 'Serial1', date: '2024-03-28' },
		{ key: '2', oem: 'OEM2', model: 'Model2', serial: 'Serial2', date: '2024-03-27' },
		{ key: '3', oem: 'OEM3', model: 'Model3', serial: 'Serial3', date: '2024-03-26' },
		{ key: '4', oem: 'OEM4', model: 'Model4', serial: 'Serial4', date: '2024-03-25' },
		{ key: '5', oem: 'OEM5', model: 'Model5', serial: 'Serial5', date: '2024-03-24' }
	];

	// Columns configuration for the table
	const columns = [
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

	return (
		<>
			<Row className="page-container">
				<Col span={6} className="left-section">
					<h2>Battery Packs</h2>
					<Table dataSource={dataSource} columns={columns} pagination={false} />
				</Col>
				<Col span={18} className="right-section">
					<Row gutter={[16, 16]}>
						<Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
							<h1 style={{ margin: 0 }}>Tesla Model 3</h1>
						</Col>
						<Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
							<p style={{ margin: 0 }}>SN10237</p>
						</Col>
						<Col span={8} style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ textTransform: 'uppercase', margin: 0, marginRight: '8px' }}>
									Report Selection
								</p>
								<Select defaultValue="" style={{ width: '40%', marginLeft: '10px' }}>
									<Select.Option value="">Most recent</Select.Option>
									<Select.Option value="Option 1">Oldest</Select.Option>
									<Select.Option value="Option 2">Option 2</Select.Option>
									<Select.Option value="Option 3">Option 3</Select.Option>
								</Select>
							</div>
						</Col>
					</Row>
					<hr style={{ margin: '20px 0' }} />
					<Row gutter={[16, 16]} justify="center" align="middle" style={{ minHeight: '10vh' }}>
						<Col span={6} style={{ display: 'flex', alignItems: 'center' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ fontSize: '20px', marginRight: '8px' }}>SOH</p>
								<span
									style={{
										marginLeft: '8px',
										paddingLeft: '8px',
										fontSize: '40px'
									}}
								>
									90%
								</span>
							</div>
						</Col>
						<Col span={6} style={{ display: 'flex', alignItems: 'center', borderLeft: '1px solid #ccc' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ fontSize: '20px', marginRight: '8px' }}>GRADE</p>
								<span
									style={{
										marginLeft: '8px',
										paddingLeft: '8px',
										fontSize: '40px'
									}}
								>
									A
								</span>
							</div>
						</Col>
						<Col
							span={6}
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								borderLeft: '1px solid #ccc'
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ fontSize: '20px', marginRight: '8px' }}>VALUE $ </p>
								<span
									style={{
										marginLeft: '8px',
										fontSize: '40px'
									}}
								>
									9000
								</span>
							</div>
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}></div>
						</Col>
						<Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}></div>
						</Col>
						<Col span={8} style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}></div>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}
