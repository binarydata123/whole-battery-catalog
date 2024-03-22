import ParaText from '@/app/commonUl/ParaText';
import About from '@/components/About';
import Service from '@/components/Service';
import React from 'react';

export default function page() {
	return (
		<div>
			<div className="topbarSection">
				<ParaText size="large" color="white" className="textUppercase" fontWeightBold={600}>
					Service
				</ParaText>
			</div>
			<Service />
			<About />
		</div>
	);
}
