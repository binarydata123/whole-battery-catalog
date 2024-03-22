'use client';
import React from 'react';
import './style.css';
import { Button, Col, Row } from 'antd';
import { Form, Input } from 'antd';
import Titles from '@/app/commonUl/Titles';
import { FaFacebookSquare } from 'react-icons/fa';
import ParaText from '@/app/commonUl/ParaText';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { FaInstagramSquare } from 'react-icons/fa';
const { TextArea } = Input;

export default function ContactUs() {
	return (
		<div>
			<div className="gapMarginFourTeenTop"></div>
			<section className="aboutSection" style={{ paddingTop: '0px' }}>
				<div className="customContainer">
					<Titles className="textCenter" level={3} color="PrimaryColor">
						👋 Contact Us
					</Titles>
					<ParaText size="medium" color="PrimaryColor" className="dBlock textCenter">
						Drop us message and we will get back for you.
					</ParaText>
					<div className="gapMarginFourTeenTop"></div>
					<div className="fromFill">
						<Row align="middle" gutter={[24, 24]}>
							<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
								<div className="gapMarginTopTwo">
									<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
										🗺 ADDRESS
									</ParaText>
									<ParaText size="medium" color="PrimaryColor" className="dBlock">
										Drop us message and we will get back for you.
									</ParaText>
								</div>
								<div className="gapMarginTopTwo">
									<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
										💌 EMAIL
									</ParaText>
									<ParaText size="medium" color="PrimaryColor" className="dBlock">
										nc.example@example.com
									</ParaText>
								</div>
								<div className="gapMarginTopTwo">
									<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
										☎ PHONE
									</ParaText>
									<ParaText size="medium" color="PrimaryColor" className="dBlock">
										000-123-456-7890
									</ParaText>
								</div>
								<div className="gapMarginTopTwo">
									<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
										🌏 SOCIALS
										<ul className="socialIcon">
											<li>
												<a href="">
													<FaFacebookSquare />
												</a>
											</li>
											<li>
												<a href="">
													<FaLinkedin />
												</a>
											</li>
											<li>
												<a href="">
													<IoLogoTwitter />
												</a>
											</li>
											<li>
												<a href="">
													<FaInstagramSquare />
												</a>
											</li>
										</ul>
									</ParaText>
								</div>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
								<div>
									<Form name="basic" autoComplete="off" layout="vertical">
										<Form.Item
											label="Full Name"
											name="username"
											rules={[{ required: true, message: 'Please input your username!' }]}
										>
											<Input
												style={{
													height: '50px'
												}}
											/>
										</Form.Item>

										<Form.Item
											label="Email Address"
											name="email"
											rules={[{ required: true, message: 'Please input your email Address!' }]}
										>
											<Input.Password
												style={{
													height: '50px'
												}}
											/>
										</Form.Item>
										<Form.Item label="TextArea">
											<TextArea rows={4} />
										</Form.Item>

										<Form.Item>
											<Button
												type="primary"
												htmlType="submit"
												style={{
													backgroundImage:
														'linear-gradient(to right, #6a11cb 0%, #2575fc 100%) !important',
													width: '100%',
													height: '50px',
													borderRadius: '5px',
													border: 'none',
													color: 'white',
													fontSize: '16px'
												}}
											>
												Submit
											</Button>
										</Form.Item>
									</Form>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</section>
		</div>
	);
}
