import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../utils/reUseableComponents/Title";

const OrderSucess = () => {
  return (
    <OrderSucessContainer>
      <CheckMark>
        <i className="bi bi-check-circle-fill"></i>
      </CheckMark>

      <Message>
        <Title
          text={"Your order has been received"}
          style={{ marginBottom: "1rem" }}
        />
        <p>Thank you for shopping with us</p>
      </Message>

      <Button>
        <Link to={"/account/myorder"}>
          <button>
            <span> View order details</span>
            <i className="bi bi-arrow-right"></i>
          </button>
        </Link>
      </Button>
    </OrderSucessContainer>
  );
};

export default OrderSucess;

const OrderSucessContainer = styled.div`
  max-width: 1440px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CheckMark = styled.div`
  margin-bottom: 1rem;
  i {
    font-size: 6rem;
    color: #4ed18f;
  }
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;
const Button = styled.div`
  margin-top: 5rem;

  button {
    border: 1px solid tomato;
    border-radius: 5rem;
    padding: 1rem 5rem;
    font-size: 1.4rem;
    color: tomato;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: transparent;

    i {
      padding-left: 2rem;
      font-size: 1.7rem;
    }
    &:hover {
      color: var(--text-primary);
      border: 1px solid var(--text-primary);
    }
  }
`;
