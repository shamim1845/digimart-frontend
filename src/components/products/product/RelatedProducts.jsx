import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "../ProductCard";
import Title from "../../utils/reUseableComponents/Title";

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
        <Title
          variant="h2"
          text="Related Products"
          style={{ padding: "2rem 0", color: "#333" }}
        />

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
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */

  @media screen and (max-width: 768px) {
    width: 90vw;
  }

  .no_products {
    margin-left: 1rem;
  }
`;

const ProductBox = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
