'use client';
import React from 'react';
import './style.css';
import { Button, Col, Row, Image } from 'antd';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';
export default function About() {
	return (
		<>
			<section className="aboutSection">
				<div className="customContainer">
					<Titles className="textCenter" level={3} color="PrimaryColor">
						👋 About Us
					</Titles>

					<Row align="middle" gutter={[24, 24]}>
						<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
							<Titles level={3} color="PrimaryColor">
								Numquam porro quod iste
							</Titles>
							<ParaText size="medium" color="blueLight">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam porro quod iste,
								reprehenderit consequuntur aliquam sunt perferendis obcaecati ex rerum. Lorem ipsum
								dolor sit, amet consectetur adipisicing elit. Numquam porro quod iste, reprehenderit
								consequuntur aliquam sunt perferendis obcaecati ex rerum.
							</ParaText>
							<div className="gapMarginTopTwo"></div>
							<Button
								style={{
									backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%) !important',
									height: '40px',
									color: '#fff !important'
								}}
							>
								See More
							</Button>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="textCenter">
							<Image
								alt=""
								preview={false}
								src="https://media.istockphoto.com/id/1311631292/vector/electric-car-chassis-with-energy-battery-cells-pack-modular-platform-and-recycling-symbol.jpg?s=612x612&w=0&k=20&c=O_BQFsBo63eOv0pfymvuBydZDQS1knJbnBhl40OEwbg="
							/>
						</Col>
					</Row>
				</div>
			</section>
		</>
	);
}
