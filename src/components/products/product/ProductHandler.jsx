import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";
import MUIButton from "../../utils/reUseableComponents/MUIButton";
import useCartHandler from "../../utils/customHooks/useCartHandler";
import useFavouriteHandler from "../../utils/customHooks/useFavouriteHandler";
import { useEffect, useState } from "react";

const ProductHandler = ({ product }) => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  // Custom hook for cart handling
  const { quantity, addToCartHandler } = useCartHandler(product?._id);

  // set quantity from cart
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

  // Custom hook for wish list handling
  const { favourite, addfavouriteItemHandler, removefavouriteHandler } =
    useFavouriteHandler(product?._id);

  // Buy product directly
  const directBuyHandler = () => {
    navigate("/order");
  };

  return (
    <Container>
      <Title text={product?.name} style={{}} />
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

        {favourite ? (
          <div className="favourite" onClick={removefavouriteHandler}>
            <i className="bi bi-heart-fill" title="Remove from favourite"></i>
          </div>
        ) : (
          <div className="favourite" onClick={addfavouriteItemHandler}>
            <i className="bi bi-heart" title="Add to favourite"></i>
          </div>
        )}
      </RatingAndFavourite>

      <Brand>
        <p className="">Brand: {product?.brand}</p>
      </Brand>

      <PriceBox>
        <div className="price_box">
          <span className="price_symbol">$</span>
          <span className="price">{`${product?.price}`}</span>
        </div>
      </PriceBox>
      <Stock>
        <span>Stock: </span>
        <span>{product?.stock}</span>
      </Stock>
      <Quantity>
        <p>Quantity</p>
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

      <ButtonGroup>
        <MUIButton
          variant="contained"
          onClick={directBuyHandler}
          disabled={quantity === 0}
        >
          Buy Now
        </MUIButton>

        <MUIButton
          variant="contained"
          onClick={() => addToCartHandler(quantity + 1)}
          disabled={quantity > 0}
        >
          Add to Cart
        </MUIButton>
      </ButtonGroup>
    </Container>
  );
};

export default ProductHandler;

const Container = styled.div`
  width: 100%;
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
    justify-content: flex-end;

    i {
      font-size: 2.2rem;
      cursor: pointer;
    }
    .bi-heart-fill {
      color: tomato;
    }
  }
`;

const Brand = styled.div`
  color: var(--text-primary);
`;
const PriceBox = styled.div`
  padding: 2rem 0;
  margin: 3rem 0;
  border-top: 2px solid #e4e9eb;
  border-bottom: 2px solid #e4e9eb;
  .price_box {
    display: flex;
    color: var(--text-primary);

    .price_symbol {
      font-size: 1.6rem;
      font-weight: 500;
    }
    .price {
      font-size: 2.8rem;
      font-weight: 500;
    }
  }
`;

const Stock = styled.div`
  color: var(--text-primary);
`;

const Quantity = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--text-primary);

  .set_quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 576px) {
    margin-top: 5rem;
    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;
