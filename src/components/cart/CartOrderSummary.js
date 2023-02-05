import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { styled as btn } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useSelector, } from "react-redux";
import {useNavigate} from "react-router-dom"
import { getAllOrders } from "../../features/order/orderSlice";


const CartOrderSummary = () => {
  const [subtotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0)

  const navigate = useNavigate();


  const orderdItems = useSelector(getAllOrders);
  console.log(orderdItems);


  useEffect(() => {
    const calcSubtotal = orderdItems && orderdItems.reduce( (acc, item) => {
      return acc + item.product.price * item.quantity
    }, 0)
    // const calcShipping = orderdItems && orderdItems.reduce( (acc, item) => {
      //   return acc + item.product.price * item.quantity
      //   }, 0)
      
      
      
      setSubTotal(calcSubtotal)
    setShipping(50)
  setTotal(calcSubtotal + shipping)
}, [orderdItems, shipping])


  const AddToCart = btn(Button)({
    backgroundColor: "tomato",
    width: "100%",
    color: "#fff",
    fontSize: "1.6rem",
    padding: "1rem 3rem",
    margin: "2rem 0 1rem",
    "&:hover": {
      backgroundColor: "#A9333A",
    },
  });

  const orderHandler = () => {
    navigate("/order")
  }

  return (
    <Container>
      <div className="content">
        <h2>Order Summary</h2>

        <dl className="sub_total">
          <dt>Product price</dt>
          <dd>USD ${subtotal}</dd>
        </dl>

        <dl className="shipping">
          <dt>Shipping cost</dt>
          <dd>USD ${shipping}</dd>
        </dl>
        <div className="hr"></div>

        <dl className="total">
          <dt>Total</dt>
          <dd>USD ${total}</dd>
        </dl>
        <AddToCart onClick={() => orderdItems.length>0 && orderHandler()} variant="contained">BUY ({orderdItems.length})</AddToCart>
      </div>
    </Container>
  );
};

export default CartOrderSummary;

const Container = styled.div`
  width: 25%;
  max-width: 35rem;
    @media screen and (max-width: 768px) {
width: 100%;
}
  .content {
    background: #fff;
    padding: 1rem 2rem;
    margin: 1rem 0 1rem 1rem;
    border-radius: 0.5rem;

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
`;
