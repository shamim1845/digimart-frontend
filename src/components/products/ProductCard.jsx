import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useCartHandler from "../utils/customHooks/useCartHandler";
import Currency from "../utils/reUseableComponents/Currency";

const ProductCard = ({ product }) => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState(0);

  // Custom hook for cart handling
  const { quantity, addToCartHandler } = useCartHandler(product?._id);

  // Effect for set quantity from cart
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
    <CardContainer>
      <Link to={`/products/${product._id}`}>
        <CardHead>
          <img src={product.images[0].url} alt="" />
        </CardHead>
        <CardBody>
          <div className="price_rating">
            <div className="price">
              <Currency price={product?.price} />
            </div>
            <Rating
              name="half-rating-read"
              value={product.avgRatings}
              precision={0.1}
              readOnly
              style={{ fontSize: "2rem" }}
            />
          </div>

          <div className="title">
            {product.name.length > 35 ? (
              <p>{`${product.name.slice(0, 50)}...`}</p>
            ) : (
              <p>{product.name}</p>
            )}
          </div>
        </CardBody>
      </Link>
      <AddToCartBtn quantity={quantity}>
        <>
          {quantity > 0 ? (
            <div className="btnContainer">
              <button
                className="removeBtn"
                onClick={() => addToCartHandler(quantity - 1)}
                disabled={quantity === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-dash"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
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
                className="addBtn"
                disabled={quantity >= product?.stock}
                onClick={() => addToCartHandler(quantity + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </button>
            </div>
          ) : (
            <div
              className="btnContainer emptyBtnContainer"
              onClick={() => addToCartHandler(quantity + 1)}
            >
              <div className="textElement">
                <span>{quantity > 0 ? quantity : "Add"}</span>
              </div>
              <div>
                <button className="addBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </>
      </AddToCartBtn>
    </CardContainer>
  );
};

export default React.memo(ProductCard);

const CardContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  max-height: 40rem;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--shadow-1);

  &:hover {
    transform: translateY(-0.6rem);
    box-shadow: var(--shadow);
  }
`;

const CardHead = styled.div`
  height: 25rem;
  padding: 1rem 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardBody = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .price_rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      color: var(--text-primary);
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  .title {
    color: var(--text-secondary);
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0.5rem 0;
    line-height: 1.25;
  }
`;

const AddToCartBtn = styled.div`
  padding: 1rem 2rem 2.5rem;

  .btnContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ quantity }) =>
      quantity > 0 ? "tomato" : "#eff0f5"};
    border-radius: 0.5rem;
    overflow: hidden;

    button {
      border: none;
      outline: none;
      padding: 1rem;
      background: none;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #df6550;
      }

      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        fill: ${({ quantity }) => (quantity > 0 ? "#fff" : "")};
      }
    }

    .textElement {
      color: ${({ quantity }) => (quantity > 0 ? "#fff" : "")};

      form {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        user-select: none;

        input {
          width: 100%;
          max-width: 8rem;
          border: none;
          outline: none;
          padding-left: 1rem;
        }
      }
    }
  }

  .emptyBtnContainer {
    cursor: pointer;

    &:hover {
      background-color: tomato;
      color: #fff;

      button {
        background-color: #df6550;
        color: #fff;
      }
    }

    div {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      height: 100%;
    }

    .addBtn {
      background-color: #e0e1e4;
      height: 100%;
      transition: color 0.2s ease-in-out;
    }
  }
`;
