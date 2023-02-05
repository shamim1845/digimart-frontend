import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import {
  getAllOrders,
  getShippingInformation,
} from "../../features/order/orderSlice";
import axios from "axios";

export default function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const shippingInfo = useSelector(getShippingInformation);
  const orderdItem = useSelector(getAllOrders);

  // Create a Order After complete the payment
  const createNewOrder = (paymentIntent) => {
    let orderItems = [];
    let itemsPrice = 0;
    let taxPrice;
    let shippingPrice;

    orderdItem.map((item) => {
      orderItems.push({
        productId: item.product._id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.images[0].url,
      });

      itemsPrice += item.product.price;
      return null;
    });
    taxPrice = Math.round(Number(itemsPrice * (7 / 100)));
    shippingPrice = Math.round(Number(itemsPrice * (5 / 100)));
    const newOrder = {
      shippingInfo,
      orderItems,
      paymentInfo: {
        id: paymentIntent.id,
        status: paymentIntent.status,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice: itemsPrice + taxPrice + shippingPrice,
      },
    };

    axios.post("/api/v1/order/new", newOrder).then((res) => {
      setTimeout(() => {
        navigate("/order/sucess");
      }, 5000);
    });
  };

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
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          // alert("payment complete ");

          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage(error.message);
      }
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      createNewOrder(paymentIntent);
    }

    setIsLoading(false);
  };

  return (
    <CheckoutFormContainer>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
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
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;

    #payment-element {
      margin-bottom: 24px;
    }
    button {
      background: #5469d4;
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
        background: #5469d4;
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
        background: #5469d4;
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
      color: rgb(105, 115, 134);
      font-size: 16px;
      line-height: 20px;
      padding-top: 12px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
      min-width: initial;
    }
  }
`;
