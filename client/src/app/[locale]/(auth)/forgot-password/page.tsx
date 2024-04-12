'use client';
import './style.css';
import { Col, Row } from 'antd';
import LoginForm from '@/components/LoginForm';
import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
import { VscArrowCircleLeft } from 'react-icons/vsc';
import { VscArrowCircleRight } from 'react-icons/vsc';
import ParaText from '@/app/commonUl/ParaText';
import ForgotPassword from '@/components/ForgotPassword';

export default function Page() {
	const [value, setValue] = useState(3);
	return (
		<>
			<div className="loginPage imgShowMobile">
				<Row className="heightVh">
					<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
						<div className="loginForm">
							<ForgotPassword />
						</div>
					</Col>
					<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="dNone">
						<div className="imageFull"></div>
					</Col>
				</Row>
			</div>
		</>
	);
}
