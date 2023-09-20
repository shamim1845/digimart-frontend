import React, { useState } from "react";
import styled from "styled-components";
import SidebarMenu from "./SidebarMenu";
import ProductSearch from "../headerUtils/ProductSearch";
import AuthMenu from "../headerUtils/AuthMenu";
import Logo from "../../../utils/logo/Logo";

const MobHeaderTop = () => {
  const [sideBar, setSideBar] = useState(false);

  const SidebarHandler = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <>
      <SidebarMenu sideBar={sideBar} setSideBar={setSideBar} />

      <MobHeaderContainer>
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

        <HeaderBottom>
          <ProductSearch />
        </HeaderBottom>
      </MobHeaderContainer>
    </>
  );
};

export default MobHeaderTop;

const MobHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: tomato;
  width: 100%;
  position: sticky;
  padding: 1rem 2rem;
  @media screen and (min-width: 769px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    padding: 1 2rem;
  }
  @media screen and (max-width: 576px) {
    padding: 1rem;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const HeaderTopLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 2.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.5rem;
  height: 4.5rem;
`;
