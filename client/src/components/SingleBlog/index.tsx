import React from 'react';
import './style.css';
import { Breadcrumb, Col, Image, Row } from 'antd';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';
import Link from 'next/link';
import Blog from '../Blog';
export default function SingleBlog() {
	return (
		<div>
			<div className="customContainer">
				<div className="gapMarginFourTeenTop"></div>
				<div className="singleBlog">
					<div>
						<Titles level={3} color="PrimaryColor">
							Five Smart Ways to Improve <br /> EV Battery Production
						</Titles>
						<ParaText size="medium" color="PrimaryColor">
							Batteries and battery management systems are the heart of todays electric vehicles
						</ParaText>
						<div className="gapMarginFourTeenTop"></div>
						<Breadcrumb
							items={[
								{
									title: <Link href="/">Home</Link>
								},
								{
									title: <Link href="/">Blog</Link>
								}
							]}
						/>
					</div>
				</div>
			</div>
			<div className="gapMarginFourTeenTop"></div>
			<div className="customContainer">
				<Image
					src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
					alt="Ev Battery"
					width={1520}
					height={700}
					preview={false}
					style={{ borderRadius: '24px' }}
				/>
				<div className="gapMarginFourTeenTop"></div>
				<Titles level={4} color="PrimaryColor">
					Introduction:
				</Titles>
				<ParaText size="medium" color="PrimaryColor">
					Electric Vehicle (EV) batteries represent the heart of the automotive industrys transition towards
					sustainable transportation. This comprehensive overview delves into the evolution, current state,
					and future trajectories of EV battery technology.
				</ParaText>
				<div className="gapMarginFourTeenTop"></div>
				<ParaText size="medium" color="defaultColor" className="dBlock">
					This comprehensive overview explores the evolution, current state, and future trajectories of
					Electric Vehicle (EV) batteries. Starting with a historical background tracing back to early
					experiments in the 19th century, the narrative progresses through various battery technologies,
					including lead-acid, nickel-metal hydride, and the pivotal introduction of lithium-ion batteries.
					Current technologies predominantly rely on lithium-ion chemistry, with variations such as lithium
					iron phosphate (LiFePO4), lithium nickel manganese cobalt oxide (NMC), and lithium nickel cobalt
					aluminum oxide (NCA), each offering unique trade-offs in energy density, longevity, and cost. Recent
					advancements focus on improving energy density, charging speed, and lifespan, with solid-state
					batteries emerging as a promising frontier for higher energy density, enhanced safety, and rapid
					charging capabilities. Environmental considerations, including manufacturing processes, resource
					extraction, recycling infrastructure, and end-of-life management, underscore the need for
					sustainable practices in the EV battery industry. Looking ahead, the future of EV batteries holds
					promise for further innovation, integration with renewable energy systems, and advancements in
					recycling technologies, poised to drive down costs and accelerate the electrification of
					transportation on a global scale.
				</ParaText>
				<div className="gapMarginFourTeenTop"></div>
				<Row gutter={[24, 24]}>
					<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
						<Image
							src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
							alt="Ev Battery"
							preview={false}
							style={{ borderRadius: '12px' }}
						/>
					</Col>
					<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
						<ParaText size="medium" color="defaultColor" className="dBlock">
							This comprehensive overview explores the evolution, current state, and future trajectories
							of Electric Vehicle (EV) batteries. Starting with a historical background tracing back to
							early experiments in the 19th century, the narrative progresses through various battery
							technologies, including lead-acid, nickel-metal hydride, and the pivotal introduction of
							lithium-ion batteries. Current technologies predominantly rely on lithium-ion chemistry,
							with variations such as lithium iron phosphate (LiFePO4), lithium nickel manganese cobalt
							oxide (NMC), and lithium nickel cobalt aluminum oxide (NCA), each offering unique trade-offs
							in energy density, longevity, and cost. Recent advancements focus on improving energy
							density, charging speed, and lifespan, with solid-state batteries emerging as a promising
							frontier for higher energy density, enhanced safety, and rapid charging capabilities.
						</ParaText>
					</Col>
				</Row>
				<div className="gapMarginFourTeenTop"></div>
				<Titles level={5} color="PrimaryColor">
					Introduction:
				</Titles>
				<ParaText size="medium" color="defaultColor">
					Electric Vehicle (EV) batteries represent the heart of the automotive industrys transition towards
					sustainable transportation. This comprehensive overview delves into the evolution, current state,
					and future trajectories of EV battery technology.
				</ParaText>
				<div className="gapMarginFourTeenTop"></div>
				<div className="userDetails">
					<Row gutter={[16, 16]}>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<Row gutter={[4, 4]}>
								<Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
									<Image
										src="https://cdn.ttweb.net/News/images/279991.jpg?preset=w800_q70"
										alt="Ev Battery"
										preview={false}
										style={{
											borderRadius: '50%',
											height: '50px',
											width: '50px',
											objectFit: 'cover'
										}}
									/>
								</Col>
								<Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
									<ParaText size="extraSmall" color="PrimaryColor" fontWeightBold={600}>
										Electric Vehicle
									</ParaText>
									<ParaText size="smallExtra" className="dBlock" color="PrimaryColor">
										Electric Vehicle
									</ParaText>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<div className="gapMarginFourTeenTop"></div>
				<Titles level={5} color="PrimaryColor">
					Future Prospects:
				</Titles>
				<ParaText size="medium" color="defaultColor">
					The future of EV batteries holds immense potential for further innovation and integration with
					renewable energy systems. Breakthroughs in solid-state technology, coupled with advancements in
					recycling and circular economy practices, are poised to drive down costs, improve performance, and
					accelerate the electrification of transportation on a global scale.
				</ParaText>
				<div className="gapMarginFourTeenTop"></div>
				<Row gutter={[16, 16]} id="useChoice">
					<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
						<Titles level={5} color="PrimaryColor">
							Our Products
						</Titles>
						<ParaText size="medium" color="defaultColor">
							Explore our extensive range of batteries for all your devices, including:
						</ParaText>
						<ul>
							<li>AA, AAA, C, D, and 9V batteries</li>
							<li>Laptop and smartphone batteries</li>
							<li>Car and motorcycle batteries</li>
							<li>Rechargeable batteries</li>
							<li>And much more!</li>
						</ul>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
						<Titles level={5} color="PrimaryColor">
							Why Choose Us?
						</Titles>
						<ParaText size="medium" color="defaultColor">
							With the Whole Battery Catalog, you get:
						</ParaText>
						<ul>
							<li>High-quality products from trusted brands</li>
							<li>Competitive prices</li>
							<li>Fast and reliable shipping</li>
							<li>Excellent customer service</li>
						</ul>
					</Col>
				</Row>

				<div className="gapMarginFourTeenTop"></div>
			</div>
			<Blog />
		</div>
	);
}
