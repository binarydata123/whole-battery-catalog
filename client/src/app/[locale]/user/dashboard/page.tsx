'use client';
import React, { useEffect, useState } from 'react';
import './style.css';
import { Col, Image, Row, Select } from 'antd';
import Link from 'next/link';
import SpinLoader from '@/components/Spin-loader';
// const { Option } = Select;
import FormTableData from './FormTableData';
import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import VendorAuth from '@/contexts/VendorAuthProvider';
import { allBatteryByVendor } from '@/lib/userApi';

export default function Dashboard() {
	const [loading, setLoading] = useState<boolean>(false);
	const [allBatteryData, setAllBatteryData] = useState<any[]>([]);

	const { user } = React.useContext(VendorAuth);

	const fetchAllBatteryData = async () => {
		try {
			setLoading(true);
			const res = await allBatteryByVendor();
			setAllBatteryData(res.data);
		} catch (error) {
			setLoading(false);
			console.error('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user) {
			fetchAllBatteryData();
		}
	}, [user]);

	return (
		<>
			<div className="dashBody">
				<div className="textEnd">
					<Titles level={5} color="black">
						<span className="spanPrimary">Welcome</span>
					</Titles>
				</div>
				<div className="gapMarginTopOne"></div>
				<Row gutter={[16, 16]} align={'middle'}>
					<Col xs={24} sm={12} md={8} xl={8}>
						<Link href="/en/user/generate-report">
							<div className="bgColorTwo">
								<SpinLoader loading={loading}>
									<div
										id="dashboardCard"
										style={{
											backgroundImage:
												'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'
										}}
									>
										<ParaText size="large" color="black">
											Battery Reports
										</ParaText>
										<Titles level={4} color="PrimaryColor">
											{allBatteryData.length}
										</Titles>
										<ParaText
											size="extraSmall"
											color="black"
											className="dBlock textEnd"
											fontWeightBold={900}
										>
											Today
										</ParaText>
										<div className="iconPostion">
											<HiOutlineDotsHorizontal />
										</div>
									</div>
								</SpinLoader>
							</div>
						</Link>
					</Col>
					<Col xs={24} sm={12} md={8} xl={8}>
						<Link href="/en/user/generate-report">
							<div>
								<SpinLoader loading={loading}>
									<div
										id="dashboardCard"
										style={{
											background: 'linear-gradient(180deg, #FFB32A 0%, #FFD17E 100%)'
										}}
									>
										<ParaText size="large" color="black">
											Battery Reports
										</ParaText>
										<Titles level={4} color="PrimaryColor">
											{allBatteryData.length}
										</Titles>
										<ParaText
											size="extraSmall"
											color="black"
											className="dBlock textEnd"
											fontWeightBold={900}
										>
											Today
										</ParaText>
										<div className="iconPostion">
											<HiOutlineDotsHorizontal />
										</div>
									</div>
								</SpinLoader>
							</div>
						</Link>
					</Col>
					<Col xs={24} sm={12} md={8} xl={8}>
						<Link href="/en/user/generate-report">
							<div>
								<SpinLoader loading={loading}>
									<div
										id="dashboardCard"
										style={{
											background: 'linear-gradient(180deg, #8585FF 0%, #CDCDFF 100%)'
										}}
									>
										<ParaText size="large" color="black">
											Battery Reports
										</ParaText>
										<Titles level={4} color="PrimaryColor">
											{allBatteryData.length}
										</Titles>
										<ParaText
											size="extraSmall"
											color="black"
											className="dBlock textEnd"
											fontWeightBold={900}
										>
											Today
										</ParaText>
										<div className="iconPostion">
											<HiOutlineDotsHorizontal />
										</div>
									</div>
								</SpinLoader>
							</div>
						</Link>
					</Col>
				</Row>
				<SpinLoader loading={loading}>
					<Row gutter={[16, 16]}>
						<Col lg={24}>
							<FormTableData allBatteryData={allBatteryData} />
						</Col>
					</Row>
				</SpinLoader>
			</div>
		</>
	);
}
