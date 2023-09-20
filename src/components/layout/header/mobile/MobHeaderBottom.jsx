import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useSelector } from "react-redux";

const MobHeaderBottom = () => {
  // select data from redux store
  const { role } = useSelector((state) => state.user.userInfo);
  const { authenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.user);
  const { favouriteItems } = useSelector((state) => state.user);
  return (
    <>
      <BottomHeaderContainer>
        <BottomLeft>
          <div className="button">
            <NavLink to={"/"}>
              <button>
                <img src="/images/icons/home.svg" alt="home icon" />
                <p>Home</p>
              </button>
            </NavLink>
          </div>
        </BottomLeft>
        <BottomRight>
          <div className="button">
            <NavLink to={"/products"}>
              <button>
                <img src="/images/icons/product.svg" alt="product icon" />
                <p>Products</p>
              </button>
            </NavLink>
          </div>

          <div className="button">
            <NavLink to={"/favourite"}>
              <button>
                <img src="/images/icons/favourite.svg" alt="favourite icon" />
                <p>Favourite</p>
                <span>{favouriteItems?.length}</span>
              </button>
            </NavLink>
          </div>
          <div className="button">
            <NavLink to={"/cart"}>
              <button>
                <img src="/images/icons/cart.svg" alt="cart icon" />
                <p>Cart</p>
                <span>{cartItems?.length}</span>
              </button>
            </NavLink>
          </div>

          <div className="button">
            <NavLink to={"/account/myprofile"}>
              <button>
                <img src="/images/icons/person.svg" alt="account icon" />
                <p>Account</p>
              </button>
            </NavLink>
          </div>
          {authenticated && role === "admin" && (
            <div className="button">
              <NavLink to={"/admin/dashboard"}>
                <button>
                  <DashboardIcon color="info" fontSize="large" />
                  <p>Dashboard</p>
                </button>
              </NavLink>
            </div>
          )}
        </BottomRight>
      </BottomHeaderContainer>
    </>
  );
};

export default MobHeaderBottom;

const BottomHeaderContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 1000;
  padding: 0 2rem;

  @media screen and (min-width: 769px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1 2rem;
  }
  @media screen and (max-width: 576px) {
    /* padding: 1rem 1rem; */
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
      /* margin: 0 1rem; */
      padding-top: 1rem;
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
      padding-top: 1rem;
      position: relative;
      &:hover {
        box-shadow: rgba(255, 155, 155, 0.3) 0px -50px 36px -28px inset;
      }
      & img {
        width: 2rem;
      }
      p {
        font-size: 1rem;
      }
      span {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
`;
