import React from "react";
import styled from "styled-components";
import Sidebar from "../utils/reUseableComponents/sideBar/account/Sidebar";

const sidebarMenu = [
  {
    id: 100,
    title: "Manage Account",
    links: [
      {
        id: 1,
        parent: {
          name: "My Profile",
          link: "/account/myprofile",
          icon: <i className="bi bi-person-circle"></i>,
        },
      },
      {
        id: 2,
        parent: {
          name: "Update Profile",
          link: "/account/updateprofile",
          icon: <i className="bi bi-pencil-square"></i>,
        },
      },
    ],
  },
  {
    id: 101,
    title: "My Orders",
    links: [
      {
        id: 1,
        parent: {
          name: "Orders",
          link: "/account/myorder",
          icon: <i className="bi bi-bag-check"></i>,
        },
      },
    ],
  },
];
const AccountSidebar = ({ setSidebar, sidebar, sidebarRef }) => {
  return (
    <AccountSidebarContainer sideBar={sidebar} ref={sidebarRef}>
      <Sidebar sidebarMenu={sidebarMenu} setShowSidebar={setSidebar} />
    </AccountSidebarContainer>
  );
};

export default AccountSidebar;

const AccountSidebarContainer = styled.div`
  min-width: 20rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  max-height: 100vh;
  position: sticky;
  top: 0;

  @media screen and (max-width: 768px) {
    min-width: 30rem;
    position: fixed;
    left: ${({ sideBar }) => (sideBar ? "0" : "-30rem")};
    top: 0;
    height: 100vh;
    transition: all 0.3s ease-in-out;
    background: aliceblue;
    border: none;
    padding: 0 2rem;
    z-index: 10000;
  }
`;
