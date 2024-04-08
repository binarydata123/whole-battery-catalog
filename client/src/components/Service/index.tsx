import React from 'react';
import './style.css';
import { RiChargingPileLine, RiBattery2ChargeLine, RiCarLine, RiMapPinLine } from 'react-icons/ri';
import { Col, Row } from 'antd';
import { PiPlugChargingBold } from 'react-icons/pi';
import { TbCheckupList } from 'react-icons/tb';
import { GiAutoRepair } from 'react-icons/gi';
import About from '../About';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';
export default function Service() {
	return (
		<div>
			<section className="customContainer container">
				<h2>Our EV Car Services</h2>
				<Row align="middle" gutter={[16, 16]} className="row">
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<RiChargingPileLine />
							<Titles level={5} color="black">
								Charging Stations
							</Titles>
							<ParaText size="medium">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.
							</ParaText>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<RiBattery2ChargeLine />
							<Titles level={5} color="black">
								Battery Maintenance
							</Titles>
							<ParaText size="medium">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.
							</ParaText>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<RiCarLine />
							<Titles level={5} color="black">
								EV Repair
							</Titles>
							<ParaText size="medium">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.
							</ParaText>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<PiPlugChargingBold />
							<Titles level={5} color="black">
								Fast Charging
							</Titles>
							<ParaText size="medium">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.
							</ParaText>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<TbCheckupList />
							<Titles level={5} color="black">
								Battery Checkup
							</Titles>
							<ParaText size="medium">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.
							</ParaText>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<div className="service">
							<GiAutoRepair />
							<Titles level={5} color="black">
								Repair Services
							</Titles>
							<ParaText size="medium">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas.
							</ParaText>
						</div>
					</Col>
				</Row>
			</section>
			<div className="gapMarginFourTeenTop"></div>
		</div>
	);
}
