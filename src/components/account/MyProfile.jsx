import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ChangePassword from "../Auth/ChangePassword";
const MyProfile = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/v1/me").then((res) => {
      setUser(res.data.user);
    });
  }, []);
  //   console.log(user);
  return (
    <ProfileContainer>
      <Title>
        <h2>My Profile</h2>
      </Title>
      <Content>
        <UserImage>
          <img src={user?.avatar?.url} alt="profile_picture" />
        </UserImage>
        <UserDetails>
          <div className="detils_group">
            <p>Full name</p>
            <h6>{user?.name}</h6>
          </div>
          <div className="detils_group">
            <p>Email Address</p>
            <h6>{user?.email}</h6>
          </div>
          <div className="detils_group">
            <p>Mobile</p>
            <h6>{user?.mobile}</h6>
          </div>
        </UserDetails>
        <UserDetails>
          <div className="detils_group">
            <p>Birthday</p>
            <h6>{user?.birthday}</h6>
          </div>
          <div className="detils_group">
            <p>Gender</p>
            <h6>{user?.gender}</h6>
          </div>
        </UserDetails>
        <ButtonContainer>
          <Link to={"/account/updateProfile"}>
            {" "}
            <button className="edit_profile">EDIT PROFILE</button>
          </Link>

          <button
            className="change_password"
            onClick={() => setIsChangePassword((prev) => !prev)}
          >
            CHANGE PASSWORD
          </button>
        </ButtonContainer>
        {isChangePassword && (
          <ChangePasswordContainer>
            <ChangePassword />
          </ChangePasswordContainer>
        )}
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

  @media screen and (max-width: 768px) {
  }
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
  @media screen and (max-width: 450px) {
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-top: 2rem;

  width: 90%;

  h2 {
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    h2 {
      text-align: center;
    }
  }
`;

const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  img {
    width: 15rem;
    height: 15rem;
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
    p {
      font-size: 1.2rem;
    }
    h6 {
      font-size: 1.4rem;
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
    &:hover {
      background-color: #177e92;
      border: 2px solid #177e92;
    }
    @media screen and (max-width: 450px) {
      width: 18rem;
    }
  }
`;

const ChangePasswordContainer = styled.div``;
