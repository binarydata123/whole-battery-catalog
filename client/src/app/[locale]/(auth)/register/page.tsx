'use client';
import './style.css';
import { Col, Row } from 'antd';
import RegisterForm from '@/components/RegisterForm';
import React, { useState } from 'react';
export default function Page() {
	const [value, setValue] = useState(3);
	return (
		<>
			<div className="loginPage imgShowMobile">
				<Row className="heightVh">
					<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
						<div className="loginForm">
							<RegisterForm />
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
