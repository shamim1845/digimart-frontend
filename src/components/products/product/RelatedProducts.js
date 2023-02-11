import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "../ProductCard";

const RelatedProducts = ({ category, id }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/v1/products?category=${category}`);

      setProducts(
        res.data.products.filter((product) => product._id !== id).slice(0, 10)
      );
    };
    fetchProduct();
  }, [category, id]);
  return (
    <>
      <Container>
        <div className="title">
          <h2>Related Products</h2>
        </div>

        <ProductBox>
          {products &&
            products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
        </ProductBox>
        {products && products.length === 0 && (
          <div className="no_products">
            <p>No products found.</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default RelatedProducts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
  width: 100%;
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
    }
  }

  .no_products {
    margin-left: 1rem;
  }
`;

const ProductBox = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
