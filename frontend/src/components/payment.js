import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css"; // Import the CSS file
import makePayment from "../api/payment";

const Payment = () => {
  const [fee, setFee] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    const formData = { fee };

    try {
      // if fee is less than 500, throw an error
      if (fee < 500) {
        throw new Error("Fee must be rupee 500 INR");
      }

      await makePayment(formData);
      
      setFee("");
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);
      }, 3000);
      navigate("/dashboard");
      console.log("Payment submitted successfully!");
    } catch (error) {
      console.error("Payment failed:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Make The Payment</h2>
      {paymentSuccess && <p className="success-payment">Payment successful!</p>}
      <form onSubmit={handlePayment} className="payment-form">
        <label className="payment-label">
          Enter Payment Amount:
          <div style={{ marginBottom: "15px" }}>
            Pay rupee 500 INR fee for the class you are registering for.
          </div>
          <input
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            className="payment-input"
            required
            placeholder="Enter amount"
          />
        </label>
        <div className="payment-options">
          <p>Select Payment Method:</p>
          <div className="payment-methods">
            <label className="payment-option">
              <input type="radio" name="paymentMethod" value="card" />
              Credit Card
            </label>
            <label className="payment-option">
              <input type="radio" name="paymentMethod" value="paypal" />
              PayPal
            </label>
            <label className="payment-option">
              <input type="radio" name="paymentMethod" value="bank" />
              Bank Transfer
            </label>
          </div>
        </div>
        <button type="submit" className="payment-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
