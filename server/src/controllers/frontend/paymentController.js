const stripe = require('stripe')('sk_test_8yTMfGjWta7zVzyhB6S3N2ws');
const Payment = require('../../models/Payment');
// const Users = require('../../models/Users');
const mongoose = require('mongoose');

const paymentController = {
	createCheckoutSession: async (req, res) => {
		const { price, userId, currency } = req.body;
		try {
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items: [
					{
						price_data: {
							currency: currency,
							product_data: {
								name: 'Custom Payment'
							},
							unit_amount: price * 100
						},
						quantity: 1
					}
				],
				mode: 'payment',
				success_url: `${req.headers.origin}/en/login`,
				cancel_url: `${req.headers.origin}/en/payment/failed?payment_id={CHECKOUT_SESSION_ID}`
			});

			const payment = new Payment({
				user: userId,
				amount: price,
				paymentMethod: 'stripe',
				currency: currency,
				transactionId: session.id,
				status: 'success'
			});
			await payment.save();

			//setting hasPaid to true once payment is succeeded
			await mongoose.model('users').updateOne({ _id: userId }, { hasPaid: true });

			res.json({ id: session.id });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Error creating checkout session' });
		}
	}
};

module.exports = paymentController;
