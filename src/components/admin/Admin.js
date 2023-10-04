import React, { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Logo from "../utils/logo/Logo";
import AdminSidebar from "./sidebar/AdminSidebar";
import UserInformation from "../utils/reUseableComponents/card/UserInformation";
import useSidebarHandler from "../utils/customHooks/useSidebarHandler";
import Loading from "../utils/fetchUtils/Loading";

const Account = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  // =>  sidebar handling with custom hooks
  useSidebarHandler(sidebarRef, setShowSidebar);

  return (
    <AdminContainer>
      <AdminHeader>
        <div className="left_side">
          <Hamberger
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <img src="/images/icons/hamberger.svg" alt="hamberger" />
          </Hamberger>
          <NavLink to="/">
            <Logo primaryColor="#000" secondaryColor="#fff" />
          </NavLink>
        </div>
        <div className="right_side">
          <UserInformation />
        </div>
      </AdminHeader>

      <ContentContainer>
        <AdminSidebar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          sidebarRef={sidebarRef}
        />
        <Content>
          <React.Suspense fallback={<Loading />}>
            <Outlet />
          </React.Suspense>
        </Content>
      </ContentContainer>
    </AdminContainer>
  );
};

export default Account;

const AdminContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AdminHeader = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0 2rem;
  background-color: tomato;

  .left_side {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right_side {
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Hamberger = styled.div`
  display: none;

  img {
    width: 2.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 2rem;
  overflow: hidden;
`;
