import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addOrderItem } from "../../../features/order/orderSlice";
import {
  addCartItem,
  addFavouriteItem,
  deleteFavouriteItem,
} from "../../../features/user/userSlice";
import { styled as btn } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

import Rating from "@mui/material/Rating";
const ProductHandler = ({ Product, favourite, setFavourite }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const addfavouriteItemHandler = () => {
    setFavourite(true);
    dispatch(addFavouriteItem({ product: Product }));
  };
  const removefavouriteHandler = () => {
    setFavourite(false);
    dispatch(deleteFavouriteItem({ product: Product }));
  };

  const directBuyHandler = () => {
    let Item = { product: Product, quantity: quantity };
    dispatch(addOrderItem({ Item }));

    navigate("/order");
  };

  const BuyNow = btn(Button)({
    backgroundColor: "#EAEAEA",
    color: "black",
    marginRight: "2rem",
    fontSize: "1.4rem",
    padding: "1rem 3rem",
    "&:hover": {
      backgroundColor: "#EAEAEA",
      color: "tomato",
    },
  });
  const AddToCart = btn(Button)({
    backgroundColor: "tomato",
    color: "#fff",
    fontSize: "1.4rem",
    padding: "1rem 3rem",
    "&:hover": {
      backgroundColor: "#A9333A",
    },
  });

  const cartHandler = () => {
    dispatch(
      addCartItem({ product: Product, quantity: quantity }),
      setQuantity(1)
    );

    toast("Item is added in your cart.");
  };

  return (
    <div>
      <TitleBox>
        <h1 className="title">{Product.name}</h1>
        <div className="rating">
          <div>
            <Rating
              name="half-rating-read"
              size="large"
              value={Product.avgRatings}
              precision={0.1}
              readOnly
            />
            <p>{`${Product.numOfReviews} Ratings`}</p>
          </div>
          <div
            className="favourite"
            onClick={() => addfavouriteItemHandler()}
            onDoubleClick={() => removefavouriteHandler()}
          >
            {favourite ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </div>
        </div>
        <p className="brand_name">Brand: {Product.brand}</p>
        <p className="divider"></p>
      </TitleBox>
      <PriceBox>
        <div className="price">
          <h2>{`৳ ${Product.price}`}</h2>
        </div>

        <div className="quantity">
          <p>Quantity</p>
          <div className="set_quantity">
            <button>
              <i
                className="bi bi-dash"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              ></i>
            </button>
            <p>{quantity}</p>
            <button>
              <i
                className="bi bi-plus"
                onClick={() => quantity < 10 && setQuantity(quantity + 1)}
              ></i>
            </button>
          </div>
          {quantity === 10 && <span>Maximum 10 Products</span>}
        </div>

        <div className="order_button">
          <BuyNow variant="contained" onClick={directBuyHandler}>
            Buy Now
          </BuyNow>
          <AddToCart variant="contained" onClick={cartHandler}>
            Add to Cart
          </AddToCart>
        </div>
      </PriceBox>
    </div>
  );
};

export default ProductHandler;
const TitleBox = styled.div`
  .title {
    color: #212121;
    font-weight: 400;
    text-transform: capitalize;
    word-wrap: break-word;
    font-size: 2.2rem;
    @media screen and (max-width: 576px) {
      font-size: 1.8rem;
    }
  }
  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        padding-left: 1rem;
        margin-bottom: 0;
        font-size: 1.2rem;
      }
    }

    .favourite {
      i {
        font-size: 2.2rem;
        cursor: pointer;
      }
      .bi-heart-fill {
        color: tomato;
      }
    }
  }
  .brand_name {
    color: #9e9e9e;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: "Roboto", "san-serif";
  }
  .divider {
    color: tomato;
    margin: 1rem 0;
    border-bottom: 1px solid #eff0f5;
  }
`;
const PriceBox = styled.div`
  .price {
    margin-bottom: 3rem;
    h2 {
      color: tomato;
      font-size: 2.5rem;
      @media screen and (max-width: 576px) {
        font-size: 2rem;
      }
    }
  }
  .quantity {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;
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
      margin-left: 5rem;

      button {
        margin: 0 1rem;
        width: 3rem;
        height: 3rem;
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
  .order_button {
    margin-top: 2rem;

    @media screen and (max-width: 576px) {
      button {
        margin-top: 1rem;
        width: 100%;
      }
    }
  }
`;
