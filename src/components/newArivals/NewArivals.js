import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAsyncNewArrivals,
  getAllProducts,
} from "../../features/products/productSlice";

import Loading from "../utils/Loading";
import Product from "../products/Product";
import Pagination from "../utils/Pagination";

const NewArivals = () => {
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categoryHandler = (e) => {
    const { value } = e.target;
    setCategory(value);
    setCurrentPage(1);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncNewArrivals({ category, currentPage }));
  }, [dispatch, category, currentPage]);

  const productDetails = useSelector(getAllProducts);
  const { loading, newArrivals } = productDetails;

  if (!category & !loading && newArrivals?.allCategories) {
    setCategory(newArrivals.allCategories[0]);
  }

  return (
    <>
      {loading && <Loading />}

      <Container>
        <div className="new_arivals">
          <div className="arivals_header">
            <h2>NEW ARRIVALS</h2>
            <div className="arivals_categori_list">
              {!loading &&
                newArrivals?.allCategories?.map((cat, ind) => (
                  <button
                    key={ind}
                    value={cat}
                    className={`${cat === category && "active"}`}
                    onClick={categoryHandler}
                  >
                    {cat}
                  </button>
                ))}
            </div>
          </div>

          <ProductContainer>
            <ProductBox>
              {!loading && newArrivals.products ? (
                newArrivals.products.map((product) => {
                  return <Product key={product._id} product={product} />;
                })
              ) : (
                <p>No products found...</p>
              )}
            </ProductBox>
          </ProductContainer>

          {!loading && newArrivals?.pages?.length > 1 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pages={newArrivals.pages}
            />
          )}
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
  margin-bottom: 2rem;

  .new_arivals {
    width: 100%;

    .arivals_header {
      margin: 5rem 0;
      display: flex;
      gap: 1rem;
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
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        button {
          padding: 0.8rem 2rem;
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
