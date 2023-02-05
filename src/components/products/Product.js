import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <>
      <CardContainer>
        <Link to={`/products/${product._id}`}>
          <CardHead>
            <img src={product.images[0].url} alt="" />
          </CardHead>
          <CardBody>
            <div className="title">
              {product.name.length > 35 ? (
                <p>{`${product.name.slice(0, 35)}...`}</p>
              ) : (
                <p>{product.name}</p>
              )}
            </div>
            <div className="price">
              <p>{`$ ${product.price}`}</p>
            </div>
            <div className="rating">
              <Rating
                name="half-rating-read"
                value={product.avgRatings}
                precision={0.1}
                readOnly
              />
            </div>
          </CardBody>
        </Link>
      </CardContainer>
    </>
  );
};

export default Product;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;
  padding: 1rem;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    transform: translateY(-1rem);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  @media screen and (max-width: 576px) {
    margin: 1rem 0;
  }
`;

const CardHead = styled.div`
  img {
    height: 24rem;
    width: 27rem;
    transition: all 0.5s;
    margin-bottom: 0.5rem;
  }
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    padding: 0 1.5rem;
    p {
      color: #000;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  .price {
    p {
      color: #666;
      font-size: 1.3rem;
      font-weight: 400;
    }
  }
`;
