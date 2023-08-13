import React, { useEffect } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../logo/Logo";
import { useSelector } from "react-redux";

const SidebarMenu = ({ setSideBar }) => {
  const sidebarRef = useRef(null);
  const { categories } = useSelector((state) => state.products.allCategories);

  useEffect(() => {
    function sidebarHandler(e) {
      if (!sidebarRef.current.contains(e.target)) {
        setSideBar(false);
      }
    }
    window.addEventListener("mousedown", sidebarHandler);

    return () => {
      window.removeEventListener("mousedown", sidebarHandler);
    };
  }, [setSideBar]);
  return (
    <>
      <SidebarMenuContainer ref={sidebarRef}>
        <MobileMenuTop>
          <CloseButton onClick={() => setSideBar(false)}>
            <i className="bi bi-x"></i>
          </CloseButton>
          <Logo />
        </MobileMenuTop>

        <MobileMenu>
          <TrendingDept>
            <h4>Browse All Categories</h4>
            {categories &&
              categories.map((cat, index) => {
                return (
                  <DepartMent key={index}>
                    <ul>
                      <li>{cat}</li>
                    </ul>
                  </DepartMent>
                );
              })}
          </TrendingDept>
        </MobileMenu>
      </SidebarMenuContainer>
    </>
  );
};

export default SidebarMenu;

const DepartMent = styled.div``;

const SidebarMenuContainer = styled.div`
  height: 100%;
  /* width: 100%;
  max-width: 30rem; */

  background: #fff;
  left: 0;
  position: fixed;
  z-index: 10000;
`;

const MobileMenuTop = styled.div`
  height: 8rem;
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
  height: 100%;
  overflow-y: auto;
  padding-bottom: 20rem;
  padding-right: 1rem;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: tomato;
  }

  a {
    color: #666;
    width: 100%;
    padding: 0.5rem 0;
    &:hover {
      color: tomato;
    }
  }
  h4 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  ul {
    li {
      font-size: 1.4rem;
      text-transform: capitalize;
    }
  }
`;
const TrendingDept = styled.div`
  /* position: relative; */
`;
