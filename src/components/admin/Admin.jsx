import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import AdminSidebar from "./sidebar/AdminSidebar";

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
      <AdminContainer>
        <AdminHamberger onClick={accountSidebarHandler}>
          {sidebar ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </AdminHamberger>
        <AdminSidebar
          setSidebar={setSidebar}
          sidebar={sidebar}
          sidebarRef={sidebarRef}
        />
        <AdminContent>
          <Outlet />
        </AdminContent>
      </AdminContainer>
    </PageContainer>
  );
};

export default Account;

const AdminContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
`;

const AdminContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const AdminHamberger = styled.div`
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
