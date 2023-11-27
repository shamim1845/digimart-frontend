import React, { useEffect, useState } from "react";
import { IconButton, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useCartHandler from "../utils/customHooks/useCartHandler";
import useFavouriteHandler from "../utils/customHooks/useFavouriteHandler";
import Title from "../utils/reUseableComponents/Title";
import Currency from "../utils/reUseableComponents/Currency";

const CartProductCard = ({ product, quantity }) => {
  const { removeFromCartHandler } = useCartHandler(product?._id);
  const { addfavouriteItemFromCartHandler } = useFavouriteHandler(product?._id);

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState(0);

  // Custom hook for cart handling
  const { addToCartHandler } = useCartHandler(product?._id);

  // set quantity from cart for input box
  useEffect(() => {
    if (quantity) {
      setValue(quantity);
    }
  }, [quantity]);

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    addToCartHandler(value);
    setShowInput(false);
  };

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
        <div className="controller_top">
          <IconButton
            onClick={addfavouriteItemFromCartHandler}
            aria-label="favourite"
            size="large"
          >
            <i className="bi bi-heart" style={{ fontSize: "2rem" }}></i>
          </IconButton>
          <IconButton
            onClick={removeFromCartHandler}
            aria-label="delete"
            size="large"
            color="error"
          >
            <i className="bi bi-trash" style={{ fontSize: "2rem" }}></i>
          </IconButton>
        </div>
        <div className="controller_bottom">
          <Quantity>
            <div className="set_quantity">
              <button
                title="Decrease Quantity"
                onClick={() => addToCartHandler(quantity - 1)}
                disabled={quantity === 0}
              >
                <i className="bi bi-dash"></i>
              </button>
              <div className="textElement">
                {showInput ? (
                  <form onSubmit={handleSubmit}>
                    <input
                      name="quantity"
                      type="number"
                      max={product?.stock}
                      min={1}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </form>
                ) : (
                  <span
                    title="Double-click to set the quantity"
                    onDoubleClick={() => setShowInput(true)}
                  >
                    {quantity}
                  </span>
                )}
              </div>
              <button
                disabled={quantity >= product?.stock}
                title="Increase Quantity"
                onClick={() => addToCartHandler(quantity + 1)}
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
            {quantity >= product?.stock && (
              <span>Maximum {product?.stock} Products</span>
            )}
          </Quantity>
        </div>
      </div>
    </Container>
  );
};

export default CartProductCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

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
    .controller_top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 1rem;
    }
    .controller_bottom {
    }
  }
`;

const Quantity = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);

  .set_quantity {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

    button {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
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

    .textElement {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      form {
        box-shadow: var(--shadow-3);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;

        input {
          width: 100%;
          height: 100%;
          text-align: center;
          max-width: 8rem;
          border: none;
          outline: none;
        }
      }

      span {
        padding: 0 1rem;
      }
    }
  }
`;
