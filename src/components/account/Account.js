import React, { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import Sidebar from "./AccountSidebar";
import useSidebarHandler from "../utils/customHooks/useSidebarHandler";

const Account = () => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarRef = useRef(null);

  // cistom hooks for sidebar handling when mouse down beside of sidebar
  useSidebarHandler(sidebarRef, setSidebar);

  const accountSidebarHandler = () => {
    setSidebar(true);
  };

  return (
    <PageContainer>
      <AccountContainer>
        <AccountHamberger onClick={accountSidebarHandler}>
          <i className="bi bi-arrow-right-square"></i>
        </AccountHamberger>
        <Sidebar
          setSidebar={setSidebar}
          sidebar={sidebar}
          sidebarRef={sidebarRef}
        />

        <AccountContent>
          <Outlet />
        </AccountContent>
      </AccountContainer>
    </PageContainer>
  );
};

export default Account;

const AccountContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
`;

const AccountContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const AccountHamberger = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  i {
    font-size: 2.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: tomato;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    max-width: max-content;
    cursor: pointer;
  }
`;
