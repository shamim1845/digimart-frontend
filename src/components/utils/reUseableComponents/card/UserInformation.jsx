import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import useSidebarHandler from "../../customHooks/useSidebarHandler";
import { selectUserInfo } from "../../../../redux/user/userSelector";
import Title from "../Title";

const UserInformation = () => {
  const [active, setActive] = useState(false);
  const avatarRef = useRef(null);
  const navigate = useNavigate();

  const { avatar, name, email } = useSelector(selectUserInfo);

  // handle setActive when clicked outside of Card component
  useSidebarHandler(avatarRef, setActive);

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
    <Container>
      <div onClick={() => setActive((prev) => !prev)}>
        {avatar?.url ? (
          <img
            src={avatar?.url}
            alt="user"
            width={35}
            style={{ borderRadius: "50%", cursor: "pointer" }}
          />
        ) : (
          <div className="user_info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </div>
        )}
      </div>

      <Card active={active} ref={avatarRef}>
        <div className="card_top">
          <Title variant="h3" text={name} style={{ marginBottom: "0.2rem" }} />
          <span>{email}</span>
        </div>

        <ul>
          <li>
            <Link to={"/account/myprofile"}>My Profile</Link>
          </li>
          <li>
            <Link to={"/account/updateprofile"}>Update Profile</Link>
          </li>
        </ul>

        <br />
        <button className="logout_button" onClick={LogOutHandler}>
          Log Out
        </button>
      </Card>
    </Container>
  );
};

export default UserInformation;

const Container = styled.div`
  .user_info {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 50%;
    background-color: pink;
    border: 1px solid pink;
    cursor: pointer;
  }
`;

const Card = styled.div`
  position: fixed;
  right: 2rem;
  min-width: 10rem;
  margin-top: 0.5rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0 0 0.5rem 0.5rem;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? "vissible" : "hidden")};
  translate: ${(props) => (props.active ? "0" : "7.5rem -15rem")};
  box-shadow: rgba(0, 0, 0, 0.116) 1px 2px 7px;

  ul {
    margin: 2rem 0 0;
    display: flex;
    gap: 0.3rem;
    flex-direction: column;

    li {
      transition: all 0.3s ease-in-out;
      a {
        &:hover {
          color: tomato;
        }
      }
    }
  }

  .logout_button {
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: tomato;
    }
  }
`;
