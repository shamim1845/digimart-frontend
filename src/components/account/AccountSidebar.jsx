import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const accountNavlinksConstant = [
  {
    id: 1,
    title: "Manage My Account",
    links: [
      {
        id: 1,
        name: "My Profile",
        link: "/account/myprofile",
      },
      {
        id: 2,
        name: "Update Profile",
        link: "/account/updateprofile",
      },
    ],
  },
  {
    id: 2,
    title: "My Orders",
    links: [
      {
        id: 1,
        name: "Orders",
        link: "/account/myorder",
      },
    ],
  },
];
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
        {accountNavlinksConstant.map((navlink) => {
          return (
            <div key={navlink?.id} className="navlink_group">
              <h4>{navlink?.title}</h4>
              <div className="links_box">
                {navlink.links.map((child) => {
                  return (
                    <NavLink key={child?.id} to={child?.link}>
                      {child?.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </AccSidebaContent>
    </AccountSidebarContainer>
  );
};

export default AccountSidebar;

const AccountSidebarContainer = styled.div`
  min-width: 20rem;

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
  @media screen and (max-width: 450px) {
    p {
      margin-top: 1rem;
    }
  }
  i {
    font-size: 2.5rem;
    position: absolute;
    right: -1rem;
    top: -2rem;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const AccSidebaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .navlink_group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    h4 {
      font-size: 1.6rem;
    }
    .links_box {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      a {
        font-size: 1.4rem;
      }
    }
  }
`;
