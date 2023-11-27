import { useState } from "react";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import ProductPerPage from "./ProductPerPage";
import TuneIcon from "@mui/icons-material/Tune";
import FilterBox from "./FilterBox";
import ProductBox from "./ProductBox";
import useScrollHandler from "../utils/customHooks/useScrollHandler";

const AllProducts = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  const { scrolling, lastScrollY } = useScrollHandler();

  return (
    <>
      <PageContainer>
        <Container>
          <Header show={scrolling === "down" && lastScrollY > 300}>
            <FilterButton onClick={() => setActiveFilter(true)}>
              <TuneIcon />
              <span>Filter</span>
            </FilterButton>
            <ProductPerPage />
          </Header>

          <Content>
            <FilterBox
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            <ProductBox />
          </Content>
        </Container>
      </PageContainer>
    </>
  );
};

export default AllProducts;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 50vh;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    position: ${({ show }) => (show ? "sticky" : "relative")};
    top: 0;
    background-color: ${({ show }) => (show ? "#f2f2f2" : "transparent")};
  }
`;

const FilterButton = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    box-shadow: var(--shadow-3);
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: tomato;
      svg {
        fill: #fff;
      }
      span {
        color: #fff;
      }
    }

    svg {
      font-size: 2rem;
    }
    span {
      font-size: 1.3rem;
      color: var(--text-primary);
      font-weight: 600;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
