import React from "react";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";

const ProductDescription = ({ product }) => {
  return (
    <Container>
      <Title
        variant="h2"
        text={`Product Details of  ${product.name}`}
        style={{
          padding: "1.5rem",
          color: "var(--text-primary)",
          background: "#fafafa",
        }}
      />

      <article
        className="description"
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></article>
    </Container>
  );
};

export default ProductDescription;

const Container = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;

  .description {
    line-height: 1.5;
    color: var(--text-primary) !important;
    word-break: break-word;
    padding: 1.5rem;

    ul {
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
      column-count: 2;
      -webkit-column-gap: 32px;
      -moz-column-gap: 32px;
      column-gap: 32px;

      @media screen and (max-width: 576px) {
        columns: 1;
        -webkit-columns: 1;
        -moz-columns: 1;
        column-count: 1;
      }

      li {
        list-style: disc;
        list-style-position: inside;
      }
    }
    p {
      /* color: var(--text-primary) !important; */
    }
  }
`;
