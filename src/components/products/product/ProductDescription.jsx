import React from "react";
import styled from "styled-components";

const ProductDescription = ({ product }) => {
  return (
    <Container>
      <div className="title">
        <h2>
          Product Details of <span>{` ${product.name}`}</span>
        </h2>
      </div>

      <article>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </article>
    </Container>
  );
};

export default ProductDescription;

const Container = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
  .title {
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
  }

  .description {
    padding: 1rem 1rem;

    font-size: 1.3rem;
    p {
      /* font-size: 1.3rem; */
    }
    ul {
      -webkit-columns: 2;
      -moz-columns: 2;
      column-count: 2;
      -webkit-column-gap: 32px;
      -moz-column-gap: 32px;
      column-gap: 32px;

      @media screen and (max-width: 576px) {
        -webkit-columns: 1;
        -moz-columns: 1;
        column-count: 1;
        -webkit-column-gap: 32px;
        -moz-column-gap: 32px;
        column-gap: 32px;
      }

      li {
        list-style: disc;
        font-size: 1.3rem;
      }
    }
  }
`;
