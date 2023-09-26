import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addOrderItem } from "../../../redux/order/orderSlice";
import Title from "../../utils/reUseableComponents/Title";
import MUIButton from "../../utils/reUseableComponents/MUIButton";
import useCartHandler from "../../utils/customHooks/useCartHandler";
import useFavouriteHandler from "../../utils/customHooks/useFavouriteHandler";

const ProductHandler = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Custom hook for cart handling
  const { quantity, addToCartHandler, removeFromCartHandler } =
    useCartHandler(product);

  // Custom hook for wish list handling
  const { favourite, addfavouriteItemHandler, removefavouriteHandler } =
    useFavouriteHandler(product);

  // Buy product directly
  const directBuyHandler = () => {
    let Item = { product, quantity };
    dispatch(addOrderItem({ Item }));

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

        <div
          className="favourite"
          onClick={addfavouriteItemHandler}
          onDoubleClick={removefavouriteHandler}
        >
          {favourite ? (
            <i className="bi bi-heart-fill" title="Remove from favourite"></i>
          ) : (
            <i className="bi bi-heart" title="Add to favourite"></i>
          )}
        </div>
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
          <button title="Decrease Quantity">
            <i
              className="bi bi-dash"
              onClick={() => removeFromCartHandler()}
            ></i>
          </button>
          <p>{quantity}</p>
          <button title="Increase Quantity">
            <i className="bi bi-plus" onClick={() => addToCartHandler()}></i>
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
          onClick={addToCartHandler}
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
