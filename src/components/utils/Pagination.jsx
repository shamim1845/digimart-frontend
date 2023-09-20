import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const prevHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <Prev>
        <Btn onClick={prevHandler} disabled={Number(currentPage) === 1}>
          <ArrowBackIosIcon />
        </Btn>
      </Prev>
      <Page>
        {pages &&
          pages?.map((pageNo) => {
            return (
              <li key={pageNo} onClick={() => setCurrentPage(pageNo)}>
                <Btn active={pageNo === currentPage}>{pageNo}</Btn>
              </li>
            );
          })}
      </Page>
      <Next>
        <Btn
          onClick={nextHandler}
          disabled={Number(currentPage) === Number(pages.length)}
        >
          <ArrowForwardIosIcon />
        </Btn>
      </Next>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem;
  padding: 1rem;
  overflow: hidden;
  width: 100%;
  max-width: 1440px;
`;
const Prev = styled.div``;
const Page = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Next = styled(Prev)``;

const Btn = styled.button`
  min-width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: ${({ active }) => (active ? "tomato" : "")};
  font-size: 1.3rem;
`;
