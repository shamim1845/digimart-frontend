import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TimeAgo from "react-timeago";
import { currencyConstants } from "../../utils/constants/currencyConstants";
import Title from "../../utils/reUseableComponents/Title";
import Button from "../../utils/reUseableComponents/Buttons";
import Modal from "../../utils/modal/Modal";
import ReviewCard from "./ReviewCard";

const OrderCard = ({ order, showDetailsButton = true, style }) => {
  const [showModal, setShowModal] = useState(false);

  // find selected currency
  const selectedCurrency = currencyConstants.find(
    (currCurrency) => currCurrency.name === order?.paymentInfo?.currency
  );

  return (
    <OrderContainer style={{ ...style }}>
      <OrderHead>
        <div className="order_status">{order?.orderStatus}</div>
        <TimeAgo className="timeago" date={order?.createdAt} />
      </OrderHead>
      <br />
      {order?.orderItems?.map((product) => {
        return (
          <ProductContainer key={product?._id}>
            <CartProducts>
              <div className="img_box">
                <Link to={`/products/${product?.productId}`}>
                  <img src={product?.image} alt={product?.name} />
                </Link>
              </div>

              <div className="dtails_box">
                <div className="title">
                  <Link to={`/products/${product?._id}`}>
                    <Title
                      variant="h3"
                      text={product?.name}
                      style={{ fontWeight: "600" }}
                    />
                  </Link>
                </div>

                <div className="price">
                  <span>{selectedCurrency.icon}</span>
                  <span> </span>
                  <span>{product?.price}</span>
                </div>

                <div className="quantity">
                  <span> Quantity :</span>
                  <span> {product?.quantity}</span>
                </div>
              </div>
            </CartProducts>
          </ProductContainer>
        );
      })}
      <br />
      {showDetailsButton && (
        <OrderBottom>
          <Link to={`/account/orderDetails/${order?._id}`}>View details</Link>
        </OrderBottom>
      )}

      {!showDetailsButton && (
        <Button text={"Create review"} onClick={() => setShowModal(true)} />
      )}

      {showModal && (
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <ReviewCard
            products={order?.orderItems}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </OrderContainer>
  );
};

export default OrderCard;

const OrderContainer = styled.div`
  box-shadow: var(--shadow-3);
  border-radius: 0.5rem;
  padding: 2rem;
`;
const OrderHead = styled.div`
  display: flex;
  justify-content: space-between;

  .order_status {
    border: 1px solid tomato;
    border-radius: 0.5rem;
    padding: 0.7rem 2rem;
    text-transform: capitalize;
    background-color: tomato;
    color: var(--text-primary);
  }
  .timeago {
    color: tomato;
    font-size: 1.2rem;
  }
`;

const ProductContainer = styled.div`
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
`;

const CartProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  .img_box {
    img {
      width: 12rem;
      height: 12rem;
      padding: 1rem;
      transition: all 0.3s ease-in-out;
      border: 1px solid transparent;

      &:hover {
        border-color: tomato;
      }
    }
  }
  .dtails_box {
    color: var(--text-primary);
    .title {
      a {
        font-size: 1.4rem;
      }
    }
    .price {
      margin: 1rem 0;
      span {
        font-weight: 600;
        font-size: 1.4rem;
      }
    }
    .quantity {
      font-weight: 500;
      line-height: 18px;
      font-size: 1.3rem;
    }
  }
`;

const OrderBottom = styled.div`
  margin-bottom: 1rem;
  a {
    box-shadow: var(--shadow-3);
    border-radius: 2rem;
    padding: 0.7rem 2rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: tomato;
    }
  }
`;
