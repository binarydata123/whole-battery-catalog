// import React, { useEffect, useState } from 'react';
import ParaText from '@/app/commonUl/ParaText';
import './style.css';
import Blog_Page from '@/components/Blog_Page/page';

import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: `Blog | ${process.env.NEXT_APP_NAME}`,
		description: `${process.env.NEXT_APP_NAME}`,
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`
		},
		openGraph: {
			title: `Blog | ${process.env.NEXT_APP_NAME}`,
			description: `${process.env.NEXT_APP_NAME}`,
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
			siteName: `${process.env.NEXT_APP_NAME}`,
			images: [
				{
					url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`,
					width: 350,
					height: 50
				}
			],
			type: 'website'
		}
	};
}

export default async function Blogs() {
	return (
		<>
			<div className="topbarSection">
				<ParaText size="large" color="white" className="textUppercase" fontWeightBold={600}>
					Blogs
				</ParaText>
			</div>
			<Blog_Page />
		</>
	);
}
