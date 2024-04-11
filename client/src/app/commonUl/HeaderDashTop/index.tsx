'use client';
import styles from './headerDashTop.module.css';
import { Avatar, Col, Image, Input, Row } from 'antd';
import Titles from '../Titles';
import { usePathname } from 'next/navigation';
import { FaBell } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import React, { useMemo, useState, useContext } from 'react';

import { Button, notification } from 'antd';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import MenuAdmin from '../MenuAdmin';
import MenuAdminMobile from '../MenuAdminMobile';
import MenuUserMobile from '../MenuUserMobile';
import { CiSearch } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { IoLanguageSharp } from 'react-icons/io5';
import HeaderDropDown from '../headerDropDown';
import { BiMenuAltLeft } from 'react-icons/bi';
import VendorAuth from '@/contexts/VendorAuthProvider';
import Link from 'next/link';

const Context = React.createContext({ name: 'Default' });
export default function HeaderDashTop() {
	const pathName = usePathname();
	const { user } = React.useContext(VendorAuth);

	const [showNotification, setShowNotification] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleDivClick = () => {
		setShowNotification((prevValue) => !prevValue);
	};

	const openNotification = () => {
		notification.open({
			message: 'Notification Title',
			description:
				'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
			onClick: () => {
				console.log('Notification Clicked!');
			}
		});
	};

	// Function to toggle the menu state
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<>
			<div className={styles.headerDashboard}>
				<div className="none">
					{/* Button for toggling the menu */}
					<button
						className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
						onClick={toggleMenu}
						style={{ backgroundColor: 'transparent' }}
					>
						<span className="navbar-toggler-icon">
							{isMenuOpen ? (
								<TiTimes className="claseIcon" style={{ fontSize: '20px', color: 'white' }} />
							) : (
								<TiThMenu className="classFixed" style={{ fontSize: '20px', color: 'white' }} /> // Toggle icon
							)}
						</span>
					</button>
					<div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
						{user?.role === 'admin' ? <MenuAdminMobile /> : <MenuUserMobile />}
					</div>
				</div>
				<Row className="" align="middle" gutter={[16, 16]}>
					{pathName.includes('user') ? (
						<Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3} className="mobileNone">
							<Link href="/">
								<Image src="/images/logo-site.png" alt="" preview={false} width={190} />
							</Link>
						</Col>
					) : null}
					<Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} className="mobileNone">
						<ul className={styles.userMenuBar}>
							<li>
								<Link
									href="/en/user/dashboard"
									className={pathName === '/en/user/dashboard' ? styles.active : null}
								>
									DASHBOARD
								</Link>
							</li>
							<li>
								<Link
									href="/en/user/generate-report"
									className={pathName === '/en/user/generate-report' ? styles.active : null}
								>
									REPORTS
								</Link>
							</li>
							<li>
								<Link href="#">PAYMENT HISTORY</Link>
							</li>
						</ul>
					</Col>
					<Col xs={24} sm={24} md={24} lg={24} xl={4} xxl={4} className="textEnd">
						<div className={styles.flexTwo}>
							{/* <IoLanguageSharp /> */}
							<FaBell onClick={openNotification} />
							<Avatar size={50} />
							<BiMenuAltLeft onClick={handleDivClick} />
						</div>
					</Col>
				</Row>
			</div>
			{showNotification && <HeaderDropDown />}
		</>
	);
}
