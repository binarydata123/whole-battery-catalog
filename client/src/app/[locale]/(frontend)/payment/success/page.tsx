'use client';
import React, { useEffect } from 'react';
import { Result, Button } from 'antd';
import { HomeOutlined, CreditCardOutlined, CheckCircleOutlined } from '@ant-design/icons'; // Added CreditCardOutlined
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import verifyPayment from '@/components/Payment/verifyPayment';

export default function SuccessPage() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const paymentId: any = searchParams.get('payment_id');

	useEffect(() => {
		// const timer = setTimeout(async () => {
		verifyPayment(paymentId);
		// router.push('/en/login');
		// }, 2000);
		// return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div style={{ maxWidth: '300px', margin: 'auto', paddingTop: '300px' }}>
			<Result
				icon={<CheckCircleOutlined style={{ fontSize: '48px', color: '#1890ff' }} />} // Changed icon to CreditCardOutlined
				title="Payment Successful"
				extra={
					<Button type="primary" onClick={() => router.push('/en/login')}>
						Go to Login
					</Button>
				}
			/>
		</div>
	);
}
