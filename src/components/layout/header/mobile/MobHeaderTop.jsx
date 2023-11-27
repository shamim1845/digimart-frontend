import React, { useState } from "react";
import styled from "styled-components";
import SidebarMenu from "./SidebarMenu";
import ProductSearch from "../headerUtils/ProductSearch";
import AuthMenu from "../headerUtils/AuthMenu";
import Logo from "../../../utils/logo/Logo";
import useScrollHandler from "../../../utils/customHooks/useScrollHandler";

const MobHeaderTop = () => {
  const [sideBar, setSideBar] = useState(false);

  const { scrolling, lastScrollY } = useScrollHandler();

  const SidebarHandler = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <>
      <SidebarMenu sideBar={sideBar} setSideBar={setSideBar} />

      <HeaderTop>
        <HeaderTopLeft>
          <img
            onClick={SidebarHandler}
            src="/images/icons/hamberger.svg"
            alt="sidebar icon"
          />
          <Logo primaryColor="#000" secondaryColor="#fff" />
        </HeaderTopLeft>

        <AuthMenu />
      </HeaderTop>
      <HeaderBottom show={scrolling === "top" && lastScrollY > 700}>
        <div className="searchBar">
          <ProductSearch />
        </div>
      </HeaderBottom>
    </>
  );
};

export default MobHeaderTop;

const HeaderTop = styled.div`
  background-color: tomato;
  width: 100%;
  padding: 1rem 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 576px) {
    padding: 1rem 1rem 0;
  }
`;

const HeaderTopLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 3rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  background-color: tomato;
  height: 6.2rem;
  z-index: 100;
  position: ${({ show }) => (show ? "sticky" : "relative")};
  top: 0;

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 576px) {
    padding: 1rem;
  }

  .searchBar {
    width: 100%;
    background-color: #fff;
    border-radius: 0.5rem;
  }
`;
