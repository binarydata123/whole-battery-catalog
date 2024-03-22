import React from 'react';
import './style.css';
import { RiChargingPileLine, RiBattery2ChargeLine, RiCarLine, RiMapPinLine } from 'react-icons/ri';
import { Col, Row } from 'antd';
import { PiPlugChargingBold } from 'react-icons/pi';
import { TbCheckupList } from 'react-icons/tb';
import { GiAutoRepair } from 'react-icons/gi';
import About from '../About';
export default function Service() {
	return (
		<div>
			<section className="customContainer container">
				<h2>Our EV Car Services</h2>
				<Row align="middle" gutter={[16, 16]} className="row">
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<RiChargingPileLine />
							<h3>Charging Stations</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.</p>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<RiBattery2ChargeLine />
							<h3>Battery Maintenance</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.</p>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<RiCarLine />
							<h3>EV Repair</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.</p>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<PiPlugChargingBold />
							<h3>Fast Charging</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.</p>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<TbCheckupList />
							<h3>Battery Checkup</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.</p>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<GiAutoRepair />
							<h3>Repair Services</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.</p>
						</div>
					</Col>
				</Row>
			</section>
			<div className="gapMarginFourTeenTop"></div>
		</div>
	);
}
