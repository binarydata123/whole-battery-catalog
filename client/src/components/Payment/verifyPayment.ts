import ErrorHandler from '@/lib/ErrorHandler';

const verifyPayment = async (sessionId: string) => {
	try {
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/verify-payment`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: sessionId })
		});
	} catch (error: any) {
		console.error(error);
		ErrorHandler.showNotification(error?.message);
	}
};

export default verifyPayment;
