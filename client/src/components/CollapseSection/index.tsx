'use client';
import React from 'react';
import type { CollapseProps } from 'antd';
import { Col, Collapse, Row } from 'antd';
import Titles from '@/app/commonUl/Titles';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';
import ParaText from '@/app/commonUl/ParaText';
import './style.css';
export default function CollapseSection() {
	const text = `The lifespan of an EV battery varies depending on the manufacturer and usage, but most EV batteries are designed to last 8-10 years or more.
`;
	const text2 = `It is recommended to charge your EV battery whenever it falls below 20-30% to maximize its lifespan. However, frequent partial charges are better than full discharges followed by full recharges.
`;
	const text3 = `Charging your EV in the rain is generally safe as long as you use a properly installed and maintained charging station. However, it's always a good idea to follow safety precautions and ensure the charging equipment is dry before use.
`;
	const text4 = `The charging time for an EV depends on the battery capacity, the charging station's power output, and the current battery level. On average, it can take anywhere from 30 minutes to several hours to fully charge an EV.
`;
	const text5 = `Most modern EVs are equipped with systems that prevent overcharging, so it's unlikely to overcharge your EV battery under normal circumstances. However, it's still a good idea to follow manufacturer recommendations and avoid leaving your EV plugged in unnecessarily.
`;

	const items: CollapseProps['items'] = [
		{
			key: '1',
			label: <strong>What is the lifespan of an EV battery?</strong>,
			children: <p>{text}</p>
		},
		{
			key: '2',
			label: <strong>How often should I charge my EV battery?</strong>,
			children: <p>{text2}</p>
		},
		{
			key: '3',
			label: <strong>Can I charge my EV in the rain?</strong>,
			children: <p>{text3}</p>
		},
		{
			key: '4',
			label: <strong>How long does it take to charge an EV?</strong>,
			children: <p>{text4}</p>
		},
		{
			key: '5',
			label: <strong>Can I overcharge my EV battery?</strong>,
			children: <p>{text5}</p>
		}
	];
	const onChange = (key: string | string[]) => {
		console.log(key);
	};
	return (
		<>
			<section className="collspanSection">
				<div className="customContainer">
					<div>
						<Row gutter={[16, 16]} align="middle">
							<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
								<div className="collspanContent">
									<Titles level={2} color="PrimaryColor">
										FAQs
									</Titles>
									<ParaText size="medium" color="PrimaryColor">
										Most modern EVs are equipped with systems that prevent overcharging, so its
										unlikely to overcharge your EV battery under normal circumstances. However, its
										still a good idea to follow manufacturer recommendations and avoid leaving your
										EV plugged in unnecessarily
									</ParaText>
								</div>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
								<Collapse
									items={items}
									defaultActiveKey={['1']}
									onChange={onChange}
									expandIconPosition="end"
									expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
								/>
							</Col>
						</Row>
					</div>
				</div>
			</section>
		</>
	);
}
