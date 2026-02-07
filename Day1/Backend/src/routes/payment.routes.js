const express = require('express');
const paymentController = require('../controllers/payment.controllers');

const router = express.Router();

router.post('/create-order', paymentController.createOrder);
router.post('/verify', paymentController.verifyPayment);

module.exports = router;