import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const HeaderMiddle = () => {
  return (
    <HeaderMidContainer>
      <HeaderMidd>
        <MiddleLeft>
          <div className="logo">
            <h2>
              <Link to={"/"}>
                {" "}
                DIGI<span>MART</span>
              </Link>
            </h2>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/"}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/blog"}
                >
                  BLOG
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/products"}
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </MiddleLeft>
        <MiddleRight>
          <div className="our_store">
            <img src="/images/icons/location.svg" alt="" />
            <div>
              <h5>Our Store</h5>
              <h6>Location</h6>
            </div>
          </div>
          <div className="call_center">
            <img src="/images/icons/call.svg" alt="" />
            <div>
              <h6>Call-customer services</h6>
              <h5>+84-0123-456-789</h5>
            </div>
          </div>
        </MiddleRight>
      </HeaderMidd>
    </HeaderMidContainer>
  );
};

export default HeaderMiddle;

const HeaderMidContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderMidd = styled.div`
  width: 100%;
  height: 6rem;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: #666;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MiddleLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    & h2 {
      letter-spacing: 0.3rem;
      font-size: 3.2rem;
      color: #000;

      span {
        color: tomato;
      }
    }
  }
  .menu {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        padding: 0 1rem;
        font-size: 1.3rem;
        letter-spacing: 1px;
        font-weight: 600;
        color: #000;
      }
    }
  }
`;
const MiddleRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  .our_store,
  .call_center {
    display: flex;
    margin: 0 1rem;
    font-weight: 500;

    &:first-child {
      border-right: 1px solid #e4e9eb;
      padding-right: 1rem;
    }

    img {
      width: 2.2rem;
    }

    & div {
      padding-left: 0.5rem;
    }
  }
  .call_center {
    display: flex;
  }
`;
