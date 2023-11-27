import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ChangePassword from "../../Auth/ChangePassword";
import Title from "../../utils/reUseableComponents/Title";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../../redux/user/userSelector";
import MUIButton from "../../utils/reUseableComponents/MUIButton";
const MyProfile = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const user = useSelector(selectUserInfo);

  return (
    <ProfileContainer>
      <Title variant="h1" text="My Profile" style={{ textAlign: "center" }} />

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
          <Link to={"/account/updateProfile"} style={{ flex: "1" }}>
            <MUIButton style={{ margin: "0" }}>EDIT PROFILE</MUIButton>
          </Link>

          <MUIButton
            style={{ margin: "0", flex: "1" }}
            onClick={() => setIsChangePassword((prev) => !prev)}
          >
            CHANGE PASSWORD
          </MUIButton>
        </ButtonContainer>

        {isChangePassword && (
          <ChangePassword setIsChangePassword={setIsChangePassword} />
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
  padding: 2rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 576px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  border-radius: 0.5rem;
  box-shadow: var(--shadow-1);
  padding: 5rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    box-shadow: var(--shadow-3);
  }
  @media screen and (max-width: 576px) {
    padding: 2rem;
  }
`;

const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
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
  gap: 3rem;
  margin-bottom: 5rem;

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
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
