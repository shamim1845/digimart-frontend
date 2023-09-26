import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import TimeAgo from "timeago-react";
import Title from "../../utils/reUseableComponents/Title";

const ProductReviews = ({ product }) => {
  return (
    <AllReviewsContainer>
      <Title
        variant="h2"
        text={`Customer Reviews`}
        style={{ padding: "1.5rem", color: "#333", background: "#fafafa" }}
      />

      {product?.reviews?.length === 0 && (
        <div className="no_review">
          <p>No Review found</p>
        </div>
      )}

      {product.reviews?.map((review) => {
        return <Review key={review._id} review={review} />;
      })}
    </AllReviewsContainer>
  );
};

export default ProductReviews;

const AllReviewsContainer = styled.div`
  .no_review {
    padding: 1.5rem;
    p {
      font-size: 1.2rem;
    }
  }
`;

const Review = ({ review }) => {
  console.log(review);
  const [imgNo, setImgNo] = useState(null);

  return (
    <ReviewContainer>
      <div className="review_rating">
        <Rating name="read-only" value={review.rating} readOnly size="large" />

        <TimeAgo datetime={review.reviewedAt} />
      </div>

      <div className="review_author">
        <i className="bi bi-person-circle" style={{ fontSize: "2.3rem" }}></i>

        <span>{review.name}</span>
      </div>

      <div className="review">
        <p>{review.comment}</p>
      </div>

      {review?.images?.length && (
        <div className="review_img_box">
          <div className="review_img_thumbnail">
            {review.images.map((img, index) => {
              return (
                <img
                  key={index}
                  onClick={() =>
                    index === imgNo ? setImgNo(null) : setImgNo(index)
                  }
                  src={img.url}
                  alt=" review img"
                  style={index === imgNo ? { border: "1px solid red" } : {}}
                />
              );
            })}
          </div>

          {imgNo !== null && (
            <div className="full_img">
              <img src={review?.images[imgNo]?.url} alt="review img" />
            </div>
          )}
        </div>
      )}
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  color: grey;
  font-size: 12px;
  border-bottom: 1px solid #eff0f5;

  .review_rating {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    p {
      font-size: 1.2rem;
      display: inline-block;
      overflow: hidden;
      word-break: break-word;
    }
  }

  .review_author {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    p {
      font-size: 1.2rem;
      display: inline-block;
      overflow: hidden;
      word-break: break-word;
      span {
      }
    }
  }

  .review {
    margin-bottom: 0.5rem;
    p {
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
        margin: 2rem 0;
        cursor: pointer;
      }
    }

    .full_img {
      img {
        width: 100%;
        max-width: 40rem;
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
