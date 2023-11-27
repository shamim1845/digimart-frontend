import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Products from "./Products";
import { useGetNewArivalsCategoriesQuery } from "../../../redux/api/products/productsAPI";
import Loading from "../../utils/fetchUtils/Loading";
import Error from "../../utils/fetchUtils/Error";

const NewArivals = () => {
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // category handler
  const categoryHandler = (e) => {
    const { value } = e.target;
    setCategory(value);
    setCurrentPage(1);
  };

  // Fetch New Arrivals Category
  const { isLoading, isSuccess, data, isError, error } =
    useGetNewArivalsCategoriesQuery();

  // set default category
  useEffect(() => {
    if (data?.allCategories?.length > 0) {
      setCategory(data?.allCategories[0]);
    }
  }, [data]);

  //
  const cachedCategory = useMemo(
    () => data?.allCategories,
    [data?.allCategories]
  );

  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (isError) {
    if (error.status === 404) {
      content = null;
    } else {
      content = (
        <Error text={error?.message} style={{ justifyContent: "center" }} />
      );
    }
  }

  if (isSuccess && data?.allCategories?.length > 0) {
    content = (
      <Container>
        <div className="new_arivals">
          <div className="arivals_header">
            <h2>NEW ARRIVALS</h2>
            <br />
            <div className="arivals_categori_list">
              {cachedCategory?.map((cat, ind) => (
                <button
                  key={ind}
                  value={cat}
                  className={`${
                    cat === (category || cachedCategory[0]) && "active"
                  }`}
                  onClick={categoryHandler}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {category && (
            <Products
              category={category}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </Container>
    );
  }

  return content;
};

export default NewArivals;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 5rem 0;

  .new_arivals {
    width: 100%;

    .arivals_header {
      margin-bottom: 5rem;
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
          padding: 0.7rem 1.7rem;
          margin-right: 1rem;
          border-radius: 1.7rem;
          background-color: #d8e3e8;
          color: var(--text-primary);
          border: none;
          outline: none;
          font-size: 1.3rem;
          cursor: pointer;
        }
        button.active {
          background-color: var(--bg-primary);
          color: #fff;
        }
      }
    }
  }
`;
