import { Rating } from "@mui/material";
import styled from "styled-components";

const ProductCardSkeleton = () => {
  return (
    <CardContainer>
      <CardHead>
        <div className="img animate-pulse"></div>
      </CardHead>

      <CardBody>
        <div className="price_rating">
          <span className="price animate-pulse"></span>
          <Rating
            className="animate-pulse"
            name="half-rating-read"
            value={0}
            precision={0.1}
            readOnly
            style={{ fontSize: "2rem" }}
          />
        </div>

        <div className="title">
          <p className="animate-pulse"></p>
          <p className="animate-pulse"></p>
        </div>
      </CardBody>

      <AddToCartBtn>
        <div className="btnContainer emptyBtnContainer animate-pulse">
          <div className="textElement"></div>
          <div>
            <button className="addBtn "></button>
          </div>
        </div>
      </AddToCartBtn>
    </CardContainer>
  );
};

export default ProductCardSkeleton;

const CardContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  max-height: 40rem;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const CardHead = styled.div`
  height: 25rem;
  padding: 1rem 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 100%;
    height: 100%;
    background-color: #e0e1e4;
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
      width: 7rem;
      height: 2rem;
      background-color: #e0e1e4;
    }
  }

  .title {
    margin: 1rem 0;

    p {
      width: 100%;
      height: 1rem;
      background-color: #e0e1e4;
      margin-bottom: 0.5rem;
    }
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
      transition: background-color 0.2s ease-in-out;

      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        fill: ${({ quantity }) => (quantity > 0 ? "#fff" : "")};
      }
    }

    .textElement {
      margin-top: 1rem;
    }
  }

  .emptyBtnContainer {
    div {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      height: 100%;
    }

    .addBtn {
      background-color: #e0e1e4;
      height: 100%;
      padding: 1.8rem;
    }
  }
`;
