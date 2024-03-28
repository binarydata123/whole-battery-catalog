import ErrorHandler from '@/lib/ErrorHandler';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_FQu4ActGupRmMrkmBpwU26js');

const handlePayment = async (price: any, currency: string, userId: string) => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/create-checkout-session`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ price: price, currency, userId })
		});

		const session = await response.json();

		const stripe = await stripePromise;
		const result = await stripe?.redirectToCheckout({
			sessionId: session.id
		});

		if (result?.error) {
			console.error('Error:', result.error);
			ErrorHandler.showNotification('Payment failed');
			// message.error('Payment failed');
		}
	} catch (error) {
		console.error('Error:', error);
		ErrorHandler.showNotification('Payment failed');
		// message.error('Payment failed');
	}
	// finally {
	// 	setLoading(false);
	// }
};

export default handlePayment;
