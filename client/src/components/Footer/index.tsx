'use client';
import React from 'react';
import styles from './footer.module.css';
import { Col, Form, Row, Image } from 'antd';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { PiTiktokLogoFill } from 'react-icons/pi';
import { FaTwitter } from 'react-icons/fa';
import ParaText from '@/app/commonUl/ParaText';
import FormInput from '@/app/commonUl/FormInput';
export default function Footer() {
	const [form] = Form.useForm();

	return (
		<>
			<div className={styles['footerPart']} id="footerPart">
				<div className="customContainer">
					<div className={styles['followUs']}>
						<Row gutter={40}>
							<Col lg={6} md={12} xs={24}>
								<div className={styles.logoFooter}>
									<Image src="/images/logo-site.png" alt=" logo Footer" width={200} preview={false} />
								</div>
								<div className="gapMarginTop"></div>
								<div className="flexContainer align">
									<ParaText size="extraSmall" color="white">
										<strong>Address :</strong> Solo, Indonesia
									</ParaText>
									<ParaText size="extraSmall" color="white" className="dBlock">
										<strong>Call us :</strong> 123-456-7890
									</ParaText>
									<ul className={styles['footerSocialMediaLiks']}>
										<li>
											<Link href="#">
												<AiFillInstagram />
											</Link>
										</li>
										<li>
											<Link href="#">
												<FaLinkedin />
											</Link>
										</li>
										<li>
											<Link href="#">
												<PiTiktokLogoFill />
											</Link>
										</li>
										<li>
											<Link href="#">
												<FaTwitter />
											</Link>
										</li>
									</ul>
								</div>
							</Col>
							<Col lg={6} md={12} xs={24} className="mobilelargeTopMargin">
								<ParaText size="medium" color="white">
									<b>Services</b>
								</ParaText>
								<div className="LargerTopMargin tabmediumTopMargin"></div>
								<ul className={styles['footerLinks']}>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/service`}>
											<ParaText size="extraSmall" color="white">
												EV Battery Health
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/service`}>
											<ParaText size="extraSmall" color="white">
												Charging Stations
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/service`}>
											<ParaText size="extraSmall" color="white">
												Battery Maintenance
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/service`}>
											<ParaText size="extraSmall" color="white">
												EV Repair
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/service`}>
											<ParaText size="extraSmall" color="white">
												Fast Charging
											</ParaText>
										</Link>
									</li>
								</ul>
							</Col>
							<Col lg={6} md={12} xs={24} className="tablargeTopMargin">
								<ParaText size="medium" color="white">
									<b>Quick Links</b>
								</ParaText>
								<div className="LargerTopMargin tabmediumTopMargin"></div>
								<ul className={styles['footerLinks']}>
									<li>
										<Link href="/en/about-us">
											<ParaText size="extraSmall" color="white">
												About us
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href="/en/privacy-policy">
											<ParaText size="extraSmall" color="white">
												Privacy
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href="/en/terms-conditions">
											<ParaText size="extraSmall" color="white">
												Terms & Condition
											</ParaText>
										</Link>
									</li>
								</ul>
							</Col>
							<Col lg={6} md={12} xs={24} className="tablargeTopMargin">
								<ParaText size="medium" color="white">
									<b>Subscribe</b>
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<ParaText size="extraSmall" color="white" className="dBlock">
									Subscribe to get the latest news from us
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<div className={styles.formFooter}>
									<Form form={form}>
										<Form.Item
											name="email"
											rules={[
												{
													required: true,
													type: 'email',
													message: 'Please enter a valid email address'
												}
											]}
										>
											<FormInput placeHolder="Enter Email address" height={45} />
										</Form.Item>
									</Form>
									<div className={styles.arrowForm}>
										<FaCircleArrowRight />
									</div>
								</div>
							</Col>
						</Row>
					</div>
					<br />
					<div className={styles['ftPart']}>
						<Row align="middle" gutter={16} className="largeTopMargin mobilelargeTopMargin textCenter">
							<Col lg={24} md={24} sm={24} xs={24} className="mobileCenter">
								<ParaText size="extraSmall" color="white">
									Copyright © 2024. WHOLE BATTERY CATALOG
								</ParaText>
								<br />
							</Col>
						</Row>
					</div>
					<br />
				</div>
			</div>
		</>
	);
}
