import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Menu = ({ menu }) => {
  const [activeChild, setActiveChild] = useState(false);

  const navigate = useNavigate();

  // handle child menu
  const childHandler = () => {
    setActiveChild((prev) => !prev);
    navigate(menu?.child[0].link);
  };

  return (
    <MenuContainer active={activeChild}>
      {menu?.parent?.link ? (
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink parent_links" : "parent_links"
          }
          end
          to={menu?.parent?.link}
        >
          {menu?.parent?.icon}
          <span>{menu?.parent?.name}</span>
        </NavLink>
      ) : (
        <div className="parent_links" onClick={childHandler}>
          {menu?.parent?.icon}
          <div className="empty_link">
            {menu?.parent?.name}
            <span>{">"}</span>
          </div>
        </div>
      )}

      {menu?.child && (
        <Child active={activeChild}>
          {menu?.child?.map((child) => (
            <NavLink
              key={child?.link}
              end
              to={child.link}
              className={({ isActive }) => (isActive ? "activeLink " : "")}
            >
              <span>{child?.icon}</span>
              <span>{child?.name}</span>
            </NavLink>
          ))}
        </Child>
      )}
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding-left: 1rem;
  width: 100%;
  font-weight: 500;
  font-size: 1.4rem;
  user-select: none;

  .parent_links {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.3rem 0;
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
      .empty_link {
        span {
          color: tomato;
        }
      }
    }

    .empty_link {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        transform: ${({ active }) =>
          active ? "rotate(-90deg)" : "rotate(90deg)"};
        color: ${({ active }) => (active ? "tomato" : "")};
      }
    }
  }
  a {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: var(--text-secondary);
    cursor: pointer;
  }
  .activeLink {
    color: tomato;
  }
`;

const Child = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  padding-left: 4rem;
  gap: 0.5rem;
`;
