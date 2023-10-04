import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Title from "../../../utils/reUseableComponents/Title";
import TextInput from "../../../utils/formik/TextInput";
import Button from "../../../utils/reUseableComponents/Buttons";
import SelectBox from "../../../utils/formik/SelectBox";
import { useCreateUserMutation } from "../../../../redux/api/user/userAPI";
import { useEffect } from "react";

const CreateUser = ({ onClose }) => {
  const [createUser, { isLoading, isError, error, isSuccess, data }] =
    useCreateUserMutation();

  // => Effect for show Error and Success message
  useEffect(() => {
    if (isError) {
      if (error?.status === 400) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
    }
    if (isSuccess) {
      toast.success(data?.message);
      onClose();
    }
  }, [
    isError,
    isSuccess,
    data?.message,
    error?.message,
    onClose,
    error?.data?.message,
    error?.status,
  ]);
  return (
    <Container>
      <Content>
        <Title text="Create User " />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            cPassword: "",
            role: "",
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .min(3, "Name must have at least 3 characters.")
              .required("Name is required."),
            email: yup
              .string()
              .email("Email must be a valid email.")
              .required("Email is required."),
            password: yup
              .string()
              .min(8, "Password must have at least 8 characters.")
              .required("Password is required."),
            cPassword: yup
              .string()
              .min(8, "Confirm password must have at least 8 characters.")
              .required("Confirm password is required.")
              .oneOf(
                [yup.ref("password"), null],
                "Password and Confirm Password must match."
              ),
            role: yup.string().required("User role is required."),
          })}
          onSubmit={(values, { resetForm }) => {
            if (isLoading) return;

            createUser(values);
          }}
        >
          <Form>
            <TextInput
              label="Name"
              type="name"
              name="name"
              placeholder="Enter User Name"
            />
            <TextInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter User Email"
            />
            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <TextInput
              label="Confirm password"
              type="password"
              name="cPassword"
              placeholder="Enter confirm password"
            />
            <SelectBox label="Role" name="role">
              <option value="">Select User Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </SelectBox>
            <Button type="submit" text="Create" />
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default CreateUser;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  form {
    width: 100%;
    min-width: 30rem;
  }
`;
