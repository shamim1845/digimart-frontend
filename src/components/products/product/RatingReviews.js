import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import TimeAgo from "timeago-react";

const RatingReviews = ({ product }) => {
  const [imgUrl, setImgUrl] = useState("");
  // console.log(product);
  return (
    <Container>
      <Title>
        <h2>
          Ratings & Reviews of <span>{` ${product.name}`}</span>
        </h2>
      </Title>

      <AvgarageRatingContainer>
        <div className="avg_left">
          <h3>
            {product.avgRatings}
            <span>/5</span>
          </h3>
          <div>
            <Rating
              name="read-only"
              value={product.avgRatings}
              precision={0.1}
              readOnly
              size="large"
            />
          </div>
          <p>{product.numOfReviews} Ratings</p>
        </div>

        <div className="avg_right">
          <div className="rating_Box">
            <Rating name="read-only" value={5} readOnly size="large" />

            <div className="progress_box">
              <div
                className="progress_bar"
                style={{
                  width:
                    product.numOfReviews !== 0
                      ? `${
                          (100 / product.numOfReviews) *
                          product.ratingDetails.rating5
                        }%`
                      : "0%",
                }}
              ></div>
            </div>

            <span className="rating_count">
              {product.ratingDetails.rating5}
            </span>
          </div>
          <div className="rating_Box">
            <Rating name="read-only" value={4} readOnly size="large" />

            <div className="progress_box">
              <div
                className="progress_bar"
                style={{
                  width:
                    product.numOfReviews !== 0
                      ? `${
                          (100 / product.numOfReviews) *
                          product.ratingDetails.rating4
                        }%`
                      : "0%",
                }}
              ></div>
            </div>
            <span className="rating_count">
              {product.ratingDetails.rating4}
            </span>
          </div>
          <div className="rating_Box">
            <Rating name="read-only" value={3} readOnly size="large" />

            <div className="progress_box">
              <div
                className="progress_bar"
                style={{
                  width:
                    product.numOfReviews !== 0
                      ? `${
                          (100 / product.numOfReviews) *
                          product.ratingDetails.rating3
                        }%`
                      : "0%",
                }}
              ></div>
            </div>
            <span className="rating_count">
              {product.ratingDetails.rating3}
            </span>
          </div>
          <div className="rating_Box">
            <Rating name="read-only" value={2} readOnly size="large" />

            <div className="progress_box">
              <div
                className="progress_bar"
                style={{
                  width:
                    product.numOfReviews !== 0
                      ? `${
                          (100 / product.numOfReviews) *
                          product.ratingDetails.rating2
                        }%`
                      : "0%",
                }}
              ></div>
            </div>
            <span className="rating_count">
              {product.ratingDetails.rating2}
            </span>
          </div>
          <div className="rating_Box">
            <Rating name="read-only" value={1} readOnly size="large" />

            <div className="progress_box">
              <div
                className="progress_bar"
                style={{
                  width:
                    product.numOfReviews !== 0
                      ? `${
                          (100 / product.numOfReviews) *
                          product.ratingDetails.rating1
                        }%`
                      : "0%",
                }}
              ></div>
            </div>
            <span className="rating_count">
              {product.ratingDetails.rating1}
            </span>
          </div>
        </div>
      </AvgarageRatingContainer>

      <AllReviewsContainer>
        <ReviewTitle>
          <h4>Product Reviews</h4>
        </ReviewTitle>

        {product.reviews.length === 0 && (
          <div className="no_review">
            <p>No Review found</p>
          </div>
        )}

        {product.reviews?.map((review) => {
          // console.log(review);
          // console.log(product);
          return (
            <ReviewContainer key={review._id}>
              <div className="review_rating">
                <Rating
                  name="read-only"
                  value={review.rating}
                  readOnly
                  size="large"
                />

                <TimeAgo datetime={review.reviewedAt} />
              </div>

              <div className="review_author">
                <p>
                  {" "}
                  by <span>{review.name}</span>
                </p>
              </div>
              <div className="review">
                <p>{review.comment}</p>
              </div>

              <div className="review_img_box">
                <div className="review_img_thumbnail">
                  {review.images &&
                    review.images.map((img, index) => {
                      return (
                        <img
                          key={index}
                          onClick={() =>
                            img.url === imgUrl
                              ? setImgUrl("")
                              : setImgUrl(img.url)
                          }
                          src={img.url}
                          alt=" review img"
                          style={
                            img.url === imgUrl
                              ? { border: "1px solid red" }
                              : {}
                          }
                        />
                      );
                    })}
                </div>
                <div className="full_img">
                  {review.images &&
                    review.images.map((img, index) => {
                      if (img.url === imgUrl) {
                        return (
                          <img key={index} src={imgUrl} alt=" review img" />
                        );
                      }
                      return null;
                    })}
                </div>
              </div>
            </ReviewContainer>
          );
        })}
      </AllReviewsContainer>
    </Container>
  );
};

export default RatingReviews;

const Container = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const Title = styled.div`
  background: #fafafa;
  color: #212121;
  min-height: 5rem;
  display: grid;
  align-items: center;
  padding: 0 1rem;

  h2 {
    font-weight: 500;
    font-family: roboto;
    font-size: 1.6rem;

    span {
      font-weight: 500;
      font-family: roboto;
      font-size: 1.6rem;
      text-transform: capitalize;
    }
  }
`;
const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  color: #212121;
  min-height: 4rem;
  border-top: 1px solid #eff0f5;
  border-bottom: 1px solid #eff0f5;
  margin: 1rem 0;
  padding: 0 1rem;

  h4 {
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
  }
`;

const AvgarageRatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
  .avg_left {
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
      font-size: 1.2rem;
      display: inline-block;
      overflow: hidden;
      word-break: break-word;
      color: #757575;
      font-family: "Roboto", sans-serif;
    }
  }
  .avg_right {
    flex: 2;
    .rating_Box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5rem 0;

      .progress_box {
        background-color: #eff0f5;
        width: 15rem;
        height: 1.4rem;
        margin: 0 1rem;
        .progress_bar {
          background-color: tomato;
          height: 100%;
        }
      }
      .rating_count {
        font-size: 1.3rem;

        color: #212121;
        font-family: roboto;
      }
    }
  }
`;
const AllReviewsContainer = styled.div`
  .no_review {
    padding: 1rem;
    p {
      font-size: 1.2rem;
    }
  }
`;
const ReviewContainer = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  color: grey;
  font-size: 12px;
  border-bottom: 1px solid #eff0f5;
  .review_rating {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.2rem;
      display: inline-block;
      overflow: hidden;
      word-break: break-word;
      color: #757575;
      font-family: "Roboto", sans-serif;
    }
  }

  .review_author {
    p {
      font-size: 1.2rem;
      display: inline-block;
      overflow: hidden;
      word-break: break-word;
      color: #757575;
      font-family: "Roboto", sans-serif;
      span {
      }
    }
  }

  .review {
    p {
      color: #212121;
      font-size: 14px;
      white-space: pre-wrap;
      word-break: break-word;
    }
  }

  .review_img_box {
    margin-bottom: 1rem;

    .review_img_thumbnail {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 1rem;

      img {
        width: 10rem;
        height: 10rem;
        padding: 1rem;
        /* margin: .5rem; */
        cursor: pointer;
      }
    }

    .full_img {
      img {
        width: auto;
        max-width: 90%;
        height: auto;
      }
      @media screen and (max-width: 576px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
