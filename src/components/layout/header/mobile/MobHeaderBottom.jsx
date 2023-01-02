import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const mobileBottomHeader = () => {
  return (
    <>
      <BottomHeaderContainer>
        <BottomLeft>
          <div className="button">
            <NavLink to={"/"}>
              <button type="submit">
                <img src="/images/icons/home.svg" alt="" />
                <p>Home</p>
              </button>
            </NavLink>
          </div>
        </BottomLeft>
        <BottomRight>
          <div className="button">
            <NavLink to={"/products"}>
              <button type="submit">
                <img src="/images/icons/product.svg" alt="" />
                <p>Products</p>
              </button>
            </NavLink>
          </div>

          <div className="button">
            <NavLink to={"/favourite"}>
              <button type="submit">
                <img src="/images/icons/favourite.svg" alt="" />
                <p>Favourite</p>
              </button>
            </NavLink>
          </div>
          <div className="button">
            <NavLink to={"/cart"}>
              <button type="submit">
                <img src="/images/icons/cart.svg" alt="" />
                <p>Cart</p>
              </button>
            </NavLink>
          </div>

          <div className="button">
            <NavLink to={"/dashboard"}>
              <button type="submit">
                <img src="/images/icons/person.svg" alt="" />
                <p>Account</p>
              </button>
            </NavLink>
          </div>
        </BottomRight>
      </BottomHeaderContainer>
    </>
  );
};

export default mobileBottomHeader;

const BottomHeaderContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 10000;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const BottomLeft = styled.div`
  flex: 1;

  .button {
    & button {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: none;
      height: 4.5rem;
      width: 4.5rem;
      margin: 0 1rem;
      padding-top: 0.5rem;
      &:hover {
        box-shadow: rgba(255, 155, 155, 0.3) 0px -50px 36px -28px inset;
      }
      & img {
        width: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

const BottomRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  .button {
    & button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      border: none;
      height: 4.5rem;
      min-width: 4.5rem;
      margin-right: 1rem;
      padding-top: 0.5rem;
      &:hover {
        box-shadow: rgba(255, 155, 155, 0.3) 0px -50px 36px -28px inset;
      }
      & img {
        width: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
