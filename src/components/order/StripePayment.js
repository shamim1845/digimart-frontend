import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useSelector } from "react-redux";
import { getTotalPayAmount } from "../../features/order/orderSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51KWHPxKtPRz3pfcC3mSsCK1Egl93IBQL9dTfz1p20NXtwQvy9uwUMSlIjslmqNGEGqjBRfgdkz5RKtkcvNDabU3o0008jrd6ig");

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState("");

  const totalAmount = useSelector(getTotalPayAmount);
  // console.log(totalAmount);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/v1/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount * 100}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secret));
  }, [totalAmount]);
  // console.log(clientSecret);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <StripeContainer>
 
       {
         clientSecret &&  <Elements options={options} stripe={stripePromise}>
         <CheckoutForm />
       </Elements>
       }
   
    </StripeContainer>
  );
}

export default StripePayment;

const StripeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`