import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addOrderItem } from "../../../redux/order/orderSlice";
import {
  addCartItem,
  addFavouriteItem,
  deleteCartItem,
  deleteFavouriteItem,
} from "../../../redux/user/userSlice";
import { styled as btn } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

import Rating from "@mui/material/Rating";
import Title from "../../utils/reUseableComponents/Title";
import { selectMemoCartItemQuantity } from "../../../redux/user/userSelector";

// MUI customize button
const BuyNow = btn(Button)({
  backgroundColor: "#585555",
  color: "#fff",
  marginRight: "2rem",
  fontSize: "1.4rem",
  fontWeight: "600",
  padding: "1rem 3rem",
  "&:hover": {
    backgroundColor: "tomato",
    color: "#000",
  },
});

const AddToCart = btn(Button)({
  backgroundColor: "tomato",
  color: "#000",
  fontSize: "1.4rem",
  fontWeight: "600",
  padding: "1rem 3rem",
  "&:hover": {
    backgroundColor: "#585555",
    color: "#fff",
  },
});

const ProductHandler = ({ product, favourite, setFavourite }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Add item to favourite list
  const addfavouriteItemHandler = () => {
    setFavourite(true);
    dispatch(addFavouriteItem({ product }));
  };

  // Remove item from favourite lis
  const removefavouriteHandler = () => {
    setFavourite(false);
    dispatch(deleteFavouriteItem({ product }));
  };

  // Buy product directly
  const directBuyHandler = () => {
    let Item = { product, quantity };
    dispatch(addOrderItem({ Item }));

    navigate("/order");
  };

  const memoCartItem = useMemo(selectMemoCartItemQuantity, []);

  const quantity = useSelector((state) => memoCartItem(state, product?._id));

  console.log("Product card render =>", quantity);

  const addToCartHandler = () => {
    if (quantity === product?.stock) return;

    const currQty = quantity + 1;

    dispatch(addCartItem({ product, quantity: currQty }));

    if (currQty === 1) {
      toast.success(`New item added in your cart.`);
    } else {
      toast.info(`Quantity increase in your existing cart item.`);
    }
  };

  const removeFromCartHandler = () => {
    if (quantity === 0) return;
    const currQty = quantity > 1 ? quantity - 1 : 0;

    if (currQty === 0) {
      dispatch(deleteCartItem({ product }));
      toast.warn(`Item removed from your cart.`);
    } else {
      dispatch(addCartItem({ product, quantity: currQty }));
      toast.info(`Quantity decrease in your existing cart item.`);
    }
  };

  return (
    <Container>
      <Title text={product?.name} style={{ paddingBottom: "1rem" }} />
      <RatingAndFavourite>
        <div>
          <Rating
            name="half-rating-read"
            size="large"
            value={product?.avgRating}
            precision={0.1}
            readOnly
          />
          <p className="total_ratings">{`${product?.totalReviews} Ratings`}</p>
        </div>

        <div
          className="favourite"
          onClick={addfavouriteItemHandler}
          onDoubleClick={removefavouriteHandler}
        >
          {favourite ? (
            <i className="bi bi-heart-fill"></i>
          ) : (
            <i className="bi bi-heart"></i>
          )}
        </div>
      </RatingAndFavourite>

      <p className="brand_name">Brand: {product?.brand}</p>

      <PriceBox>
        <div className="price_box">
          <span className="price_symbol">$</span>
          <span className="price">{`${product?.price}`}</span>
        </div>
      </PriceBox>
      <Quantity>
        <p>Quantity</p>
        <div className="set_quantity">
          <button>
            <i className="bi bi-dash" onClick={removeFromCartHandler}></i>
          </button>
          <p>{quantity}</p>
          <button>
            <i className="bi bi-plus" onClick={addToCartHandler}></i>
          </button>
        </div>
        {quantity >= product?.stock && (
          <span>Maximum {product?.stock} Products</span>
        )}
      </Quantity>

      <ButtonGroup>
        <BuyNow
          variant="contained"
          onClick={directBuyHandler}
          disabled={quantity === 0}
        >
          Buy Now
        </BuyNow>

        <AddToCart
          variant="contained"
          onClick={addToCartHandler}
          disabled={quantity > 0}
        >
          Add to Cart
        </AddToCart>
      </ButtonGroup>
    </Container>
  );
};

export default ProductHandler;

const Container = styled.div`
  height: 100%;
`;

const RatingAndFavourite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .total_ratings {
      margin-left: 2rem;
    }
  }

  .favourite {
    justify-content: center;
    i {
      font-size: 2.2rem;
      cursor: pointer;
    }
    .bi-heart-fill {
      color: tomato;
    }
  }
`;
const PriceBox = styled.div`
  margin-top: 2rem;
  .price_box {
    display: flex;
    color: var(--text-primary);

    .price_symbol {
      font-size: 1.3rem;
    }
    .price {
      font-size: 2.8rem;
    }
  }
`;

const Quantity = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  p {
    color: var(--text-primary);
    font-weight: 400;
  }
  .set_quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;

    button {
      margin: 0 1rem;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: #dadada;
      cursor: pointer;
      i {
        font-size: 2rem;
        color: var(--text-primary);
        &:hover {
          color: tomato;
        }
      }
    }
    p {
      padding: 0 1rem;
      margin-bottom: 0;
      color: var(--text-primary);
    }
  }
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;

  @media screen and (max-width: 576px) {
    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;
