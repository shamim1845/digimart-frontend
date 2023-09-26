import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = ({ menu }) => {
  return (
    <MenuContainer>
      <div className="parent_links">
        {menu?.parent?.icon}
        {menu?.parent?.link ? (
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
            to={menu?.parent?.link}
          >
            {menu?.parent?.name}
          </NavLink>
        ) : (
          <span className="no_link"> {menu?.parent?.name}</span>
        )}
      </div>
      {menu?.child && (
        <ul className="sub_menu">
          {menu?.child?.map((child) => (
            <NavLink key={child?.link} to={child.link}>
              <li>
                <span>{child?.icon}</span>
                <span>{child?.name}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  gap: 0.5rem;

  .parent_links {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .sub_menu {
    padding-left: 4rem;
    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        font-size: 1.3rem;
      }
    }
  }
  .activeLink {
    color: tomato;
  }
  a {
    font-size: 1.4rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: tomato;
    }
  }
  .no_link {
    font-size: 1.4rem;
    color: var(--text-primary);
  }
`;
