import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import { Button, Image } from 'antd';
import Link from 'next/link';
import React from 'react';
export default function Error() {
	return (
		<>
			<section style={{ padding: '60px' }}>
				<div className="customContainer textCenter">
					<div className="gapMarginFourTeenTop"></div>
					<Image src="/images/error.png" alt="error " preview={false} />
					<Titles className="textCenter" level={3} color="PrimaryColor">
						Unauthorized
					</Titles>
					<ParaText size="medium">You are not authorized for this page</ParaText>
					<div className="gapMarginFourTeenTop"></div>
					<Link href="/">
						<Button style={{ height: '45px' }}>Back To Home</Button>
					</Link>
				</div>
			</section>
		</>
	);
}
