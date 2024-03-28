const express = require('express');
const router = express.Router();
const paymentController = require('../../controllers/frontend/paymentController');

router.post('/create-checkout-session', paymentController.createCheckoutSession);
router.post('/verify-payment', paymentController.verifyPayment);

module.exports = router;
