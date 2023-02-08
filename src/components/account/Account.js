import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import AccountSidebar from "./AccountSidebar";

const Account = () => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    function sidebarHandler(e) {
      if (!sidebarRef.current.contains(e.target)) {
        setSidebar(false);
      }
    }
    window.addEventListener("mousedown", sidebarHandler);

    return () => {
      window.removeEventListener("mousedown", sidebarHandler);
    };
  }, [setSidebar]);

  const accountSidebarHandler = () => {
    setSidebar(true);
  };
  return (
    <PageContainer>
      <AccountContainer>
        <AccountHamberger onClick={accountSidebarHandler}>
          {sidebar ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </AccountHamberger>
        <AccountSidebar
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
  margin-top: 2rem;
  display: none;
  cursor: pointer;
  i {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
