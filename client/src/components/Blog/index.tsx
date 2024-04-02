/* eslint-disable jsx-a11y/alt-text */
'use client';
import React from 'react';
import { getBlogs } from '@/lib/frontendApi';
import { Button, Card, Col, Image, Row, Space } from 'antd';
const { Meta } = Card;
import './style.css';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';
import Link from 'next/link';
import ErrorHandler from '@/lib/ErrorHandler';
import { dateFormatter } from './dateFormatter';
import { shuffleArray } from './shuffleArray';

export default function BlogComponent() {
	const [blogs, setBlogs] = React.useState<any[]>([]);

	const getAllBlogs = async () => {
		try {
			const res = await getBlogs();
			const shuffleBlogs = shuffleArray(res.data);
			const blogsToShow = shuffleBlogs.slice(0, 4);
			setBlogs(blogsToShow);
		} catch (err: any) {
			ErrorHandler.showNotification(err.message);
			console.error(err);
		}
	};

	React.useEffect(() => {
		getAllBlogs();
	}, []);

	return (
		<>
			<div className="customContainer" id="blog">
				<Titles className="textCenter" level={3} color="PrimaryColor">
					👋 Blog
				</Titles>
				<div className="gapMarginFourTeenTop"></div>
				<Row gutter={[16, 16]}>
					{blogs?.map((blog: any) => (
						<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6} key={blog._id}>
							<Link href={`/en/blogs/${blog.slug}`}>
								<Card
									hoverable
									style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
									cover={
										<Image
											preview={false}
											src={blog.image}
											placeholder={
												<Image
													src="/images/ev-battery.jpg"
													preview={false}
													style={{ filter: 'blur(2px)' }}
												/>
											}
											fallback="/images/ev-battery.jpg"
										/>
									}
								>
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
								</Card>
							</Link>
						</Col>
					))}
				</Row>
			</div>
		</>
	);
}
