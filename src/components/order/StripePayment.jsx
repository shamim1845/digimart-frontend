import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
import axios from "axios";
import useCalculatePrice from "../utils/customHooks/useCalculatePrice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const StripePayment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const { total: totalAmount } = useCalculatePrice();

  // fetch stripe api key
  useEffect(() => {
    axios.get("/api/v1/stripeappikey").then((res) => {
      setStripePromise(loadStripe(res.data.stripeApiKey));
    });
  }, []);

  // Create PaymentIntent as soon as the page loads
  useEffect(() => {
    if (totalAmount) {
      axios
        .post(`/api/v1/create-payment-intent`, {
          amount: totalAmount * 100,
        })
        .then((res) => res.data)
        .then((data) => setClientSecret(data.client_secret));
    }
  }, [totalAmount]);

  // Stripe theme customization
  const appearance = {
    theme: "flat",
    variables: {
      fontFamily: ' "Poppins", sans-serif',
      fontLineHeight: "1.5",
      borderRadius: "5px",
      colorBackground: "transparent",
      colorPrimaryText: "#262626",
    },
    rules: {
      ".Block": {
        backgroundColor: "var(--colorBackground)",
        boxShadow: "none",
        padding: "12px",
      },
      ".Input": {
        padding: "12px",
        border: "none",
        outline: "none",
      },
      ".Input:disabled, .Input--invalid:disabled": {
        color: "lightgray",
      },
      ".Tab": {
        padding: "10px 12px 8px 12px",
        border: "none",
      },
      ".Tab:hover": {
        border: "none",
        outline: "none",
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
      },
      ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
        border: "none",
        outline: "none",
        backgroundColor: "pink",
        boxShadow:
          "0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
      },
      ".Label": {
        fontWeight: "500",
      },
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <StripeContainer>
      {stripePromise && clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm clientSecret={clientSecret} />
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
  padding-top: 2rem;
`;
