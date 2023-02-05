import React, { useState } from "react";
import styled from "styled-components";
import axiox from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as yup from "yup";

const ChangePassword = () => {
    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        },
        validationSchema: yup.object({
            oldPassword: yup
            .string()
            .min(8, "Old password must have at least 8 characters.")
            .required("Old password is required."),
            newPassword: yup
            .string()
            .min(8, "New password must have at least 8 characters.")
            .required("new password is required."),
            confirmPassword: yup
            .string()
            .min(8, "Confirm password must have at least 8 characters.")
            .required("Confirm password is required.")
            .oneOf(
              [yup.ref("newPassword"), null],
              "New password and Confirm password must match."
            ),
        }),
        onSubmit: (values, { resetForm }) => {
          const { oldPassword, newPassword, confirmPassword } = values;
          console.log(values);
    
          axiox
            .put(`/api/v1/password/update`, { oldPassword, newPassword, confirmPassword })
            .then((res) => {
                console.log(res);
              if (res.status === 200) {
                toast("Password update successfull.");
            
              } else {
                toast("Invalid login details");
              }
            })
            .catch((err) => {
              toast("Invalid login details");
              console.log(err);
            });
    
        //   resetForm({ values: "" });
        },
      });
    


  return (
    <>
      <ToastContainer />
      <LoginContainer>
        <ContainerTop>
          <FormContainer>
            <Title>Change Your Password</Title>
            <Form onSubmit={formik.handleSubmit}>
              <InputGroup>
                <div>
                  <label htmlFor="oldPassword">Enter your old password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    onChange={formik.handleChange}
                    value={formik.values.oldPassword}
                    placeholder="$12345678"
                  />
                        {formik.touched.oldPassword && formik.errors.oldPassword && (
                    <p>
                      <span>i</span> {formik.errors.oldPassword}{" "}
                    </p>
                  )}
                </div>
              </InputGroup>
              <InputGroup>
                <div>
                  <label htmlFor="newPassword">Enter your new password</label>
                  <input
                    type="password"
                    name="newPassword"
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                    placeholder="@98524789"
                  />
                        {formik.touched.newPassword && formik.errors.newPassword && (
                    <p>
                      <span>i</span> {formik.errors.newPassword}{" "}
                    </p>
                  )}
                </div>
              </InputGroup>
              <InputGroup>
                <div>
                  <label htmlFor="confirmNewPassword">Confirm new password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    placeholder="@98524789"
                  />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <p>
                      <span>i</span> {formik.errors.confirmPassword}{" "}
                    </p>
                  )}
                </div>
              </InputGroup>
              <Button>
                <input type="submit" value="Change Password" />
              </Button>
            </Form>
          </FormContainer>
        </ContainerTop>
      </LoginContainer>
    </>
  );
};

export default ChangePassword;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 margin-top: 5rem;
`;
const ContainerTop = styled.div`
  width: 100%;
  max-width: 35rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
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
      height: 3rem;
      padding: 0.5rem;
      &:focus {
        border: none;
        outline: none;
        outline: 1px solid tomato;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
