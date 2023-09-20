import React from "react";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";

const ProductDescription = ({ product }) => {
  return (
    <Container>
      <Title
        variant="h2"
        text={`Product Details of  ${product.name}`}
        style={{ padding: "1.3rem", color: "#333", background: "#fafafa" }}
      />

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

  .description {
    padding: 1rem;
    font-size: 1.3rem;
    line-height: 1.4;

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
        list-style-position: inside;
        font-size: 1.3rem;
      }
    }
  }
`;

// const Title = styled.div`
//   background: #fafafa;
//   color: #212121;
//   min-height: 5rem;
//   display: grid;
//   align-items: center;
//   padding: 0 1rem;

//   h2 {
//     font-weight: 500;
//     font-size: 1.5rem;
//     text-transform: capitalize;
//   }
// `;
