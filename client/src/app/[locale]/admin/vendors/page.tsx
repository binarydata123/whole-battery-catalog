'use client';
import React from 'react';
import { allVendor } from '@/lib/adminApi';
import ErrorHandler from '@/lib/ErrorHandler';
import { Col, Modal, Row, Input } from 'antd';
// import PrimaryButton from '@/app/commonUl/PrimaryButton';
import TableData from './TableUser';
// import FormModal from './FormModal';

export default function Vendors() {
	const [vendors, setVendors] = React.useState<any>([]);
	const [searchQuery, setSearchQuery] = React.useState('');
	const [filteredVendors, setFilteredVendors] = React.useState<any>([]);

	const handleSearchChange = (e: any) => {
		setSearchQuery(e.target.value);
	};

	const fetchData = async () => {
		try {
			const res = await allVendor();
			setVendors(res.data);
		} catch (err: any) {
			ErrorHandler.showNotification(err?.message);
		}
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	React.useEffect(() => {
		const filterVendors = () => {
			const filtered = vendors.filter((vendor: any) =>
				vendor.vendor_name?.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setFilteredVendors(filtered);
		};

		filterVendors();
	}, [searchQuery, vendors]);

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
						maxLength={40}
					/>
				</Col>
				{/* <Col xl={19} md={19} sm={24} xs={24} className="textEnd mNone">
					<PrimaryButton label="Add User" onClick={showModal} />
				</Col> */}
			</Row>
			<div className="gapMarginTopOne"></div>
			<TableData vendors={filteredVendors} fetchVendor={fetchData} />
		</>
	);
}
