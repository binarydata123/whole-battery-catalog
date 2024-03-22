import ParaText from '@/app/commonUl/ParaText';
import About from '@/components/About';
import Service from '@/components/Service';
import React from 'react';

export default function page() {
	return (
		<>
			<div className="topbarSection">
				<ParaText size="large" color="white" className="textUppercase" fontWeightBold={600}>
					About
				</ParaText>
			</div>
			<About />
			<Service />
		</>
	);
}
