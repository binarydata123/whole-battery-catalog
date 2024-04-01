const stripe = require('stripe')('sk_test_8yTMfGjWta7zVzyhB6S3N2ws');
const Payment = require('../../models/Payment');
// const Users = require('../../models/Users');
const mongoose = require('mongoose');

let userID;
let amount;

const paymentController = {
	createCheckoutSession: async (req, res) => {
		const { price, currency, userId } = req.body;

		userID = userId;
		amount = price;
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
				success_url: `${req.headers.origin}/en/payment/success?payment_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/en/payment/failed?payment_id={CHECKOUT_SESSION_ID}`
			});

			res.json({ id: session.id });
		} catch (error) {
			// console.error(error);
			res.status(500).json({ error: 'Error creating checkout session' });
		}
	},

	verifyPayment: async (req, res) => {
		const { id } = req.body;
		const paymentInfo = await stripe.checkout.sessions.retrieve(id);

		if (paymentInfo.payment_status === 'paid') {
			const payment = new Payment({
				user: userID,
				amount: amount,
				paymentMethod: 'stripe',
				currency: paymentInfo.currency,
				transactionId: paymentInfo.id,
				status: 'success'
			});
			await payment.save();

			//setting hasPaid to true once payment is succeeded
			await mongoose.model('users').updateOne({ _id: userID }, { hasPaid: true });

			res.status(200).json({ status: true, message: 'payment successful' });
		}
	}
};

module.exports = paymentController;
