import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import TimeAgo from "react-timeago";
import axios from "axios";
import OrderedPaymentInfo from "./OrderedPaymentInfo";
import OrderedShippingInfo from "./OrderedShippingInfo";
import Currency from "../../utils/reUseableComponents/Currency";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const { orderid } = useParams();
  console.log(order);

  useEffect(() => {
    axios.get(`/api/v1/order/${orderid}`).then((res) => {
      setOrder(res.data.order);
    });
  }, [orderid]);

  const orderStatusStyle = () => {
    let style = {
      color: "var(--text-secondary)",
      padding: "0.5rem 1rem",
      fontWeight: "400",
      backgroundColor: "",
      textTransform: "Capitalize",
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

  if (!order) return null;

  return (
    <Container>
      <OrderHead>
        <div style={orderStatusStyle()}>{order?.orderStatus}</div>
        <TimeAgo
          date={order?.createdAt}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem 1rem",
          }}
        />
      </OrderHead>
      <OrderBody>
        {order?.orderItems?.map((product) => {
          return (
            <CartProducts key={product?._id}>
              <div className="details_box">
                <div className="img_box">
                  <Link to={`/products/${product?.productId}`}>
                    <img src={product?.image} alt={product?.name} />
                  </Link>
                </div>

                <div className="dtails_box">
                  <div className="title">
                    <Link to={`/products/${product?.productId}`}>
                      {product?.name}
                    </Link>
                  </div>

                  <div className="price">
                    {/* <span>BDT ৳{product?.price}</span> */}
                    <Currency price={product?.price} />
                  </div>
                  <div className="shiping">
                    Quantity :<span> {product?.quantity}</span>
                  </div>
                </div>
              </div>

              <div className="controller">
                <IconButton
                  title="Return this product"
                  onClick={() => {}}
                  aria-label="delete"
                  size="large"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "1.3rem",
                  }}
                >
                  <i className="bi bi-arrow-return-right"></i>
                  <span>Return</span>
                </IconButton>
              </div>
            </CartProducts>
          );
        })}
      </OrderBody>

      <OrderedPaymentInfo paymentInfo={order?.paymentInfo} />
      <OrderedShippingInfo shippingInfo={order?.shippingInfo} />
    </Container>
  );
};

export default OrderDetails;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin: 2rem 0;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
const OrderHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OrderBody = styled.div`
  margin: 1rem 0;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-1);
`;

const CartProducts = styled.div`
  display: flex;
  justify-content: space-between;

  .details_box {
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

  .controller {
    width: min-content;
  }
`;
