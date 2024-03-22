'use client';
import React from 'react';
import './style.css';
import { Col, Row, Image } from 'antd';
import { Input } from 'antd';
import Titles from '@/app/commonUl/Titles';
import ContactUs from '@/components/ContactUs';
import About from '@/components/About';
import Service from '@/components/Service';
import Blog from '@/components/Blog';
const { TextArea } = Input;
export default function BannerSubSection() {
	return (
		<>
			<Service />
			<About />
			<Blog />
			<div className="customContainer">
				<Image
					preview={false}
					src="https://media.licdn.com/dms/image/D5612AQG5czO65OO0iA/article-cover_image-shrink_600_2000/0/1693660590612?e=2147483647&v=beta&t=XwTc5cTnvwbXyxOgu2upKbKbFdSFR5R7mFRGkkk894c"
					alt=""
					width="100%"
					height="auto"
				/>
			</div>
			<div className="gapMarginFourTeenTop"></div>
			<section className="aboutSection" style={{ paddingTop: '0px' }}>
				<div className="customContainer">
					<Titles className="textCenter" level={3} color="PrimaryColor">
						👋 Battery Technology
					</Titles>
					<div className="gapMarginFourTeenTop"></div>
					<Row align="middle" gutter={[16, 16]}>
						<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
							<div className="evBattery">
								<figure>
									<Image
										src="https://images.unsplash.com/photo-1663008519764-0616547c493a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXYlMjBiYXR0ZXJ5fGVufDB8fDB8fHww"
										preview={false}
										alt=""
									/>
								</figure>
							</div>
						</Col>
						<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
							<div className="evBattery">
								<figure>
									<Image
										src="https://media.istockphoto.com/id/1458349453/photo/robot-assembly-line-with-electric-car-battery-cells-module-on-platform.jpg?s=612x612&w=0&k=20&c=FdElv0sp7LvqstaMPX08RUFxjLHEVaglQA96avxM4fk="
										preview={false}
										alt=""
									/>
								</figure>
							</div>
						</Col>
						<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
							<div className="evBattery">
								<figure>
									<Image
										src="https://media.istockphoto.com/id/1681739582/photo/close-up-view-of-robot-arms-assembling-cars-in-car-factory.jpg?s=612x612&w=0&k=20&c=f-AYsMzF9OEPf-69OLwvrKg_W1V7Qs9W6LaymwaC52Q="
										preview={false}
										alt=""
									/>
								</figure>
							</div>
						</Col>
						<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
							<div className="evBattery">
								<figure>
									<Image
										src="https://media.istockphoto.com/id/1442852776/photo/robot-assembly-line-with-electric-car-battery-cells-module-on-platform.jpg?s=612x612&w=0&k=20&c=89QA6EuQYYUTQ0ssUGnKMVDSTm15lej2NesdaX5WHUw="
										preview={false}
										alt=""
									/>
								</figure>
							</div>
						</Col>
						<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
							<div className="evBattery">
								<figure>
									<Image
										src="https://electricautonomy.ca/wp-content/uploads/2023/07/Hero-Battery-and-wire-installed-on-electric-car.jpg"
										preview={false}
										alt=""
									/>
								</figure>
							</div>
						</Col>
						<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
							<div className="evBattery">
								<figure>
									<Image
										src="https://batterypowersa.co.za/wp-content/uploads/2022/02/Untitled-1-1.png"
										preview={false}
										alt=""
									/>
								</figure>
							</div>
						</Col>
						<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
							<div className="evBattery">
								<figure>
									<Image
										src="https://dst.gov.in/sites/default/files/Li-ion%20batteries.png"
										preview={false}
										alt=""
									/>
								</figure>
							</div>
						</Col>
						<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
							<div className="evBattery">
								<figure>
									<Image
										src="https://insurance.archgroup.com/wp-content/uploads/sites/2/Electric-Car-Battery.jpg"
										preview={false}
										alt=""
									/>
								</figure>
							</div>
						</Col>
					</Row>
				</div>
			</section>

			<ContactUs />
		</>
	);
}
