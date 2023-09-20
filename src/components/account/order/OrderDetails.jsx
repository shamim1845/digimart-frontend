import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import TimeAgo from "timeago-react";
import axios from "axios";
import OrderedPaymentInfo from "./OrderedPaymentInfo";
import OrderedShippingInfo from "./OrderedShippingInfo";

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const { orderid } = useParams();

  useEffect(() => {
    axios.get(`/api/v1/order/${orderid}`).then((res) => {
      setOrder(res.data.order);
    });
  }, [orderid]);

  const orderStatusStyle = () => {
    let style = {
      color: "#fff",
      padding: "0.5rem 1rem",
      fontSize: "1.2rem",
      fontWeight: "400",
      backgroundColor: "",
    };

    switch (order?.orderStatus) {
      case "processing":
        style.backgroundColor = "green";
        break;
      case "complete":
        style.backgroundColor = "tomato";
        break;
      case "cancel":
        style.backgroundColor = "gray";
        break;
      case "shipped":
        style.backgroundColor = "teal";
        break;
      default:
        style = { ...style };
    }
    return style;
  };
  // console.log(order);

  return (
    <OrderContainer>
      <OrderHead>
        <div style={orderStatusStyle()}>{order?.orderStatus}</div>
        <TimeAgo className="timeago" datetime={order?.createdAt} />
      </OrderHead>
      <OrderBody>
        {order?.orderItems?.map((product) => {
          // console.log(product);
          return (
            <ProductContainer key={product?._id}>
              <CartProducts>
                <div className="fav_details_box">
                  <div className="img_box">
                    <Link to={`/products/${product?.productId}`}>
                      <img src={product?.image} alt="" />
                    </Link>
                  </div>

                  <div className="dtails_box">
                    <div className="title">
                      <Link to={`/products/${product?._id}`}>
                        {product?.name}
                      </Link>
                    </div>

                    <div className="price">
                      <span>BDT ৳{product?.price}</span>
                    </div>
                    <div className="shiping">
                      Quantity :<span> {product?.quantity}</span>
                    </div>
                  </div>
                </div>

                <div className="fav_controller">
                  <IconButton
                    onClick={() => {}}
                    aria-label="favourite"
                    size="large"
                  >
                    <ShoppingCartIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={() => {}}
                    aria-label="delete"
                    size="large"
                    color="error"
                  >
                    <DeleteForeverIcon fontSize="large" />
                  </IconButton>
                </div>
              </CartProducts>
            </ProductContainer>
          );
        })}
      </OrderBody>

      <OrderedPaymentInfo paymentInfo={order?.paymentInfo} />
      <OrderedShippingInfo shippingInfo={order?.shippingInfo} />
    </OrderContainer>
  );
};

export default OrderDetails;

const OrderContainer = styled.div`
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 3rem;
  margin: 1rem;
  width: 95%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    /* margin: 0 5rem; */
  }
  @media screen and (max-width: 450px) {
    /* padding: 2rem; */
  }
`;
const OrderHead = styled.div`
  display: flex;
  justify-content: space-between;
  .timeago {
    color: tomato;
    font-size: 1.2rem;
  }
`;
const OrderBody = styled.div`
  margin: 1rem 0;
`;
const ProductContainer = styled.div`
  background: #fff;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  @media screen and (max-width: 450px) {
    padding: 1rem;
  }
`;

const CartProducts = styled.div`
  display: flex;
  justify-content: space-between;

  .fav_details_box {
    display: flex;
    gap: 1rem;
    .img_box {
      padding: 0 1rem;
      @media screen and (max-width: 450px) {
        padding: 0;
      }
      img {
        width: 12rem;
        height: 12rem;
        @media screen and (max-width: 450px) {
          width: 9rem;
          height: 9rem;
        }
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
          font-size: 1.4rem;
        }
      }
      .shiping {
        font-weight: 500;
        line-height: 18px;
        font-size: 1.3rem;
        span {
          color: teal;
        }
      }
    }
  }

  .fav_controller {
    width: min-content;
    background: #d3c2c2;
  }
`;
