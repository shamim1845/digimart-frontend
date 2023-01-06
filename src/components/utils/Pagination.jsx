import React from "react";
import styled from "styled-components";

const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  const paginationLinkHandler = (page) => {
    setCurrentPage(page);
  };

  const prevHandler = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextHandler = (e) => {
    e.preventDefault();
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <PaginationContainer>
      <Prev>
        <button onClick={prevHandler}>prev</button>
      </Prev>
      <Page>
        {pages &&
          pages.map((page) => {
            return (
              <p
                style={
                  page === currentPage
                    ? { background: "#666", color: "#fff" }
                    : null
                }
                key={page}
                onClick={() => paginationLinkHandler(page)}
              >
                {page}
              </p>
            );
          })}
      </Page>
      <Next>
        <button onClick={nextHandler}>Next</button>
      </Next>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  overflow: hidden;
`;
const Prev = styled.div`
  button {
    background-color: tomato;
    border: none;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0.5rem 2rem;
    border-radius: 3px;
    cursor: pointer;
  }
`;
const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem;

  p {
    font-size: 2rem;
    padding: 0 0.7rem;
    margin: 0 0.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
      background: #666;
      color: #fff;
    }
  }
`;
const Next = styled(Prev)``;
