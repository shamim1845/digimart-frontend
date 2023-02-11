import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import MediaUpload from "../../utils/MediaUpload";

const CreateProduct = () => {
  const [btnDissable, setBtnDissable] = useState(false);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      category: "",
      brand: "",
      stock: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(3, "Product name must have at least 3 characters.")
        .required("Product name is required."),
      price: yup.number().max(8).required("Price is required"),
      description: yup
        .string()
        .min(100, "Product description must have at least 100 characters.")
        .required("Product description is required."),
      category: yup
        .string()
        .min(3, "Category name must have at least 3 characters.")
        .required("Category is required."),
      brand: yup.string(),
      stock: yup.number().min(1).required("Stock  is required."),
    }),
    onSubmit: (values, { resetForm }) => {},
  });

  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //       price: "",
  //       description: "",
  //       category: "",
  //       brand: "",
  //       stock: "",
  //     },

  //     validationSchema: yup.object({
  //       name: yup
  //         .string()
  //         .min(3, "Product name must have at least 3 characters.")
  //         .required("Product name is required."),
  //       price: yup.number().max(8).required("Price is required"),
  //       description: yup
  //         .string()
  //         .min(100, "Product description must have at least 100 characters.")
  //         .required("Product description is required."),
  //       category: yup
  //         .string()
  //         .min(3, "Category name must have at least 3 characters.")
  //         .required("Category is required."),
  //       brand: yup.string(),
  //       stock: yup.number().min(1).required("Stock  is required."),
  //     }),
  //     onSubmit: (values, { resetForm }) => {
  //     //   setBtnDissable(true);
  //     //   const { name, email, mobile, birthday, gender } = values;
  //     //   console.log(values);

  //     //   function updateProfile(mediaUrls = []) {
  //     //     const avatar = {
  //     //       public_id: mediaUrls[0]?.public_id
  //     //         ? mediaUrls[0]?.public_id
  //     //         : user.avatar.public_id,
  //     //       url: mediaUrls[0]?.secure_url
  //     //         ? mediaUrls[0]?.secure_url
  //     //         : user.avatar.url,
  //     //     };

  //     //     axios
  //     //       .put(`/api/v1/profile/update`, {
  //     //         name,
  //     //         email,
  //     //         avatar,
  //     //         mobile,
  //     //         birthday,
  //     //         gender,
  //     //       })
  //     //       .then((res) => {
  //     //         if (res.status === 200 && res.data.success) {
  //     //           toast("Profile update Sucessfull");
  //     //           setTimeout(() => {
  //     //             navigate("/account/myprofile");
  //     //           }, 3000);
  //     //         } else {
  //     //           toast(res.data.message);
  //     //         }
  //     //       })
  //     //       .catch((err) => {
  //     //         console.log(err.message);
  //     //       });
  //     //   }

  //     //   if (profilePic) {
  //     //     MediaUpload(profilePic).then((res) => {
  //     //       updateProfile(res);
  //     //     });
  //     //   } else {
  //     //     updateProfile();
  //     //   }
  //     // },
  //   });

  return (
    <UpdateProfileContainer>
      <Title>
        <h2>Update Profile</h2>
      </Title>
      <Content>
        {/* <UserImage onClick={() => setIsProfile(true)}>
          {
            <>
              <img src={user?.avatar?.url} alt="profile_picture" />
              {isProfile && (
                <div>
                  <input
                    type="file"
                    name="profilePic"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  />
                  {formik.touched.profilePic && formik.errors.profilePic && (
                    <p>
                      <span>i</span> {formik.errors.profilePic}{" "}
                    </p>
                  )}
                </div>
              )}
            </>
          }
        </UserImage> */}
        <Form onSubmit={formik.handleSubmit}>
          <InputGroup>
            <div>
              <label htmlFor="name"> Product Name</label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p>
                  <span>i</span> {formik.errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price && (
                <p>
                  <span>i</span> {formik.errors.price}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description && (
                <p>
                  <span>i</span> {formik.errors.description}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="category">Category</label>

              <input
                type="text"
                name="category"
                onChange={formik.handleChange}
                value={formik.values.category}
              />
              {formik.touched.category && formik.errors.category && (
                <p>
                  <span>i</span> {formik.errors.category}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="brand">Brand</label>

              <input
                type="text"
                name="brand"
                onChange={formik.handleChange}
                value={formik.values.brand}
              />
              {formik.touched.brand && formik.errors.brand && (
                <p>
                  <span>i</span> {formik.errors.brand}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="stock">Stock</label>

              <input
                type="number"
                name="stock"
                onChange={formik.handleChange}
                value={formik.values.stock}
              />
              {formik.touched.stock && formik.errors.stock && (
                <p>
                  <span>i</span> {formik.errors.stock}
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

export default CreateProduct;

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
  gap: 2rem;
  margin-bottom: 2rem;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 15rem;
    height: 15rem;
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
