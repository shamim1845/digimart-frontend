import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders, paymentInfo } from "../../features/order/orderSlice";
import { rate } from "../../App";

const OrderSummary = () => {
  const [productPrice, setProductPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const orderdItems = useSelector(getAllOrders);

  useEffect(() => {
    const calcProductPrice =
      orderdItems &&
      orderdItems?.reduce((acc, item) => {
        return acc + (item.product.price * item.quantity);
      }, 0);
    const calcShippingCost = Math.round(calcProductPrice * (rate.shipping / 100));
    const calcTax = Math.round(calcProductPrice * (rate.tax / 100));

    setProductPrice(calcProductPrice);
    setShippingCost(calcShippingCost);
    setTax(calcTax);
    setTotal(calcProductPrice + calcShippingCost + calcTax);
    dispatch(
      paymentInfo({
        products_price: calcProductPrice,
        shipping_cost: calcShippingCost,
        tax: calcTax,
        totalPayAmount: calcProductPrice + calcShippingCost + tax,
      })
    );
  }, [orderdItems, shippingCost, dispatch, tax]);

  return (
    <Container>
      <div className="content">
        <h2>Order Summary</h2>

        <dl className="sub_total">
          <dt>Product price</dt>
          <dd> ${productPrice}</dd>
        </dl>

        <dl className="shipping">
          <dt>Shipping cost</dt>
          <dd> ${shippingCost}</dd>
        </dl>
        <dl className="shipping">
          <dt>Tax</dt>
          <dd> ${tax}</dd>
        </dl>
        <div className="hr"></div>

        <dl className="total">
          <dt>Total</dt>
          <dd> ${total}</dd>
        </dl>
      </div>
    </Container>
  );
};

export default OrderSummary;

const Container = styled.div`
  width: 25%;
  max-width: 35rem;
  .content {
    background: #fff;
    padding: 1rem 2rem;
    margin: 1rem 0 1rem 1rem;
    border-radius: 0.5rem;

    @media screen and (max-width: 768px) {
      margin: 0;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 2.4rem;
    }
    dd,
    dt {
      font-size: 1.4rem;
      color: #000;
      font-weight: 400;
    }
    .sub_total {
      display: flex;
      justify-content: space-between;
    }
    .shipping {
      display: flex;
      justify-content: space-between;
    }
    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;

      dd,
      dt {
        font-size: 1.4rem;
        color: #000;
        font-weight: 600;
      }
      dd {
        font-size: 2rem;
      }
    }
    .hr {
      border: 1px solid #f2f2f2;
      margin: 2rem 0;
    }
    .buy_now {
      width: 100%;
      border: none;
      background: tomato;
      padding: 1rem 0;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      color: #fff;
      cursor: pointer;
      margin: 2rem 0 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0.5rem;
  }
`;
