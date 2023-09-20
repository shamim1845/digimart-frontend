import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ChangePassword from "../Auth/ChangePassword";
import Title from "../utils/reUseableComponents/Title";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/user/userSelector";
const MyProfile = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const user = useSelector(selectUserInfo);

  return (
    <ProfileContainer>
      <Title
        variant="h2"
        text="My Profile"
        style={{ textAlign: "center", marginTop: "2rem" }}
      />

      <Content>
        <UserImage>
          <img src={user?.avatar?.url} alt="profile_picture" />
        </UserImage>

        <UserDetails>
          <div className="detils_group">
            <span>Full name</span>
            <span>{user?.name}</span>
          </div>
          <div className="detils_group">
            <span>Email Address</span>
            <span>{user?.email}</span>
          </div>
          <div className="detils_group">
            <span>Mobile</span>
            <span>{user?.mobile}</span>
          </div>
        </UserDetails>

        <UserDetails>
          <div className="detils_group">
            <span>Birthday</span>
            <span>{user?.birthday}</span>
          </div>
          <div className="detils_group">
            <span>Gender</span>
            <span>{user?.gender}</span>
          </div>
        </UserDetails>

        <ButtonContainer>
          <Link to={"/account/updateProfile"}>
            <button className="edit_profile">EDIT PROFILE</button>
          </Link>

          <button
            className="change_password"
            onClick={() => setIsChangePassword((prev) => !prev)}
          >
            CHANGE PASSWORD
          </button>
        </ButtonContainer>

        {isChangePassword && <ChangePassword />}
      </Content>
    </ProfileContainer>
  );
};

export default MyProfile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5rem;
  margin: 2rem;
  width: 90%;
  @media screen and (max-width: 768px) {
    margin: 0 5rem;
  }
  @media screen and (max-width: 576px) {
    padding: 2rem;
  }
`;

const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  img {
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const UserDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 3rem;
  gap: 1rem;

  .detils_group {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    span:last-child {
      font-size: 1.4rem;
      color: var(--text-primary);
      font-weight: 500;
    }
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
  .edit_profile,
  .change_password {
    width: 25rem;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #1a9cb7;
    border: 2px solid #1a9cb7;
    color: #fff;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #177e92;
      border: 2px solid #177e92;
    }
    @media screen and (max-width: 450px) {
      width: 18rem;
    }
  }
`;
