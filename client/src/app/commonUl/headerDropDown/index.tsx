'use client';
import React, { useContext } from 'react';
import styles from './notificationsBlank.module.css';
import ParaText from '../ParaText';
import { TbSettings } from 'react-icons/tb';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMdHelpBuoy } from 'react-icons/io';
import { CgLogIn } from 'react-icons/cg';
import { FaHotel } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { GrCompliance } from 'react-icons/gr';
import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { Avatar, Col, Row } from 'antd';
// import AuthContext from '@/contexts/AuthContext';
import VendorAuth from '@/contexts/VendorAuthProvider';

export default function HeaderDropDown(props: any) {
	const { user, logout } = useContext(VendorAuth);

	const handleLogout = () => {
		logout();
	};
	return (
		<>
			<div className={styles['notificationsBlank']}>
				<div className="textLeft">
					<Row gutter={[16, 16]}>
						<Col lg={6} md={6} sm={6} xs={6} className="mobileCenter">
							<Avatar />
						</Col>
						<Col lg={18} md={18} sm={18} xs={18} className="mobileCenter">
							<ParaText size="extraSmall" color="black" className="dBlock">
								<span>{user && user.vendor_email_id ? user.vendor_email_id : null}</span>
							</ParaText>
							{/* <ParaText size="smallExtra" color="black" className="dBlock">
								All the facts Lip
							</ParaText> */}
						</Col>
					</Row>
					<div className="gapMarginTopOne"></div>
					<div
						className="flex mediumTopMargin"
						style={{ display: 'flex', marginTop: '10px', alignItems: 'center', marginLeft: '20px' }}
					>
						<MdDashboard style={{ color: '#2C2C2C' }} />
						<div className={styles['paddingLeft']}>
							<Link href="">
								<ParaText size="extraSmall">Dashboard</ParaText>
							</Link>
						</div>
					</div>

					{user && user.role === 'admin' && (
						<div
							className="flex mediumTopMargin"
							style={{ display: 'flex', marginTop: '10px', alignItems: 'center', marginLeft: '20px' }}
						>
							<IoIosSettings />
							<div className={styles['paddingLeft']}>
								<Link href="#">
									<ParaText size="extraSmall">Admin Setting</ParaText>
								</Link>
							</div>
						</div>
					)}
					<div
						className="flex mediumTopMargin"
						style={{ display: 'flex', marginTop: '10px', alignItems: 'center', marginLeft: '20px' }}
					>
						<CgLogIn style={{ color: '#D04E4F' }} />
						<div className={styles['paddingLeft']} onClick={handleLogout}>
							<Link href="#">
								{' '}
								<ParaText size="extraSmall">Log Out</ParaText>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
