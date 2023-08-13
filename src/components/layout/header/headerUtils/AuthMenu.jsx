import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const AuthMenu = () => {
  const navigate = useNavigate();

  const { authenticated } = useSelector((state) => state.user);

  // Log Out Handler
  const LogOutHandler = async () => {
    const res = await axios.get(`/api/v1/logout`);

    if (res.status === 200) {
      toast.info(res.data.message);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <AuthMenuContainer>
      <div className="register_login_logout">
        <img src="/images/icons/person-fill.svg" alt="Register/login Avatar" />
        {authenticated ? (
          <button className="logout_button" onClick={LogOutHandler}>
            Log Out
          </button>
        ) : (
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavLink" : undefined
              }
              to={"/register"}
            >
              Register
            </NavLink>
            or
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavLink" : undefined
              }
              to={"/login"}
            >
              Login
            </NavLink>
          </span>
        )}
      </div>
    </AuthMenuContainer>
  );
};

export default AuthMenu;
const AuthMenuContainer = styled.div`
  display: flex;

  .register_login_logout {
    display: flex;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.5s;
    img {
      margin-right: 0.5rem;
    }
    .logout_button {
      width: 7rem;
      border: none;
      &:hover {
        color: tomato;
      }
    }
    span {
      margin-bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      & a:hover {
        color: tomato;
        @media screen and (max-width: 768px) {
          color: #fff;
        }
      }

      .activeNavLink {
        color: tomato;
        @media screen and (max-width: 768px) {
          color: #fff;
        }
      }
    }
  }
  .currency {
    padding: 1rem;
    border-right: 1px solid #e4e9eb;
    @media screen and (max-width: 768px) {
      border: none;
    }
    & select {
      cursor: pointer;
      border: none;
      font-size: 1.2rem;
    }
  }
`;
