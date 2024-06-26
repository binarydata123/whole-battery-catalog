/* eslint-disable jsx-a11y/alt-text */
'use client';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Image, Row, Space } from 'antd';
import ImageWithFallback from '../ImageWithFallback';
const { Meta } = Card;
import './style.css';
import Titles from '@/app/commonUl/Titles';
import { getBlogs } from '@/lib/frontendApi';
import ParaText from '@/app/commonUl/ParaText';
import Link from 'next/link';
import { dateFormatter } from './dateFormatter';
import SpinLoader from '../Spin-loader';
import ErrorHandler from '@/lib/ErrorHandler';

export default function Blog_Page() {
	const [loading, setLoading] = useState<boolean>(false);
	const [allBlogs, setAllBlogs] = useState(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await getBlogs();
			if (res.status == true) {
				setAllBlogs(res.data);
			}
		} catch (error) {
			setLoading(false);
			ErrorHandler.showNotification(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="customContainer" id="blog">
				{/* <Titles className="textCenter" level={3} color="PrimaryColor">
					👋 Blog
				</Titles> */}
				<div className="gapMarginFourTeenTop"></div>
				<Row gutter={[16, 16]}>
					{allBlogs?.map((blog: any) => (
						<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6} key={blog._id}>
							<Link href={`/en/blogs/${blog.slug}`}>
								<Card
									hoverable
									style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
									cover={
										<ImageWithFallback
											src={blog.image}
											preview={false}
											fallbackSrc="/images/ev-battery.jpg"
										/>
									}
								>
									<SpinLoader loading={loading}>
										<ParaText size="smallExtra" color="black">
											{dateFormatter(blog.updatedAt)}
										</ParaText>
										<div className="gapMarginTopTwo"></div>
										<Meta
											title={
												<ParaText size="extraSmall" color="PrimaryColor">
													{blog.metaTitle}
												</ParaText>
											}
											description={blog.metaDescription}
										/>
										<div className="gapMarginTopTwo"></div>
										<div style={{ position: 'absolute', top: 20, right: 20 }}>
											<Button shape="round" type="default">
												EV Battery
											</Button>
										</div>
										<Space>
											<Button>EV Battery</Button>
											<Button>EV Battery</Button>
										</Space>
									</SpinLoader>
								</Card>
							</Link>
						</Col>
					))}
				</Row>
			</div>
		</>
	);
}
