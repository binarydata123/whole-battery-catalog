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
import { allBatteryByVendor } from '@/lib/userApi';

export default function Dashboard() {
	const [loading, setLoading] = useState<boolean>(true);
	const [allBatteryData, setAllBatteryData] = useState<any[]>([]);

	const { user } = React.useContext(VendorAuth);

	const fetchAllBatteryData = async (token: any) => {
		try {
			const res = await allBatteryByVendor(token);
			setAllBatteryData(res.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (user && user.access_token) {
			fetchAllBatteryData(user.access_token);
		}
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
						<Link href="/en/user/generate-report">
							<div>
								<div
									id={styles.dashboardCard}
									style={{
										backgroundImage: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'
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
									<div className={styles.iconPostion}>
										<HiOutlineDotsHorizontal />
									</div>
								</div>
							</div>
						</Link>
					</Col>

					{/* <Col xs={24} sm={12} md={6} xl={6}>
						<Link href="">
							<div>
								<div
									id={styles.dashboardCard}
									style={{ backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)' }}
								>
									<ParaText size="large" color="black">
										User Count
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
						<Link href="">
							<div>
								<div
									id={styles.dashboardCard}
									style={{ backgroundImage: 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)' }}
								>
									<ParaText size="large" color="black">
										Contact
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
						<Link href="">
							<div>
								<div
									id={styles.dashboardCard}
									style={{ backgroundImage: 'linear-gradient(to right, #74ebd5 0%, #9face6 100%)' }}
								>
									<ParaText size="large" color="black">
										{' '}
										New Customers
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
					</Col> */}
				</Row>
				<Row gutter={[16, 16]}>
					<Col lg={24}>
						<FormTableData allBatteryData={allBatteryData} />
					</Col>
					{/* <Col sm={24} xs={24} md={24} lg={8}>
						<Row gutter={[16, 16]}>
							<Col lg={12} md={24} sm={24} xs={24} className="textCenter">
								<div id={styles.dashboardCard}>
									<Image
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3oU7H7X1GKBA_XWlLMoNHagnr6qPvyJzpA&usqp=CAU"
										alt=""
										width={60}
										preview={false}
										height={60}
									/>
									<ParaText size="large" color="black" className="dBlock">
										New Customers
									</ParaText>
									<Titles level={4} color="black">
										901
									</Titles>
								</div>
							</Col>
							<Col lg={12} md={24} sm={24} xs={24} className="textCenter">
								<div id={styles.dashboardCard}>
									<Image
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaWlZa9i7X2YuVfqTXYQkBFFpWJAN279Go0M687ZYI3S6Qbovgsh0wkrrnZNcsGgQrAg&usqp=CAU"
										alt=""
										width={60}
										preview={false}
										height={60}
									/>
									<ParaText size="large" color="black" className="dBlock">
										New Customers
									</ParaText>
									<Titles level={4} color="black">
										901
									</Titles>
								</div>
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col lg={12} md={24} sm={24} xs={24} className="textCenter">
								<div id={styles.dashboardCard}>
									<Image
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3HvDZTpzUBoomr_pm5D17dvbV681QNTR-g&usqp=CAU"
										alt=""
										width={60}
										preview={false}
										height={60}
									/>
									<ParaText size="large" color="black" className="dBlock">
										New Customers
									</ParaText>
									<Titles level={4} color="black">
										901
									</Titles>
								</div>
							</Col>
							<Col lg={12} md={24} sm={24} xs={24} className="textCenter">
								<div id={styles.dashboardCard}>
									<Image
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Buy6-Jp_vnuZLyjJPFM9uzyuKqxGdrC__w&usqp=CAU"
										alt=""
										width={60}
										preview={false}
										height={60}
									/>
									<ParaText size="large" color="black" className="dBlock">
										New Customers
									</ParaText>
									<Titles level={4} color="black">
										901
									</Titles>
								</div>
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col lg={12} md={24} sm={24} xs={24} className="textCenter">
								<div id={styles.dashboardCard}>
									<Image
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreV70gqOk1rWUV7T0GhhosIqtp56XcIraRQ&usqp=CAU"
										alt=""
										width={60}
										preview={false}
										height={60}
									/>
									<ParaText size="large" color="black" className="dBlock">
										New Customers
									</ParaText>
									<Titles level={4} color="black">
										901
									</Titles>
								</div>
							</Col>
							<Col lg={12} md={24} sm={24} xs={24} className="textCenter">
								<div id={styles.dashboardCard}>
									<Image
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIGILEbZLKjQFpZ7unZNDuPFJ5yImEJIQSQ&usqp=CAU"
										alt=""
										width={60}
										preview={false}
										height={60}
									/>
									<ParaText size="large" color="black" className="dBlock">
										New Customers
									</ParaText>
									<Titles level={4} color="black">
										901
									</Titles>
								</div>
							</Col>
						</Row>
					</Col> */}
				</Row>
			</div>
		</>
	);
}
