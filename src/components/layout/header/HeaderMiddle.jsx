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
                DIGI<span>MART</span>
              </Link>
            </h2>
          </div>
        </MiddleLeft>
        <MiddleRight>
          <ul className="menu">
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
        </MiddleRight>
      </HeaderMidd>
    </HeaderMidContainer>
  );
};

export default HeaderMiddle;

const HeaderMidContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 3rem;
`;

const HeaderMidd = styled.div`
  height: 5rem;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MiddleLeft = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #e4e9eb;

  .logo {
    h2 {
      letter-spacing: 0.2rem;
      font-size: 3rem;
      color: var(--text-primary);
      margin: 0;

      span {
        color: tomato;
      }
    }
  }
`;
const MiddleRight = styled.div`
  flex: 1;
  height: 100%;

  .menu {
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;

    li {
      padding: 0 1rem;
      font-size: 1.3rem;
      letter-spacing: 1px;
      font-weight: 600;
      color: #000;
    }
  }
`;
