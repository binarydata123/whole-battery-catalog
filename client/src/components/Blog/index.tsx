'use client';
import React from 'react';
import { Button, Card, Col, Image, Row, Space } from 'antd';
const { Meta } = Card;
import './style.css';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';
import Link from 'next/link';

export default function Blog() {
	return (
		<>
			<div className="customContainer" id="blog">
				<Titles className="textCenter" level={3} color="PrimaryColor">
					👋 Blog
				</Titles>
				<div className="gapMarginFourTeenTop"></div>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
						<Link href="/en/single-blog">
							<Card
								hoverable
								style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
								cover={
									<Image
										preview={false}
										alt="example"
										src="https://ruchiragreenearth.com/blog/wp-content/uploads/2023/09/ev-battery.jpg"
									/>
								}
							>
								<ParaText size="smallExtra" color="black">
									12 December 2024
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<Meta
									title={
										<ParaText size="extraSmall" color="PrimaryColor">
											Electric Vehicle Batteries
										</ParaText>
									}
									description="Understanding Electric Vehicle Batteries"
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
					<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
						<Link href="/en/single-blog">
							<Card
								hoverable
								style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
								cover={
									<Image
										preview={false}
										alt="example"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnqUF3POhbjWPsJEDUQ2PWscOMoWhWiNAIg&usqp=CAU"
									/>
								}
							>
								<ParaText size="smallExtra" color="black">
									12 December 2024
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<Meta
									title={
										<ParaText size="extraSmall" color="PrimaryColor">
											Electric Vehicle Batteries
										</ParaText>
									}
									description="Understanding Electric Vehicle Batteries"
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
					<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
						<Link href="/en/single-blog">
							<Card
								hoverable
								style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
								cover={
									<Image
										preview={false}
										alt="example"
										src="https://cdn.carbuzz.com/gallery-images/1600/868000/0/868060.jpg"
									/>
								}
							>
								<ParaText size="smallExtra" color="black">
									12 December 2024
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<Meta
									title={
										<ParaText size="extraSmall" color="PrimaryColor">
											Electric Vehicle Batteries
										</ParaText>
									}
									description="Understanding Electric Vehicle Batteries"
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
					<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
						<Link href="/en/single-blog">
							<Card
								hoverable
								style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
								cover={
									<Image
										preview={false}
										alt="example"
										src="https://evcentral.com.au/wp-content/uploads/2020/05/62kWhBattery18110705-scaled.jpg"
									/>
								}
							>
								<ParaText size="smallExtra" color="black">
									12 December 2024
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<Meta
									title={
										<ParaText size="extraSmall" color="PrimaryColor">
											Electric Vehicle Batteries
										</ParaText>
									}
									description="Understanding Electric Vehicle Batteries"
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
					<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
						<Link href="/en/single-blog">
							<Card
								hoverable
								style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
								cover={
									<Image
										preview={false}
										alt="example"
										src="https://ruchiragreenearth.com/blog/wp-content/uploads/2023/09/ev-battery.jpg"
									/>
								}
							>
								<ParaText size="smallExtra" color="black">
									12 December 2024
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<Meta
									title={
										<ParaText size="extraSmall" color="PrimaryColor">
											Electric Vehicle Batteries
										</ParaText>
									}
									description="Understanding Electric Vehicle Batteries"
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
					<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
						<Link href="/en/single-blog">
							<Card
								hoverable
								style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
								cover={
									<Image
										preview={false}
										alt="example"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnqUF3POhbjWPsJEDUQ2PWscOMoWhWiNAIg&usqp=CAU"
									/>
								}
							>
								<ParaText size="smallExtra" color="black">
									12 December 2024
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<Meta
									title={
										<ParaText size="extraSmall" color="PrimaryColor">
											Electric Vehicle Batteries
										</ParaText>
									}
									description="Understanding Electric Vehicle Batteries"
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
					<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
						<Link href="/en/single-blog">
							<Card
								hoverable
								style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
								cover={
									<Image
										preview={false}
										alt="example"
										src="https://cdn.carbuzz.com/gallery-images/1600/868000/0/868060.jpg"
									/>
								}
							>
								<ParaText size="smallExtra" color="black">
									12 December 2024
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<Meta
									title={
										<ParaText size="extraSmall" color="PrimaryColor">
											Electric Vehicle Batteries
										</ParaText>
									}
									description="Understanding Electric Vehicle Batteries"
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
					<Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
						<Link href="/en/single-blog">
							<Card
								hoverable
								style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
								cover={
									<Image
										preview={false}
										alt="example"
										src="https://evcentral.com.au/wp-content/uploads/2020/05/62kWhBattery18110705-scaled.jpg"
									/>
								}
							>
								<ParaText size="smallExtra" color="black">
									12 December 2024
								</ParaText>
								<div className="gapMarginTopTwo"></div>
								<Meta
									title={
										<ParaText size="extraSmall" color="PrimaryColor">
											Electric Vehicle Batteries
										</ParaText>
									}
									description="Understanding Electric Vehicle Batteries"
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
				</Row>
			</div>
		</>
	);
}
