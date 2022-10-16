import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarMenu = ({ setSideBar, Ref }) => {
  return (
    <>
      <SidebarMenuContainer ref={Ref}>
        <MobileMenuTop>
          <CloseButton onClick={() => setSideBar(false)}>
            <i className="bi bi-x"></i>
          </CloseButton>
          <div className="logo_sidebar">
            <h3>Browse</h3>
            <h2>
              DIGI <span>MART</span>
            </h2>
          </div>
        </MobileMenuTop>

        <MobileMenu>
          <TrendingDept>
            <h4>Trending</h4>
            <ul>
              <NavLink to={"/"}>
                {" "}
                <li>Movers & Shakers</li>{" "}
              </NavLink>
            </ul>
          </TrendingDept>
          <TopDepartment>
            <h4>Top Departments</h4>
            <ul>
              <NavLink to={"/"}>
                <li>Home</li>{" "}
              </NavLink>
              <NavLink to={"/"}>
                <li>Health & HouseHold</li>{" "}
              </NavLink>
              <NavLink to={"/"}>
                <li>Books</li>{" "}
              </NavLink>
              <NavLink to={"/"}>
                <li>PC</li>{" "}
              </NavLink>
            </ul>
          </TopDepartment>
          <AllDepartments>
            <ul>
              <NavLink to={"/"}>
                {" "}
                <li>Movers & Shakers </li>{" "}
              </NavLink>
            </ul>
          </AllDepartments>
        </MobileMenu>
      </SidebarMenuContainer>
    </>
  );
};

export default SidebarMenu;

const SidebarMenuContainer = styled.div`
  height: 100%;
  width: 70%;
  background: #fff;
  left: 0;
  position: fixed;
  z-index: 10000;
`;

const MobileMenuTop = styled.div`
  height: 10rem;
  background-color: tomato;
  padding-left: 2rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  .logo_sidebar {
    h3 {
      color: #fff;
      font-size: 2.2rem;
    }
    h2 {
      letter-spacing: 0.1rem;
      font-size: 2.7rem;
      span {
        color: #fff;
      }
    }
  }
`;

const CloseButton = styled.div`
  /* display: flex;
justify-content: flex-end; */
  /* position: fixed; */
  i {
    font-size: 3.5rem;
    margin-right: 0.5rem;
    color: #000;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
      color: #fff;
    }
  }
`;
const MobileMenu = styled.div`
  margin: 2rem;
  a {
    color: #666;
    width: 100%;
    padding: 0.5rem 0;
    &:hover {
      color: tomato;
    }
  }
  h4 {
    font-size: 1.7rem;
  }
  ul {
    li {
      font-size: 1.4rem;
      line-height: 4rem;

      /* background: #000; */
    }
  }
`;
const TrendingDept = styled.div``;

const TopDepartment = styled.div`
  margin-top: 2rem;
`;

const AllDepartments = styled.div``;
