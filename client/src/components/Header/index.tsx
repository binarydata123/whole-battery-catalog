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
	const [showAppointmentPopup, setShowAppointmentPopup] = useState(false); // Add state for the appointment popup

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
			<div>
				<div className="headerMobile">
					<Link href="/">
						<h2>Whole Battery Catalog</h2>
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
					<Col xl={6} md={6} xs={24} className="logoMain">
						<Link href="/">
							<h2>Whole Battery Catalog</h2>
						</Link>
					</Col>
					<Col xl={14} md={20} xs={24} className="textEnd">
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
								<Link href="/en/contact-us">Contact Us</Link>
							</li>
							<li>
								<Link href="/en/refund-policy">Refund Policy</Link>
							</li>
						</ul>
					</Col>
					<Col xl={4} md={24} xs={24} className="textEnd">
						<Link href="/en/book-appoinment">
							<Button
								style={{
									backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%) !important',
									height: '60px',
									color: 'white !important'
								}}
							>
								Book Appoinment
							</Button>
						</Link>
					</Col>
				</Row>
			</div>
		</>
	);
}
