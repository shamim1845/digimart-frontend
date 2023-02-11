import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import DashboardIcon from "@mui/icons-material/Dashboard";
import Department from "./Department";

import ProductSearch from "../../products/ProductSearch";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  let categoryRef = useRef();

  const [activeDept, setActiveDept] = useState(false);

  // select data from redux store
  const {
    userInfo: { role },
  } = useSelector((state) => state.user);
  const { authenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.user);
  const { favouriteItems } = useSelector((state) => state.user);

  //  hide category container when mouseDown outside of category Container
  useEffect(() => {
    function handleListener(e) {
      if (!categoryRef?.current?.contains(e.target)) {
        setActiveDept(false);
      }
    }
    document.addEventListener("mousedown", handleListener);
    return () => {
      document.removeEventListener("mousedown", handleListener);
    };
  }, []);

  //  toogle category
  const categorytHandler = () => {
    setActiveDept((prev) => !prev);
  };
  console.log(role);
  return (
    <HeaderBottomContainer>
      <HeaderBottoms>
        <BottomLeftContainer ref={categoryRef}>
          <BottomLeft onClick={categorytHandler}>
            <img src="/images/icons/menu-down.svg" alt="" />
            <h4>ALL CATEGORIES</h4>
          </BottomLeft>
          {activeDept ? <Department /> : null}
        </BottomLeftContainer>
        <BottomCenter>
          <ProductSearch />
        </BottomCenter>
        <BottomRight>
          <Link to="/account/myprofile">
            <div className="button">
              <button type="submit">
                <img src="/images/icons/person.svg" alt="" />
              </button>
            </div>
          </Link>
          <Link to="/favourite">
            <div className="button">
              <button type="submit">
                <img src="/images/icons/favourite.svg" alt="" />
                <span>{favouriteItems?.length}</span>
              </button>
            </div>
          </Link>
          <Link to="/cart">
            <div className="button">
              <button>
                <img src="/images/icons/cart.svg" alt="" />
                <span>{cartItems?.length}</span>
              </button>
            </div>
          </Link>
          {authenticated && role === "admin" && (
            <Link to="/admin/dashboard">
              <div className="button">
                <button type="submit">
                  <DashboardIcon color="info" fontSize="large" />
                </button>
              </div>
            </Link>
          )}
        </BottomRight>
      </HeaderBottoms>
    </HeaderBottomContainer>
  );
};

export default HeaderBottom;

const HeaderBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: tomato;
  width: 100%;
  padding: 0 3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderBottoms = styled.div`
  width: 100%;
  height: 7rem;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: #666;
`;
const BottomLeftContainer = styled.div`
  position: relative;
`;
const BottomLeft = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 2;
  background-color: #fff;
  height: 4.5rem;
  border-radius: 0.5rem;
  min-width: 18rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  h4 {
    color: tomato;
    margin-bottom: 0px;
  }
`;
const BottomCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 10;
  background-color: #fff;
  height: 4.5rem;
  margin: 0 2rem;
  border-radius: 0.5rem;

  form {
    width: 80%;

    & input {
      width: 100%;
      border: none;
      padding-left: 1rem;
      border-radius: 0.5rem;
      font-size: 1.4rem;
      &::placeholder {
        font-size: 1.4rem;
      }

      &:focus {
        outline: none;
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
      align-items: center;
      background-color: #fff;
      border: none;
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 0.5rem;
      margin: 0 1rem;
      position: relative;
      &:hover {
        box-shadow: rgba(255, 155, 155, 0.3) 0px -50px 36px -28px inset;
      }
      & img {
        width: 2rem;
      }
      & span {
        position: absolute;
        top: 0;
        right: 0.2rem;
        font-size: 1.3rem;
      }
    }
  }
  &:last-child .button button {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
