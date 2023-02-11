import React, { useState } from "react";
import styled from "styled-components";
import SidebarMenu from "./SidebarMenu";
import ProductSearch from "../../../products/ProductSearch";
import AuthMenu from "../headerUtils/AuthMenu";

const MobHeaderTop = () => {
  const [sideBar, setSideBar] = useState(false);

  const SidebarHandler = () => {
    setSideBar((prev) => !prev);
  };
  return (
    <>
      {sideBar ? <SidebarMenu setSideBar={setSideBar} /> : null}

      <MobHeaderContainer>
        <HeaderTop>
          <HeaderTopLeft>
            <img
              onClick={SidebarHandler}
              src="/images/icons/hamberger.svg"
              alt="sidebar icon"
            />
            <Logo>
              <h2>
                DIGI<span>MART</span>
              </h2>
            </Logo>
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
  padding: 1rem;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const Logo = styled.div`
  h2 {
    letter-spacing: 0.3rem;
    font-size: 2.2rem;
    margin: 0;

    span {
      color: #fff;
    }
  }
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
const SignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 1.2rem;
  .log_out {
    margin-right: 1rem;
    p {
      margin-bottom: 0;
      color: #fff;
      transition: all 0.5s;
      &:hover {
        color: #666;
      }
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #fff;
      margin: 0 0.5rem;
    }
  }
  img {
    width: 2rem;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.5rem;
  height: 4.5rem;
`;
