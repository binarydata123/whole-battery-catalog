import React from 'react';
import './style.css';
import { Col, Row } from 'antd';
export default function BannerSubSection() {
	return (
		<>
			<div className="customContainer">
				<Row align="middle" gutter={[16, 16]}>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
						yiiyil
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
						klll
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
						hhetheh
					</Col>
				</Row>
			</div>
		</>
	);
}
