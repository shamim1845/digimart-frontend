import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSelector } from "react-redux";
import { getPaymentInfo } from "../../redux/order/orderSlice";
import axios from "axios";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const StripePayment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const paymentInfo = useSelector(getPaymentInfo);

  useEffect(() => {
    axios.get("/api/v1/stripeappikey").then((res) => {
      setStripePromise(loadStripe(res.data.stripeApiKey));
    });
  }, []);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post(`/api/v1/create-payment-intent`, {
        amount: paymentInfo.totalPayAmount * 100,
      })

      .then((res) => res.data)
      .then((data) => setClientSecret(data.client_secret));
  }, [paymentInfo.totalPayAmount]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <StripeContainer>
      {stripePromise && clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </StripeContainer>
  );
};

export default StripePayment;

const StripeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
