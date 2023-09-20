import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addOrderItem,
  getAllOrders,
  getShippingInformation,
  removeOrderItem,
  shippingInformation,
} from "../../redux/order/orderSlice";
import ShippingInfo from "./ShippingInfo";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DefaultShippingAddress from "./DefaultShippingAddress";
import StripePayment from "./StripePayment";
import { addCartItem } from "../../redux/user/userSlice";

const OrderDetails = () => {
  const [isShipping, setIsShipping] = useState(false);
  const [isPayment, setIsPayment] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const shippingInf = JSON.parse(localStorage.getItem("shippingInfo"));
    dispatch(shippingInformation({ shippingInfo: shippingInf }));
  }, [dispatch]);

  const { authenticated } = useSelector((state) => state.user);

  const orderdItem = useSelector(getAllOrders);
  const shippingInfo = useSelector(getShippingInformation);
  // console.log(orderdItem);

  const productDecrement = (item) => {
    dispatch(
      addCartItem({ product: item.product, quantity: item.quantity - 1 })
    );

    orderdItem &&
      orderdItem.map((check) => {
        if (check.product._id === item.product._id) {
          let Item = { product: item.product, quantity: item.quantity - 1 };
          dispatch(addOrderItem({ Item }));
        }
        return null;
      });
  };

  const productIncrement = (item) => {
    dispatch(
      addCartItem({ product: item.product, quantity: item.quantity + 1 })
    );

    orderdItem &&
      orderdItem.map((check) => {
        if (check.product._id === item.product._id) {
          let Item = { product: item.product, quantity: item.quantity + 1 };
          dispatch(addOrderItem({ Item }));
        }
        return null;
      });
  };
  const deleteProduct = (Item) => {
    dispatch(removeOrderItem({ Item }));
  };

  const paymentHandler = () => {
    if (!authenticated) {
      navigate("/login");
    } else {
      shippingInfo && orderdItem.length !== 0 && setIsPayment(true);
    }
  };

  return (
    <Container>
      <Wraper>
        <ShippingContainer>
          <h4>Shipping Information</h4>
          <p onClick={() => setIsShipping(!isShipping)}>+ Add new address</p>

          {isShipping ? (
            <ShippingInfo setIsShipping={setIsShipping} />
          ) : (
            <DefaultShippingAddress />
          )}
        </ShippingContainer>
      </Wraper>

      <Wraper>
        <PaymentContainer>
          <h4>Choose a Payment Methods</h4>
          <img
            style={isPayment ? { border: "2px solid red" } : {}}
            src="./images/payment/stripe.png"
            alt="Stripe"
            onClick={paymentHandler}
          />
        </PaymentContainer>
        {isPayment && authenticated === true && <StripePayment />}
      </Wraper>

      <Wraper>
        <CartTitle>
          <h2>Order Review({orderdItem.length})</h2>
        </CartTitle>

        {orderdItem &&
          orderdItem.map((Item) => {
            return (
              <CartProducts key={Item.product._id}>
                <div className="left_box">
                  <div className="img_box">
                    <img src={Item.product.images[0].url} alt="" />
                  </div>

                  <div className="dtails_box">
                    <div className="title">
                      <Link to={`/products/${Item.product._id}`}>
                        {Item.product.name}
                      </Link>
                    </div>

                    <div className="price">
                      <span>BDT ৳{Item.product.price}</span>
                    </div>
                    <div className="shiping">
                      <span>Quantity: {Item.quantity}</span>
                    </div>
                  </div>
                </div>

                {!isPayment && (
                  <div className="cart_controller">
                    <div className="quantity">
                      <div className="set_quantity">
                        <button>
                          <i
                            className="bi bi-dash"
                            onClick={() =>
                              Item.quantity > 1 && productDecrement(Item)
                            }
                          ></i>
                        </button>
                        <p>{Item.quantity}</p>
                        <button>
                          <i
                            className="bi bi-plus"
                            onClick={() =>
                              Item.quantity < 10 && productIncrement(Item)
                            }
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="notify">
                      {Item.quantity === 10 && <span>Maximum 10 Products</span>}
                    </div>

                    <div className="subtotal">
                      <p>৳ {Item.product.price * Item.quantity} </p>
                    </div>

                    <div className="remove_order_item">
                      <IconButton
                        onClick={() => deleteProduct(Item)}
                        aria-label="delete"
                        size="large"
                        color="error"
                      >
                        <DeleteForeverIcon fontSize="large" />
                      </IconButton>
                    </div>
                  </div>
                )}
              </CartProducts>
            );
          })}

        {orderdItem.length === 0 && (
          <EmptyProductContainer>
            <p>No products in your order List.</p>
            <Link to={"/cart"}> Add Items </Link>
          </EmptyProductContainer>
        )}
      </Wraper>
    </Container>
  );
};

export default OrderDetails;

const Container = styled.div`
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;

const Wraper = styled.div`
  background: #fff;
  padding: 1rem 2rem;
  margin: 1rem 1rem 1rem 0;
  border-radius: 0.5rem;
`;

const ShippingContainer = styled.div`
  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  p {
    font-size: 1.4rem;
    color: tomato;
    cursor: pointer;
    user-select: none;
  }
`;
const PaymentContainer = styled.div`
  margin-bottom: 2rem;
  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  img {
    width: 20rem;
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
  }
`;

const CartTitle = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
const CartProducts = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #f2f2f2;

  .left_box {
    display: flex;
    .img_box {
      padding: 0 1rem;
      img {
        width: 12rem;
        height: 12rem;
      }
    }
    .dtails_box {
      .title {
        a {
          font-size: 1.4rem;
        }
      }
      .price {
        margin: 1rem 0;
        span {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
      .shiping {
        span {
          margin-right: 5px;
          color: #2e9cc3;
          font-weight: 500;
          line-height: 18px;
          font-size: 12px;
        }
      }
    }
  }
  .cart_controller {
    /* background: red; */
    width: 12rem;

    .remove_order_item {
      display: flex;
      justify-content: center;
    }

    .quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      p {
        font-family: "Roboto", "san-serif";
        color: #757575;
        word-wrap: break-word;
        font-size: 1.4rem;
        font-weight: 400;
      }
      .set_quantity {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          cursor: pointer;
          i {
            font-size: 2rem;
            color: #757575;
          }
        }
        p {
          padding: 0 1rem;
          margin-bottom: 0;
          color: #666;
        }
      }
    }
    .notify {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      span {
        text-align: center;
      }
    }
    .subtotal {
      text-align: center;
      p {
        font-size: 1rem;
        font-weight: 400;
        color: #2e9cc3;
      }
    }
  }
`;

const EmptyProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.6rem;
  }
  a {
    font-size: 1.4rem;
    background-color: #fff;
    color: tomato;
    border: 1px solid tomato;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    transition: all 0.5s;

    &:hover {
      color: #000;
    }
  }
`;
