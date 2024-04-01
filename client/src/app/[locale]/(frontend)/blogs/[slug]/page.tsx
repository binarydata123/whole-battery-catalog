import React from 'react';
import { getSingleBlog } from '@/lib/frontendApi';
import Blog from '@/components/Blog';

import SinglePage from '@/components/Blog_Page_Single';
import { ResolvingMetadata, Metadata } from 'next';

export async function generateMetadata(
	{ params }: { params: { slug: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const blog = await getSingleBlog(params.slug);

	return {
		title: blog.data.metaTitle ? blog.data.metaTitle : `blog | ${process.env.NEXT_APP_NAME}`,
		description: blog.data.metaDescription ? blog.data.metaDescription : `${process.env.NEXT_APP_NAME}`,
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blogs/${params.slug}`
		},
		openGraph: {
			title: blog.data.metaTitle ? blog.data.metaTitle : `blog | ${process.env.NEXT_APP_NAME}`,
			description: blog.data.metaDescription ? blog.data.metaDescription : `${process.env.NEXT_APP_NAME}`,
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blogs/${params.slug}`,
			siteName: `${process.env.NEXT_APP_NAME}`,
			images: [
				{
					url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/innerLogo.png`,
					width: 350,
					height: 50
				}
			],
			type: 'website'
		}
	};
}

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
	const res = await getSingleBlog(params.slug);

	return (
		<>
			<SinglePage blogData={res.data} />
			<Blog />
		</>
	);
};

export default SingleBlog;
