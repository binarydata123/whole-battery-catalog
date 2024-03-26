'use client';
import React from 'react';
import styles from './footer.module.css';
import { Col, Form, Row, message } from 'antd';
import Link from 'next/link';
import { FaFacebook, FaGooglePlus } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import ErrorHandler from '@/lib/ErrorHandler';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { PiTiktokLogoFill } from 'react-icons/pi';
import { FaTwitter } from 'react-icons/fa';
import Titles from '@/app/commonUl/Titles';
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
								<Titles level={5} color="white" className="textUppercase">
									Whole Battery Catalog
								</Titles>
								<div className="gapMarginTop"></div>
								<div className="flexContainer align">
									<ParaText size="textGraf" color="white">
										Solo, Indonesia
									</ParaText>
									<div className="gapMarginTopTwo"></div>
									<ParaText size="textGraf" color="white" className="dBlock">
										Call us : 123-456-7890
									</ParaText>
									<div className="gapMarginTop"></div>
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
								<ParaText size="extraSmall" color="white">
									<b>Services</b>
								</ParaText>
								<div className="LargerTopMargin tabmediumTopMargin"></div>
								<ul className={styles['footerLinks']}>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/property/gainesville`}>
											<ParaText size="textGraf" color="white">
												EV Battery Health
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/property/gainesville`}>
											<ParaText size="textGraf" color="white">
												Female Hormone Replacement
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/property/gainesville`}>
											<ParaText size="textGraf" color="white">
												Peptide-Therapy
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/property/gainesville`}>
											<ParaText size="textGraf" color="white">
												Wellness Services
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href={`${process.env['NEXT_PUBLIC_SITE_URL']}/property/gainesville`}>
											<ParaText size="textGraf" color="white">
												Total Body Transformation
											</ParaText>
										</Link>
									</li>
								</ul>
							</Col>
							<Col lg={6} md={12} xs={24} className="tablargeTopMargin">
								<ParaText size="extraSmall" color="white">
									<b>Quick Links</b>
								</ParaText>
								<div className="LargerTopMargin tabmediumTopMargin"></div>
								<ul className={styles['footerLinks']}>
									<li>
										<Link href="/en/about-us">
											<ParaText size="textGraf" color="white">
												About us
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href="/en/privacy-policy">
											<ParaText size="textGraf" color="white">
												Privacy
											</ParaText>
										</Link>
									</li>
									<li>
										<Link href="/en/terms-conditions">
											<ParaText size="textGraf" color="white">
												Terms & Condition
											</ParaText>
										</Link>
									</li>
								</ul>
							</Col>
							<Col lg={6} md={12} xs={24} className="tablargeTopMargin">
								<ParaText size="extraSmall" color="white">
									<b>Subscribe</b>
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<ParaText size="textGraf" color="white" className="dBlock">
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
								<ParaText size="textGraf" color="white">
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
