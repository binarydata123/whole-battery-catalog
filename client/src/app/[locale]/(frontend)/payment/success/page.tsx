'use client';
import React, { useEffect } from 'react';
import { Result, Button, Image, Card } from 'antd';
import { HomeOutlined, CreditCardOutlined, CheckCircleOutlined } from '@ant-design/icons'; // Added CreditCardOutlined
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import verifyPayment from '@/components/Payment/verifyPayment';

export default function SuccessPage() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const paymentId: any = searchParams.get('payment_id');

	useEffect(() => {
		verifyPayment(paymentId);
		// const timer = setTimeout(async () => {
		// router.push('/en/login');
		// }, 2000);
		// return () => clearTimeout(timer);
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
							<Image src="/images/check.gif" alt="payment successful" width={75}></Image>
						</>
					}
					title="Payment Successful"
					subTitle="Subscription is active now, please head to the login page"
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
