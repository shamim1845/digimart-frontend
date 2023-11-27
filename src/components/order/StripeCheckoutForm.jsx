import React, { useState } from "react";
import styled from "styled-components";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import useCreateNewOrder from "../utils/customHooks/useCreateNewOrder";

export default function StripeCheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { createNewOrder } = useCreateNewOrder({ setIsLoading });

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        // return_url: "http://localhost:3000/order/sucess",
      },
      redirect: "if_required",
    });

    // check error
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }

    // set message
    if (paymentIntent) {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successfull, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    }

    // Create an order
    if (!error && paymentIntent && paymentIntent.status === "succeeded") {
      createNewOrder({
        paymentProvider: "stripe",
        paymentId: paymentIntent.id,
        paymentStatus: paymentIntent.status,
      });
    }
  };

  // =>
  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <CheckoutFormContainer>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay Now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </CheckoutFormContainer>
  );
}

const CheckoutFormContainer = styled.div`
  form {
    width: 30vw;
    min-width: 500px;
    align-self: center;
    box-shadow: var(--shadow-3);
    border-radius: 7px;
    padding: 40px;

    #payment-element {
      margin-bottom: 24px;
    }
    button {
      background: tomato;
      font-family: Arial, sans-serif;
      color: #ffffff;
      border-radius: 4px;
      border: 0;
      padding: 12px 16px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      display: block;
      transition: all 0.2s ease;
      box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
      width: 100%;

      &:hover {
        filter: contrast(115%);
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }

      .spinner,
      .spinner:before,
      .spinner:after {
        border-radius: 50%;
      }

      .spinner {
        color: #ffffff;
        font-size: 22px;
        text-indent: -99999px;
        margin: 0px auto;
        position: relative;
        width: 20px;
        height: 20px;
        box-shadow: inset 0 0 0 2px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
      }

      .spinner:before,
      .spinner:after {
        position: absolute;
        content: "";
      }

      .spinner:before {
        width: 10.4px;
        height: 20.4px;
        background: tomato;
        border-radius: 20.4px 0 0 20.4px;
        top: -0.2px;
        left: -0.2px;
        -webkit-transform-origin: 10.4px 10.2px;
        transform-origin: 10.4px 10.2px;
        -webkit-animation: loading 2s infinite ease 1.5s;
        animation: loading 2s infinite ease 1.5s;
      }

      .spinner:after {
        width: 10.4px;
        height: 10.2px;
        background: tomato;
        border-radius: 0 10.2px 10.2px 0;
        top: -0.1px;
        left: 10.2px;
        -webkit-transform-origin: 0px 10.2px;
        transform-origin: 0px 10.2px;
        -webkit-animation: loading 2s infinite ease;
        animation: loading 2s infinite ease;
      }

      @keyframes loading {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    }

    #payment-message {
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 20px;
      padding-top: 20px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 100%;
      min-width: initial;
    }
  }
`;
