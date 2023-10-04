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
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <AuthMenuContainer>
      <img src="/images/icons/person-fill.svg" alt="Register/login Avatar" />

      {authenticated ? (
        <button className="logout_button" onClick={LogOutHandler}>
          Log Out
        </button>
      ) : (
        <div className="register_login">
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeNavLink" : undefined
            }
            to={"/register"}
          >
            Register
          </NavLink>
          /
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeNavLink" : undefined
            }
            to={"/login"}
          >
            Login
          </NavLink>
        </div>
      )}
    </AuthMenuContainer>
  );
};

export default AuthMenu;
const AuthMenuContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: 1rem 0;
  img {
    margin-right: 0.5rem;
  }
  .logout_button {
    width: 7rem;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    font-size: 1.3rem;
    &:hover {
      color: tomato;
    }
  }
  .register_login {
    margin-bottom: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    & a {
      font-size: 1.3rem;
      &:hover {
        color: tomato;
        @media screen and (max-width: 768px) {
          color: #fff;
        }
      }
    }

    .activeNavLink {
      color: tomato;
      @media screen and (max-width: 768px) {
        color: #fff;
      }
    }
  }
`;
