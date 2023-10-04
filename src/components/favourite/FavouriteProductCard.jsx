import { IconButton, Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useFavouriteHandler from "../utils/customHooks/useFavouriteHandler";
import Title from "../utils/reUseableComponents/Title";
import Currency from "../utils/reUseableComponents/Currency";
import useCartHandler from "../utils/customHooks/useCartHandler";

const FavouriteProductCard = ({ product }) => {
  // Custom hook for wish list handling
  const { removefavouriteHandler } = useFavouriteHandler(product?._id);

  // Custom hook for cart handling
  const { addToCartFromFavouriteHandler } = useCartHandler(product?._id);

  return (
    <Container>
      <div className="left_content">
        <div className="img_box">
          <img src={product.images[0].url} alt={product?.name} />
        </div>

        <div className="dtails_box">
          <Link to={`/products/${product._id}`}>
            <Title
              variant="h3"
              text={product?.name}
              style={{ fontWeight: "500" }}
            />
          </Link>

          <div className="price">
            <Currency price={product?.price} />
          </div>

          <div className="rating">
            <Rating
              name="half-rating-read"
              size="large"
              value={product?.avgRating}
              precision={0.1}
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="right_content">
        <IconButton
          onClick={addToCartFromFavouriteHandler}
          aria-label="favourite"
          size="large"
        >
          <i className="bi bi-cart-dash-fill" style={{ fontSize: "2rem" }}></i>
        </IconButton>
        <IconButton
          onClick={removefavouriteHandler}
          aria-label="delete"
          size="large"
          color="error"
        >
          <i className="bi bi-trash" style={{ fontSize: "2rem" }}></i>
        </IconButton>
      </div>
    </Container>
  );
};

export default FavouriteProductCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  .left_content {
    display: flex;
    align-items: center;
    .img_box {
      padding: 0 1rem;
      img {
        width: 12rem;
        height: 12rem;
      }
    }
    .dtails_box {
      .price {
        margin: 1rem 0;
        span {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
      .rating {
      }
    }
  }

  .right_content {
  }
`;
