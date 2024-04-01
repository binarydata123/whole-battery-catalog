'use client';
import React, { useEffect } from 'react';
import { Result, Button, Card, Image } from 'antd';
import { useRouter } from 'next/navigation';

export default function FailedPage() {
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push('/en/login');
		}, 3000);
		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			style={{
				maxWidth: '500px',
				margin: 'auto',
				paddingTop: '200px',
				paddingBottom: '10px'
			}}
		>
			<Card hoverable>
				<Result
					status="success"
					// icon={<CheckCircleOutlined style={{ fontSize: '48px', color: '#1890ff' }} />} // Changed icon to CreditCardOutlined
					icon={
						<>
							<Image src="/images/redCross.gif" alt="payment successful" width={75}></Image>
						</>
					}
					title="Payment failed"
					subTitle="failed to subscribe, please head to the login page and try again"
					extra={
						<Button type="primary" size="large" onClick={() => router.push('/en/login')}>
							Go to Login
						</Button>
					}
				/>
			</Card>
		</div>
	);
}
