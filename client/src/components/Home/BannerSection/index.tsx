import React from 'react';
import './style.css';
import SecondaryButton from '@/app/commonUl/SecondaryButton';
import { Button } from 'antd';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';
export default function BannerSection() {
	return (
		<>
			<div className="banner">
				<div className="customContainer">
					<div className="content">
						<Titles level={2} color="white">
							Understanding Electric Vehicle Batteries
						</Titles>
						<div className="gapMarginTopTwo"></div>
						<ParaText size="large" color="white">
							Explore the intricacies of electric vehicle batteries, from lithium-ion technology to
							charging methods and environmental impacts. Learn how these batteries are revolutionizing
							transportation and paving the way for a sustainable future.
						</ParaText>
						<div className="gapMarginTopTwo"></div>
						{/* <Button
							style={{
								backgroundImage: '#fff !important',
								height: '60px',
								color: '#000 !important'
							}}
						>
							Book appointment
						</Button> */}
					</div>
				</div>
			</div>
		</>
	);
}
