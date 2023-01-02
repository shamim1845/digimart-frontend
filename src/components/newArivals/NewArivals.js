import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getAllProducts } from "../../features/products/productSlice";

import Loading from "../utils/Loading";
import Product from "../products/Product";

const NewArivals = () => {
  const [category, setCategory] = useState("home_appliance");

  const categoryHandler = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const productDetails = useSelector(getAllProducts);
  const { loading, fetchProduct } = productDetails;

  return (
    <>
      {loading && <Loading />}

      <Container>
        <div className="new_arivals">
          <div className="arivals_header">
            <h2>NEW ARRIVALS</h2>
            <div className="arivals_categori_list">
              <button
                value="home_appliance"
                className={`${category === "home_appliance" && "active"}`}
                onClick={categoryHandler}
              >
                Home Appliances
              </button>
              <button
                value="computer"
                className={`${category === "computer" && "active"}`}
                onClick={categoryHandler}
              >
                Computer
              </button>
              <button
                value="electronics"
                className={`${category === "electronics" && "active"}`}
                onClick={categoryHandler}
              >
                Electronics
              </button>
              <button
                value="laptop_&_accessories"
                className={`${category === "laptop_&_accessories" && "active"}`}
                onClick={categoryHandler}
              >
                Laptop & Accessories
              </button>
              <button
                value="camera"
                className={`${category === "camera" && "active"}`}
                onClick={categoryHandler}
              >
                Camera
              </button>
            </div>
          </div>

          <ProductContainer>
            <ProductBox>
              {!loading && fetchProduct.products ? (
                fetchProduct.products.map((product) => {
                  return <Product key={product._id} product={product} />;
                })
              ) : (
                <p>No products found...</p>
              )}
            </ProductBox>
          </ProductContainer>
        </div>
      </Container>
    </>
  );
};

export default NewArivals;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;

  .new_arivals {
    width: 100%;

    .arivals_header {
      margin: 5rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      @media screen and (max-width: 1440px) {
        flex-direction: column;
      }
      h2 {
        color: tomato;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
      }

      .arivals_categori_list {
        button {
          padding: 1rem 2rem;
          margin-right: 1rem;
          border-radius: 2rem;
          background-color: #d8e3e8;
          color: var(--text-primary);
          border: none;
          outline: none;
          font-size: 1.3rem;
        }
        button.active {
          background-color: var(--bg-primary);
          color: #fff;
        }
      }
    }
  }
`;

const ProductContainer = styled.div`
  width: 100%;
`;

const ProductBox = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
