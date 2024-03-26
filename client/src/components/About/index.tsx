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
								How long does an EV battery last?
							</Titles>
							<ParaText size="medium" color="blueLight">
								The lifespan of an EV battery depends on various factors, including usage patterns,
								charging habits, and environmental conditions. On average, most EV batteries are
								designed to last between 8 to 10 years or around 100,000 to 200,000 miles. However,
								newer EV models and advancements in battery technology are continuously improving these
								figures.
							</ParaText>
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
