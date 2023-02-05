import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AccountSidebar = ({ setSidebar, sidebar, sidebarRef }) => {
  return (
    <AccountSidebarContainer
      ref={sidebarRef}
      style={{ left: sidebar ? "0rem" : "-105%" }}
    >
      <AccUserName>
        <p>Hello, Md Shamim Hossain</p>
        <i onClick={() => setSidebar(false)} className="bi bi-x"></i>
      </AccUserName>

      <AccSidebaContent>
        <h4>Manage My Account</h4>
        <div className="links_box">
          <NavLink to={"/account/myprofile"}>My Profile</NavLink>
        </div>
        <div className="links_box">
          <NavLink to={"/account/updateprofile"}>Update Profile</NavLink>
        </div>
        <h4>My Orders</h4>
        <div className="links_box">
          <NavLink to={"/account/orders"}>Orders</NavLink>
        </div>
      </AccSidebaContent>
    </AccountSidebarContainer>
  );
};

export default AccountSidebar;

const AccountSidebarContainer = styled.div`
  min-width: 20rem;
  h4 {
    font-size: 1.6rem;
  }
  .links_box {
    padding-left: 1rem;
    a {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 50%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    background: #fff;
    padding: 0 2rem;
  }
`;

const AccUserName = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  i {
    font-size: 2.5rem;
    position: absolute;
    right: 0;
    top: -2rem;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const AccSidebaContent = styled.div``;
