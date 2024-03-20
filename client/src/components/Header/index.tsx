'use client';
import React, { useState, useContext, useEffect, useRef } from 'react';
import './style.css';
import { Button, Col, Image, Row } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import PrimaryButton from '@/app/commonUl/PrimaryButton';
import SecondaryButton from '@/app/commonUl/SecondaryButton';

export default function Header() {
	return (
		<>
			<div className="customContainer" id="customContainer">
				<Row align="middle" gutter={[16, 16]}>
					<Col xl={6} md={6} xs={24} className="logoMain">
						<Link href="/">
							<h2>Home</h2>
						</Link>
					</Col>
					<Col xl={14} md={20} xs={24} className="textEnd">
						<ul className="listItems">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/">About Us</Link>
							</li>
							<li>
								<Link href="/">Services</Link>
							</li>
							<li>
								<Link href="/">Contact Us</Link>
							</li>
							<li>
								<Link href="/">Refund Policy</Link>
							</li>
						</ul>
					</Col>
					<Col xl={4} md={24} xs={24} className="textEnd">
						<SecondaryButton label="Add New" />
					</Col>
				</Row>
			</div>
		</>
	);
}
