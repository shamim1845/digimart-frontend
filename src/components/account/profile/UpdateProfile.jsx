import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import MediaUpload from "../../utils/helperFunction/MediaUpload";
import { useNavigate } from "react-router-dom";
import Title from "../../utils/reUseableComponents/Title";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../../redux/user/userSelector";
import { fetchAsyncUser } from "../../../redux/user/userSlice";

const MyProfile = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [btnDissable, setBtnDissable] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
      mobile: user?.mobile || "",
      birthday: user?.birthday || "",
      gender: user?.gender || "",
    },
    enableReinitialize: true,
    validationSchema: yup.object({
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
    }),
    onSubmit: (values, { resetForm }) => {
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
              }, 3000);
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
    },
  });

  return (
    <UpdateProfileContainer>
      <Title
        variant="h1"
        text="Update Profile"
        style={{ textAlign: "center", marginTop: "2rem" }}
      />

      <Content>
        <UserImage onClick={() => setIsProfile(true)}>
          <img src={user?.avatar?.url} alt="profile_picture" />
        </UserImage>
        <Form onSubmit={formik.handleSubmit}>
          <InputGroup>
            {isProfile && (
              <div>
                <label htmlFor="profilePic">Profile Picture</label>
                <input
                  type="file"
                  name="profilePic"
                  onChange={(e) => setProfilePic(e.target.files)}
                />
              </div>
            )}

            <div>
              <label htmlFor="name"> Full Name</label>
              <input
                type="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p>
                  <span>i</span> {formik.errors.name}{" "}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p>
                  <span>i</span> {formik.errors.email}{" "}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p>
                  <span>i</span> {formik.errors.mobile}{" "}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="birthday">Birthday</label>

              <input
                type="date"
                name="birthday"
                onChange={formik.handleChange}
                value={formik.values.birthday}
              />
              {formik.touched.birthday && formik.errors.birthday && (
                <p>
                  <span>i</span> {formik.errors.birthday}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="gender">Gender :</label>
              <select
                onChange={formik.handleChange}
                value={formik.values.gender}
                name="gender"
              >
                <option value={""}>Choose</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <p>
                  <span>i</span> {formik.errors.gender}{" "}
                </p>
              )}
            </div>
          </InputGroup>
          <Button>
            <input
              onClick={formik.handleSubmit}
              type="submit"
              value="Update Profile"
              disabled={btnDissable}
            />
          </Button>
        </Form>
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
  gap: 2rem;
  margin-bottom: 2rem;
  &:hover {
    cursor: pointer;
  }

  img {
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
`;
const InputGroup = styled.div`
  div {
    margin: 1rem 0;
    & label {
      font-size: 1.3rem;
      color: var(--text-secondary);
    }

    & input {
      width: 100%;
      height: 3.5rem;
      padding: 0 1rem;
      border: none;
      outline: none;
      &:focus {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
      &::placeholder {
        padding-left: 0.5rem;
        font-size: 1.3rem;
      }
    }
    & input[type="file"] {
      padding: 0.5rem 0;
    }

    p {
      font-size: 1.1rem;
      span {
        font-style: italic;
        color: tomato;
        margin: 1.3rem 0.4rem 0 0;
        font-weight: 700;
        font-size: 1.3rem;
      }
    }
  }
`;
const Button = styled.div`
  & input {
    font-size: 1.3rem;
    border: none;
    background-color: var(--bg-primary);
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #fff;
      background-color: #ff6347f6;
    }
  }
`;
