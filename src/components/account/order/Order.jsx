import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TimeAgo from "timeago-react";
const Order = ({ order }) => {
  // console.log(order);
  const orderStatusStyle = () => {
    let style = {
      color: "#fff",
      padding: "0.5rem 1rem",
      fontSize: "1.2rem",
      fontWeight: "400",
      backgroundColor: "",
    };

    switch (order.orderStatus) {
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

  return (
    <OrderContainer>
      <OrderHead>
        <div style={orderStatusStyle()}>{order.orderStatus}</div>
        <TimeAgo className="timeago" datetime={order.createdAt} />
      </OrderHead>
      {order?.orderItems?.map((product) => {
        // console.log(product);
        return (
          <ProductContainer key={product._id}>
            <CartProducts>
              <div className="fav_details_box">
                <div className="img_box">
                  <Link to={`/products/${product.productId}`}>
                    <img src={product.image} alt="" />
                  </Link>
                </div>

                <div className="dtails_box">
                  <div className="title">
                    <Link to={`/products/${product._id}`}>{product.name}</Link>
                  </div>

                  <div className="price">
                    <span>BDT ৳{product.price}</span>
                  </div>
                  <div className="shiping">
                    Quantity :<span> {product.quantity}</span>
                  </div>
                </div>
              </div>
            </CartProducts>
          </ProductContainer>
        );
      })}
      <Link
        style={{ fontSize: "1.2rem", fontWeight: "500", paddingTop: "5rem" }}
        to={`/account/orderDetails/${order._id}`}
      >
        Details...
      </Link>
    </OrderContainer>
  );
};

export default Order;

const OrderContainer = styled.div``;
const OrderHead = styled.div`
  display: flex;
  justify-content: space-between;
  .timeago {
    color: tomato;
    font-size: 1.2rem;
  }
`;

const ProductContainer = styled.div`
  background: #fff;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
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
`;
