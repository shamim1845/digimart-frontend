import React from "react";
import styled from "styled-components";
import axiox from "axios";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Title from "../utils/reUseableComponents/Title";
import TextInput from "../utils/formik/TextInput";
import Button from "../utils/reUseableComponents/Buttons";

const ChangePassword = ({ setIsChangePassword }) => {
  return (
    <Container>
      <Title variant="h2" text={"Change Your Password"}></Title>
      <br />
      <br />
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={yup.object({
          oldPassword: yup
            .string()
            .required("Old password is required.")
            .min(8, "Old password must have at least 8 characters."),
          newPassword: yup
            .string()
            .required("New password is required.")
            .min(8, "New password must have at least 8 characters."),
          confirmPassword: yup
            .string()
            .required("Confirm password is required.")
            .min(8, "Confirm password must have at least 8 characters.")
            .oneOf(
              [yup.ref("newPassword"), null],
              "New password and Confirm password must match."
            ),
        })}
        onSubmit={(values, { resetForm }) => {
          const { oldPassword, newPassword, confirmPassword } = values;

          // update password
          axiox
            .put(`/api/v1/password/update`, {
              oldPassword,
              newPassword,
              confirmPassword,
            })
            .then((res) => {
              if (res.status === 200) {
                toast.success("Password update successfully.");
                resetForm({ values: "" });
                setIsChangePassword(false);
              } else {
                toast.error("Invalid login details");
              }
            })
            .catch((err) => {
              toast.error(
                err?.response?.data?.message || "Invalid login details"
              );
              console.log({ err });
            });
        }}
      >
        <Form>
          <TextInput
            label="Enter your old password"
            type="password"
            name="oldPassword"
            placeholder="$12345678"
          />
          <TextInput
            label="Enter your new password"
            type="password"
            name="newPassword"
            placeholder="@98524789"
          />
          <TextInput
            label="Confirm password"
            type="password"
            name="confirmPassword"
            placeholder="@98524789"
          />
          <br />
          <Button text={"Change Password"} type="submit" />
        </Form>
      </Formik>
    </Container>
  );
};

export default ChangePassword;

const Container = styled.div`
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding: 2rem;
  box-shadow: var(--shadow-3);
`;
