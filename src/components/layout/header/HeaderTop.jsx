import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addAuth } from "../../../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { backendUrl } from "../../../App";

const HeaderTop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.auth);

  const digimartToken = localStorage.getItem("digimartToken");
  // console.log(digimartToken);
  if (digimartToken) {
    dispatch(addAuth(true));
  }

  const LogOutHandler = async (e) => {
    e.preventDefault();
    const res = await axios.get(`${backendUrl}/api/v1/logout`);
    console.log(res);
    if (res.status === 200) {
      toast(res.data.message);
      dispatch(addAuth(false));
      localStorage.removeItem("digimartToken");

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <HeaderTopContainer>
      <ToastContainer />
      <HeaderTopBar>
        <div className="left">
          <div>
            <img src="/images/icons/email-envelop.svg" alt="" />
            <p>Email: support@gmail.com</p>
          </div>
          <div>
            <img src="/images/icons/tag-fill.svg" alt="" />
            <p>Today Deals</p>
          </div>
        </div>
        <div className="right">
          <div className="register_login">
            <img src="/images/icons/person-fill.svg" alt="" />
            {authenticated ? (
              <p style={{ cursor: "pointer" }} onClick={LogOutHandler}>
                Log Out{" "}
              </p>
            ) : (
              <p>
                <NavLink to={"/register"}> Register</NavLink> or
                <NavLink to={"/login"}> Login</NavLink>
              </p>
            )}
          </div>
          <div className="currency">
            <select name="" id="">
              <option value="usd">USD</option>
              <option value="bdt">BDT</option>
            </select>
          </div>
          <div className="site_language">
            <img src="/images/icons/bd-flag.svg" alt="" />
          </div>
        </div>
      </HeaderTopBar>
    </HeaderTopContainer>
  );
};

export default HeaderTop;

const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 5px solid tomato;
  border-bottom: 1px solid #e4e9eb;
  padding: 0 3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const HeaderTopBar = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: #666;

  img {
    margin-right: 0.5rem;
  }

  .left {
    display: flex;
    flex: 2;
    align-items: center;
    border-right: 1px solid #e4e9eb;

    p {
      margin-bottom: 0;
    }
    & div {
      display: flex;

      align-items: center;
      &:first-child {
        margin-right: 1rem;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0;
    }

    .register_login {
      display: flex;
      border-right: 1px solid #e4e9eb;
      padding: 1rem;
      font-size: 1.1rem;
      font-weight: 500;
      transition: all 0.5s;
      & a:hover {
        color: tomato;
      }
    }
    .currency {
      padding: 1rem;
      border-right: 1px solid #e4e9eb;
      & select {
        border: none;
        font-size: 1.2rem;
      }
    }
    .site_language {
      display: flex;
      align-items: center;
      padding: 1rem;
      border-right: 1px solid #e4e9eb;

      img {
        width: 25px;
      }
    }
  }
`;
