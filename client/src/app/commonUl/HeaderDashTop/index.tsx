'use client';
import styles from './headerDashTop.module.css';
import { Col, Input, Row } from 'antd';
import Titles from '../Titles';
import { useRouter } from 'next/navigation';
import { FaBell } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import React, { useMemo, useState } from 'react';
import { Button, notification } from 'antd';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import MenuAdmin from '../MenuAdmin';
import MenuAdminMobile from '../MenuAdminMobile';
import { CiSearch } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { IoLanguageSharp } from 'react-icons/io5';
import HeaderDropDown from '../headerDropDown';
const Context = React.createContext({ name: 'Default' });
export default function HeaderDashTop() {
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
								<div className="claseIcon">
									<TiTimes style={{ fontSize: '20px', color: 'white' }} />
								</div> // Close icon
							) : (
								<TiThMenu style={{ fontSize: '20px', color: 'white' }} /> // Toggle icon
							)}
						</span>
					</button>
					<div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
						<MenuAdminMobile />
					</div>
				</div>
				<Row className="" align="middle" gutter={[16, 16]}>
					<Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className="mobileNone">
						<Input
							size="large"
							placeholder="Search.."
							suffix={<CiSearch />}
							style={{ background: '#F4F7FE' }}
						/>
					</Col>
					<Col xs={24} sm={24} md={24} lg={24} xl={20} xxl={20} className="textEnd">
						<div className={styles.flexTwo}>
							{/* <IoLanguageSharp /> */}
							<FaBell onClick={openNotification} />
							<FaUserAlt onClick={handleDivClick} />
						</div>
					</Col>
				</Row>
			</div>
			{showNotification && <HeaderDropDown />}
		</>
	);
}
