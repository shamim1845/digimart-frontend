import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

const ratingConstant = [
  {
    value: 5,
    rating: "rating5",
  },
  {
    value: 4,
    rating: "rating4",
  },
  {
    value: 3,
    rating: "rating3",
  },
  {
    value: 2,
    rating: "rating2",
  },
  {
    value: 1,
    rating: "rating1",
  },
];

const ProductRating = ({ product }) => {
  return (
    <AvgarageRatingContainer>
      <div className="left">
        <h3>
          {product.avgRating}
          <span>/5</span>
        </h3>
        <div>
          <Rating
            name="read-only"
            value={product.avgRating}
            precision={0.1}
            readOnly
            size="large"
          />
        </div>
        <p>{product?.totalReviews} Ratings</p>
      </div>

      <div className="right">
        {ratingConstant.map((constant) => (
          <div className="rating_Box" key={constant.value}>
            <Rating
              name="read-only"
              value={constant.value}
              readOnly
              size="large"
            />

            <div className="progress_box">
              <div
                className="progress_bar"
                style={{
                  width:
                    product.totalReviews !== 0
                      ? `${
                          (100 / product?.totalReviews) *
                          product.ratings[constant.rating]
                        }%`
                      : "0%",
                }}
              ></div>
            </div>

            <span className="rating_count">
              {product.ratings[constant.rating]}
            </span>
          </div>
        ))}
      </div>
    </AvgarageRatingContainer>
  );
};

export default ProductRating;

const AvgarageRatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: start;
  }
  .left {
    flex: 1;
    h3 {
      font-size: 4rem;
      font-weight: 500;
      color: var(--text-primary);
      span {
        color: #9e9e9e;
        font-size: 3.2rem;
      }
    }
    p {
      display: inline-block;
      overflow: hidden;
      word-break: break-word;
    }
  }
  .right {
    flex: 2;
    .rating_Box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5rem 0;

      .progress_box {
        background-color: #ff634734;
        width: 15rem;
        height: 1.4rem;
        margin: 0 1rem;
        .progress_bar {
          background-color: tomato;
          height: 100%;
        }
      }
      .rating_count {
        color: var(--text-primary);
        text-align: center;
      }
    }
  }
`;
