import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { styled as btn } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../redux/order/orderSlice";
import Title from "../utils/reUseableComponents/Title";

const CartOrderSummary = () => {
  const [subtotal, setSubTotal] = useState(0);

  const navigate = useNavigate();

  const orderdItems = useSelector(getAllOrders);

  useEffect(() => {
    const calcSubtotal =
      orderdItems &&
      orderdItems.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);

    setSubTotal(calcSubtotal);
  }, [orderdItems]);

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
    navigate("/order");
  };

  return (
    <Container>
      <Title
        variant="h2"
        text={"Cart Summary"}
        style={{ marginBottom: "1.5rem" }}
      />
      <div className="content">
        <dl className="sub_total">
          <dt>Product price</dt>
          <dd> ${subtotal}</dd>
        </dl>

        <AddToCart
          onClick={() => orderdItems.length > 0 && orderHandler()}
          variant="contained"
        >
          BUY ({orderdItems.length})
        </AddToCart>
      </div>
    </Container>
  );
};

export default CartOrderSummary;

const Container = styled.div`
  min-width: 20rem;

  .content {
    background: #fff;
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
