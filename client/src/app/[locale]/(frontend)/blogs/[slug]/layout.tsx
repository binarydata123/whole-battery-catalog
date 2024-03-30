import React from 'react';
import Head from 'next/head';

interface LayoutProps {
	metaTitle: string;
	metaDescription: string;
	ogImage?: string;
	ogUrl?: string;
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ metaTitle, metaDescription, ogImage, ogUrl, children }) => {
	return (
		<div>
			<Head>
				<title>{metaTitle}</title>
				<meta name="description" content={metaDescription} />
				{ogImage && <meta property="og:image" content={ogImage} />}
				{ogUrl && <meta property="og:url" content={ogUrl} />}
			</Head>
			{children}
		</div>
	);
};

export default Layout;
