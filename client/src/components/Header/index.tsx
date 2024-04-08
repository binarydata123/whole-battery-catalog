'use client';
import React, { useState } from 'react';
import './style.css';
import { Button, Col, Row, Image } from 'antd';
import Link from 'next/link';
import ParaText from '@/app/commonUl/ParaText';
import { AiOutlineClose } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import PrimaryButton from '@/app/commonUl/PrimaryButton';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [showAppointmentPopup, setShowAppointmentPopup] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleItemClick = () => {
		setIsOpen(false);
	};

	const toggleAppointmentPopup = () => {
		setShowAppointmentPopup(!showAppointmentPopup);
	};

	const handleCloseModal = () => {
		// setStripePayment(false);
		setShowAppointmentPopup(false); // Call onCloseModal when closing the modal
	};
	return (
		<>
			<div className="headerSection">
				<div>
					<div className="headerMobile">
						<Link href="/">
							<Image src="/images/logo-site.png" alt="" width={190} preview={false} />
						</Link>
						<div className="menu-toggle" onClick={toggleMenu}>
							{isOpen ? <AiOutlineClose /> : <TiThMenu />}
						</div>
					</div>
					{isOpen && (
						<nav id="menu">
							<ul className="listItems">
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/en/about-us">About Us</Link>
								</li>
								<li>
									<Link href="/en/service">Services</Link>
								</li>
								<li>
									<Link href="/en/blogs">Blogs</Link>
								</li>
								<li>
									<Link href="/en/contact-us">Contact Us</Link>
								</li>
								<li>
									<Link href="/en/refund-policy">Refund Policy</Link>
								</li>
							</ul>
						</nav>
					)}
				</div>
				<div className="customContainer" id="customContainer">
					<Row align="middle" gutter={[16, 16]}>
						<Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3} className="logoMain">
							<Link href="/">
								<Image src="/images/logo-site.png" alt="" preview={false} />
							</Link>
						</Col>
						<Col xs={24} sm={24} md={24} lg={19} xl={19} xxl={19} className="textCenter">
							<ul className="listItems">
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/en/about-us">About Us</Link>
								</li>
								<li>
									<Link href="/en/service">Services</Link>
								</li>
								<li>
									<Link href="/en/blogs">Blogs</Link>
								</li>
								<li>
									<Link href="/en/contact-us">Contact Us</Link>
								</li>
								<li>
									<Link href="/en/refund-policy">Refund Policy</Link>
								</li>

								{/* <li>
								<Link href="/en/login">Login</Link>
							</li> */}
							</ul>
						</Col>
						<Col xs={24} sm={24} md={24} lg={2} xl={2} xxl={2} className="textEnd">
							<Link href="/en/login">
								<Button
									type="primary"
									style={{
										height: '60px',
										width: '100%',
										color: 'white !important'
									}}
								>
									Login
								</Button>
							</Link>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
