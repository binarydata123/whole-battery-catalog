'use client';
import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import { Col, Image, Row, Select } from 'antd';
import Link from 'next/link';
const { Option } = Select;
import FormTableData from './FormTableData';
import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import VendorAuth from '@/contexts/VendorAuthProvider';
import { allBatteryReports } from '@/lib/adminApi';

export default function Dashboard() {
	const [allBatteryData, setAllBatteryData] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	const { user } = React.useContext(VendorAuth);

	const fetchAllBatteryData = async () => {
		try {
			const res = await allBatteryReports(user.access_token);
			setAllBatteryData(res.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (user && user.access_token) {
			fetchAllBatteryData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<>
			<div className={styles.dashBody}>
				<div className="textEnd">
					<Titles level={5} color="black">
						<span className="spanPrimary">Welcome</span>
					</Titles>
				</div>
				<div className="gapMarginTopOne"></div>
				<Row gutter={[16, 16]} align={'middle'}>
					<Col xs={24} sm={12} md={6} xl={6}>
						<Link href="/en/admin/battery-reports">
							<div>
								<div
									id={styles.dashboardCard}
									style={{
										backgroundImage: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'
									}}
								>
									<ParaText size="large" color="black">
										Total Reports
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
									<div className={styles.iconPostion}>
										<HiOutlineDotsHorizontal />
									</div>
								</div>
							</div>
						</Link>
					</Col>

					<Col xs={24} sm={12} md={6} xl={6}>
						<Link href="/en/admin/single-invoice">
							<div>
								<div
									id={styles.dashboardCard}
									style={{ backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)' }}
								>
									<ParaText size="large" color="black">
										Total Payments
									</ParaText>
									<Titles level={4} color="PrimaryColor">
										120
									</Titles>
									<ParaText
										size="extraSmall"
										color="black"
										className="dBlock textEnd"
										fontWeightBold={900}
									>
										Today
									</ParaText>
									<div className={styles.iconPostion}>
										<HiOutlineDotsHorizontal />
									</div>
								</div>
							</div>
						</Link>
					</Col>
					<Col xs={24} sm={12} md={6} xl={6}>
						<Link href="#">
							<div>
								<div
									id={styles.dashboardCard}
									style={{ backgroundImage: 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)' }}
								>
									<ParaText size="large" color="black">
										Total Tickets
									</ParaText>
									<Titles level={4} color="PrimaryColor">
										1234
									</Titles>
									<ParaText
										size="extraSmall"
										color="black"
										className="dBlock textEnd"
										fontWeightBold={900}
									>
										Today
									</ParaText>
									<div className={styles.iconPostion}>
										<HiOutlineDotsHorizontal />
									</div>
								</div>
							</div>
						</Link>
					</Col>
					<Col xs={24} sm={12} md={6} xl={6}>
						<Link href="/en/admin/contact-form-history">
							<div>
								<div
									id={styles.dashboardCard}
									style={{ backgroundImage: 'linear-gradient(to right, #74ebd5 0%, #9face6 100%)' }}
								>
									<ParaText size="large" color="black">
										{' '}
										Total Contact Requests
									</ParaText>
									<Titles level={4} color="PrimaryColor">
										901
									</Titles>
									<ParaText
										size="extraSmall"
										color="black"
										className="dBlock textEnd"
										fontWeightBold={900}
									>
										Today
									</ParaText>
									<div className={styles.iconPostion}>
										<HiOutlineDotsHorizontal />
									</div>
								</div>
							</div>
						</Link>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col lg={24}>
						<FormTableData allBatteryData={allBatteryData} />
					</Col>
				</Row>
			</div>
		</>
	);
}
