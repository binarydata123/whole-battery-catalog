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
			<div className="loginPage">
				<div className="loginFullWidth">
					<Row>
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
							<div className="heightCover">
								<div className="formData">
									<ForgotPassword />
								</div>
							</div>
						</Col>
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
							<div className="fullImageLogin">
								<div className="bottomSection" style={{ float: 'right' }}>
									<ParaText size="small" fontWeightBold={600} color="white">
										The rise of electric vehicles marks the beginning of a new era in
										transportation, one where sustainability and innovation go hand in hand.
									</ParaText>
									<Row align="middle" gutter={[16, 16]}>
										<Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
											<ParaText size="large" color="white" className="dBlock">
												Jake Paul
											</ParaText>
											<ParaText size="textGraf" color="white" className="dBlock">
												CEO, Company
											</ParaText>
											<ParaText size="smallExtra" color="white" className="dBlock">
												Finance Agency
											</ParaText>
										</Col>
										<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
											<Flex gap="middle" vertical>
												<Rate onChange={setValue} value={value} />
											</Flex>
											<div className="gapMarginTopOne"></div>
											<VscArrowCircleLeft
												style={{ color: '#fff', fontSize: '30px', cursor: 'pointer' }}
											/>
											<VscArrowCircleRight
												style={{ color: '#fff', fontSize: '30px', cursor: 'pointer' }}
											/>
										</Col>
									</Row>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
