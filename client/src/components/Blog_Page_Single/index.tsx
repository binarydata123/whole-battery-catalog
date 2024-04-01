import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import { Breadcrumb, Col, Row, Image } from 'antd';

import Link from 'next/link';
import React from 'react';

const SinglePage = ({ blogData }: any) => {
	return (
		<>
			<div className="customContainer">
				<div className="gapMarginFourTeenTop"></div>
				<div className="singleBlog">
					<div>
						<Titles level={3} color="PrimaryColor">
							{blogData?.title}
						</Titles>
						<ParaText size="medium" color="PrimaryColor">
							{blogData?.metaDescription}
						</ParaText>
						<div className="gapMarginFourTeenTop"></div>
						<Breadcrumb
							items={[
								{
									title: <Link href="/en/blogs">Blogs</Link>
								},
								{
									title: <Link href={`/en/blogs/${blogData?.slug}`}>{blogData?.slug}</Link>
								}
							]}
						/>
					</div>
				</div>
			</div>
			<div className="gapMarginFourTeenTop"></div>
			<div className="customContainer">
				<Image
					src={blogData?.image}
					alt={blogData?.metaDescription}
					fallback="https://ruchiragreenearth.com/blog/wp-content/uploads/2023/09/ev-battery.jpg"
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
					{/* Electric Vehicle (EV) batteries represent the heart of the automotive industrys transition towards
					sustainable transportation. This comprehensive overview delves into the evolution, current state,
					and future trajectories of EV battery technology. */}
					{blogData?.title}
				</ParaText>
				<div className="gapMarginFourTeenTop"></div>
				<ParaText size="medium" color="defaultColor" className="dBlock">
					<div dangerouslySetInnerHTML={{ __html: blogData?.description }}></div>
				</ParaText>
				<div className="gapMarginFourTeenTop"></div>
				<Row gutter={[24, 24]}>
					<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
						<Image
							src={blogData?.image}
							alt={blogData?.metaDescription}
							fallback="https://ruchiragreenearth.com/blog/wp-content/uploads/2023/09/ev-battery.jpg"
							preview={false}
							style={{ borderRadius: '12px' }}
						/>
					</Col>
					<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
						<ParaText size="medium" color="defaultColor" className="dBlock">
							<div dangerouslySetInnerHTML={{ __html: blogData?.description }}></div>
						</ParaText>
					</Col>
				</Row>
				{/* <div className="gapMarginFourTeenTop"></div>
				<Titles level={5} color="PrimaryColor">
					Introduction:
				</Titles>
				<ParaText size="medium" color="defaultColor">
					Electric Vehicle (EV) batteries represent the heart of the automotive industrys transition towards
					sustainable transportation. This comprehensive overview delves into the evolution, current state,
					and future trajectories of EV battery technology.
				</ParaText> */}
				<div className="gapMarginFourTeenTop"></div>
				<div className="userDetails">
					<Row gutter={[16, 16]}>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<Row gutter={[4, 4]}>
								<Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
									<Image
										src={blogData?.authorId?.imageProfile}
										alt={blogData?.authorId?.name}
										fallback="/images/user-svgrepo-com.svg"
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
										{blogData?.authorId?.name}
									</ParaText>
									<ParaText size="smallExtra" className="dBlock" color="PrimaryColor">
										{blogData?.authorId?.designation}
									</ParaText>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<div className="gapMarginFourTeenTop"></div>
				{/* <Titles level={5} color="PrimaryColor">
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
				</Row> */}
				<div className="gapMarginFourTeenTop"></div>
			</div>
		</>
	);
};

export default SinglePage;
