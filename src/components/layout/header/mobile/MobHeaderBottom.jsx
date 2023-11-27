import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useSelector } from "react-redux";
import { useGetMyFavouriteListQuery } from "../../../../redux/api/favourite/favouriteAPI";
import { useGetMyCartListQuery } from "../../../../redux/api/cart/cartAPI";

const MobHeaderBottom = () => {
  // select data from redux store
  const { role } = useSelector((state) => state.user.userInfo);
  const { authenticated } = useSelector((state) => state.user);

  // get my favourite list
  const { data: favData } = useGetMyFavouriteListQuery();
  // get my cart list
  const { data: cartData } = useGetMyCartListQuery();

  return (
    <BottomHeaderContainer>
      <BottomLeft>
        <NavLink to={"/"}>
          <MobileMenuBtn>
            <img src="/images/icons/home.svg" alt="home icon" />
            <span>Home</span>
          </MobileMenuBtn>
        </NavLink>
      </BottomLeft>
      <BottomRight>
        <NavLink to={"/products"}>
          <MobileMenuBtn>
            <img src="/images/icons/product.svg" alt="product icon" />
            <span>Products</span>
          </MobileMenuBtn>
        </NavLink>

        <NavLink to={"/favourite"}>
          <MobileMenuBtn>
            <img src="/images/icons/favourite.svg" alt="favourite icon" />
            <span>Favourite</span>
            <span className="badge">{favData?.favourites?.length}</span>
          </MobileMenuBtn>
        </NavLink>
        <NavLink to={"/cart"}>
          <MobileMenuBtn>
            <img src="/images/icons/cart.svg" alt="cart icon" />
            <span>Cart</span>
            <span className="badge">{cartData?.carts?.length}</span>
          </MobileMenuBtn>
        </NavLink>

        <NavLink to={"/account/myprofile"}>
          <MobileMenuBtn>
            <img src="/images/icons/person.svg" alt="account icon" />
            <span>Account</span>
          </MobileMenuBtn>
        </NavLink>
        {authenticated && role === "admin" && (
          <NavLink to={"/admin/dashboard"}>
            <MobileMenuBtn>
              <DashboardIcon color="info" fontSize="large" />
              <span>Dashboard</span>
            </MobileMenuBtn>
          </NavLink>
        )}
      </BottomRight>
    </BottomHeaderContainer>
  );
};

export default MobHeaderBottom;

const BottomHeaderContainer = styled.div`
  width: 100%;
  background-color: aliceblue;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;

  @media screen and (max-width: 576px) {
    padding: 0 1rem;
  }
`;
const BottomLeft = styled.div``;

const BottomRight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const MobileMenuBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  height: 4.5rem;
  min-width: 4.5rem;
  padding-top: 1rem;
  position: relative;
  &:hover {
    box-shadow: rgba(255, 155, 155, 0.3) 0px -50px 36px -28px inset;
  }
  & img {
    width: 2rem;
  }
  span {
    font-size: 1.1rem;
  }
  .badge {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
