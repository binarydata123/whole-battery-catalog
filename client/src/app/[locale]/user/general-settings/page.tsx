'use client';
import React from 'react';
import './style.css';
import Titles from '@/app/commonUl/Titles';
import TabsSection from './TabsSection';

export default function page() {
	return (
		<>
			<div>
				<div className="generalSettings">
					<Titles level={5} color="black">
						Settings
					</Titles>
					<div className="gapMarginTopTwo">
						<TabsSection />
					</div>
				</div>
			</div>
		</>
	);
}
