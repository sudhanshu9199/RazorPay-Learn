import axios from "axios";
import styles from '../page/Product/productCard.module.scss'

function PaymentBtn() {
  const handlePayment = async () => {
    try {
      // Step 1: Create order on backend
      const { data: order } = await axios.post('http://localhost:3000/api/payments/create-order');

      // Step 2: Razorpay options
      const options = {
        key: "rzp_test_SCv0vQ45mNemqj", // from .env (frontend can use only key_id)
        amount: order.amount,
        currency: order.currency,
        name: "My Company",
        description: "Test Transaction",
        order_id: order.id,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
          try {
            await axios.post("http://localhost:3000/api/payments/verify", {
              razorpayOrderId: razorpay_order_id,
              razorpayPaymentId: razorpay_payment_id,
              signature: razorpay_signature,
            });
            alert("Payment successful!");
          } catch (err) {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#a107b6"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handlePayment} className={styles['buy-btn']} >
      Pay Now
    </button>
  );
}

export default PaymentBtn;