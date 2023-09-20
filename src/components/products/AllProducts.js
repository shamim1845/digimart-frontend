import { useState } from "react";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import ProductPerPage from "./ProductPerPage";
import MetaData from "../utils/Metadata";
import TuneIcon from "@mui/icons-material/Tune";
import FilterBox from "./FilterBox";
import ProductBox from "./ProductBox";

const AllProducts = () => {
  const [activeFilter, setActiveFilter] = useState(false);

  console.log("AllProducts page render. =>");

  return (
    <>
      <MetaData title="Products" />
      <PageContainer>
        <Header>
          <FilterButton onClick={() => setActiveFilter(true)}>
            <TuneIcon />
            <span>Filter</span>
          </FilterButton>
          <ProductPerPage />
        </Header>

        <Container>
          <FilterBox
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <ProductBox />
        </Container>
      </PageContainer>
    </>
  );
};

export default AllProducts;

const Header = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  z-index: 10;
  background-color: #f2f2f2;
  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
  }
`;

const FilterButton = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

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
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 80vh;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
`;
