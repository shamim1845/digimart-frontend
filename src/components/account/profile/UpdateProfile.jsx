import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Form, Formik } from "formik";
import * as yup from "yup";
import MediaUpload from "../../utils/helperFunction/MediaUpload";
import { useNavigate } from "react-router-dom";
import Title from "../../utils/reUseableComponents/Title";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../../redux/user/userSelector";
import { fetchAsyncUser } from "../../../redux/user/userSlice";
import Button from "../../utils/reUseableComponents/Buttons";
import TextInput from "../../utils/formik/TextInput";
import SelectBox from "../../utils/formik/SelectBox";

const MyProfile = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [btnDissable, setBtnDissable] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  return (
    <UpdateProfileContainer>
      <Title
        variant="h1"
        text="Update Profile"
        style={{ textAlign: "center" }}
      />

      <Content>
        <UserImage>
          <img
            onClick={() => setIsProfile(true)}
            src={user?.avatar?.url}
            alt="profile_picture"
          />
        </UserImage>

        {isProfile && (
          <AvatarPicker>
            <label htmlFor="profilePic">Profile Picture</label>
            <input
              type="file"
              name="profilePic"
              onChange={(e) => setProfilePic(e.target.files)}
            />
          </AvatarPicker>
        )}
        <br />
        <Formik
          initialValues={{
            name: user?.name || "",
            email: user?.email || "",
            mobile: user?.mobile || "",
            birthday: user?.birthday || "",
            gender: user?.gender || "",
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .required("Name is required.")
              .min(3, "Name must have at least 3 characters."),
            email: yup
              .string()
              .required("Email is required.")
              .email("Email must be a valid email."),
            mobile: yup.string().max(11).required("Phone Number is required."),
            birthday: yup.string().required("Date of birth is required."),
            gender: yup.string().required("Gender  is required."),
          })}
          onSubmit={(values, { resetForm }) => {
            setBtnDissable(true);
            const { name, email, mobile, birthday, gender } = values;

            function updateProfile(mediaUrls = []) {
              const avatar = {
                public_id: mediaUrls[0]?.public_id
                  ? mediaUrls[0]?.public_id
                  : user.avatar.public_id,
                url: mediaUrls[0]?.secure_url
                  ? mediaUrls[0]?.secure_url
                  : user.avatar.url,
              };

              axios
                .put(`/api/v1/profile/update`, {
                  name,
                  email,
                  avatar,
                  mobile,
                  birthday,
                  gender,
                })
                .then((res) => {
                  if (res.status === 200 && res.data.success) {
                    toast.success("Profile update Sucessfully.");
                    dispatch(fetchAsyncUser());

                    setTimeout(() => {
                      navigate("/account/myprofile");
                    }, 2000);
                  } else {
                    toast.info(res.data.message);
                  }
                })
                .catch((err) => {
                  console.log(err.message);
                  toast.error(err.message);
                });
            }

            if (profilePic) {
              MediaUpload(profilePic, "user").then((res) => {
                updateProfile(res);
              });
            } else {
              updateProfile();
            }
          }}
          enableReinitialize
        >
          <Form>
            <TextInput
              label="Full Name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <TextInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <TextInput
              label="Phone"
              type="tel"
              name="mobile"
              placeholder="Enter your phone number"
            />
            <TextInput label="Birthday" type="date" name="birthday" />
            <SelectBox label="Gender" name="gender">
              <option hidden>Choose</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"other"}>Other</option>
            </SelectBox>
            <br />
            <Button
              text={"Update Profile"}
              type="submit"
              disabled={btnDissable}
            />
          </Form>
        </Formik>
      </Content>
    </UpdateProfileContainer>
  );
};

export default MyProfile;

const UpdateProfileContainer = styled.div`
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
  gap: 2rem;
  margin-bottom: 2rem;
  &:hover {
  }

  img {
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const AvatarPicker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
