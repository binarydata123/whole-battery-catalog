'use client';
import ParaText from '@/app/commonUl/ParaText';
import { Col, Image, Row } from 'antd';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';
import RateStar from '@/app/commonUl/RateStar';
import { CiHeart } from 'react-icons/ci';
export default function page() {
	return (
		<>
			<div className="singleVoice">
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={24} md={24} lg={4} xl={4} xxl={4}>
						<Image preview={false} src="/images/car.jpg" alt="car" height={200} width="100%" />
					</Col>
					<Col xs={24} sm={24} md={24} lg={20} xl={20} xxl={20}>
						<div>
							<ParaText size="medium" color="blueLight" fontWeightBold={600}>
								HP Pavilion Gaming Ryzen 7 Octa Core 4800H
							</ParaText>
							<ParaText size="extraSmall" color="defaultColor" className="dBlock gapPaddingTopOne">
								It is a long established fact that a reader will be distracted by the readable content
								of a page when looking at its layout.
								<br /> The point of using Lorem Ipsum is that it has a more-or-less.
							</ParaText>
							<ParaText size="textGraf" color="black" className="dBlock chlidClasss gapPaddingTopOne">
								PRICE:
								<span>$1000</span>
								MRP:
								<span>$1250</span>
								<span>20% Off</span>
							</ParaText>
							<ParaText size="textGraf" color="defaultColor" className=" dBlock gapPaddingTopOne">
								<span style={{ margin: '0px 8px 0px 0px' }}>
									<FaShoppingCart />
								</span>
								Add To Cart
							</ParaText>
							<div className="gapPaddingTopOne"></div>
							<RateStar
								onRatingChange={function (value: number): void {
									throw new Error('Function not implemented.');
								}}
								value={4}
								disabled={false}
							/>
							<span>(4356)</span>
						</div>
					</Col>
				</Row>
				<div className="heart">
					<CiHeart />
				</div>
			</div>
			<div className="singleVoice">
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={24} md={24} lg={4} xl={4} xxl={4}>
						<Image preview={false} src="/images/car.jpg" alt="car" height={200} width="100%" />
					</Col>
					<Col xs={24} sm={24} md={24} lg={20} xl={20} xxl={20}>
						<div>
							<ParaText size="medium" color="blueLight" fontWeightBold={600}>
								HP Pavilion Gaming Ryzen 7 Octa Core 4800H
							</ParaText>
							<ParaText size="extraSmall" color="defaultColor" className="dBlock gapPaddingTopOne">
								It is a long established fact that a reader will be distracted by the readable content
								of a page when looking at its layout.
								<br /> The point of using Lorem Ipsum is that it has a more-or-less.
							</ParaText>
							<ParaText size="textGraf" color="black" className="dBlock chlidClasss gapPaddingTopOne">
								PRICE:
								<span>$1000</span>
								MRP:
								<span>$1250</span>
								<span>20% Off</span>
							</ParaText>
							<ParaText size="textGraf" color="defaultColor" className=" dBlock gapPaddingTopOne">
								<span style={{ margin: '0px 8px 0px 0px' }}>
									<FaShoppingCart />
								</span>
								Add To Cart
							</ParaText>
							<div className="gapPaddingTopOne"></div>
							<RateStar
								onRatingChange={function (value: number): void {
									throw new Error('Function not implemented.');
								}}
								value={4}
								disabled={false}
							/>
							<span>(4356)</span>
						</div>
					</Col>
				</Row>
				<div className="heart">
					<CiHeart />
				</div>
			</div>
			<div className="singleVoice">
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={24} md={24} lg={4} xl={4} xxl={4}>
						<Image preview={false} src="/images/car.jpg" alt="car" height={200} width="100%" />
					</Col>
					<Col xs={24} sm={24} md={24} lg={20} xl={20} xxl={20}>
						<div>
							<ParaText size="medium" color="blueLight" fontWeightBold={600}>
								HP Pavilion Gaming Ryzen 7 Octa Core 4800H
							</ParaText>
							<ParaText size="extraSmall" color="defaultColor" className="dBlock gapPaddingTopOne">
								It is a long established fact that a reader will be distracted by the readable content
								of a page when looking at its layout.
								<br /> The point of using Lorem Ipsum is that it has a more-or-less.
							</ParaText>
							<ParaText size="textGraf" color="black" className="dBlock chlidClasss gapPaddingTopOne">
								PRICE:
								<span>$1000</span>
								MRP:
								<span>$1250</span>
								<span>20% Off</span>
							</ParaText>
							<ParaText size="textGraf" color="defaultColor" className=" dBlock gapPaddingTopOne">
								<span style={{ margin: '0px 8px 0px 0px' }}>
									<FaShoppingCart />
								</span>
								Add To Cart
							</ParaText>
							<div className="gapPaddingTopOne"></div>
							<RateStar
								onRatingChange={function (value: number): void {
									throw new Error('Function not implemented.');
								}}
								value={4}
								disabled={false}
							/>
							<span>(4356)</span>
						</div>
					</Col>
				</Row>
				<div className="heart">
					<CiHeart />
				</div>
			</div>
		</>
	);
}
