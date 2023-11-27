import styled from "styled-components";
import axiox from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import Button from "../utils/reUseableComponents/Buttons";
import TextInput from "../utils/formik/TextInput";
import { Form, Formik } from "formik";
import Title from "../utils/reUseableComponents/Title";

const ForgotPassword = () => {
  return (
    <Container>
      <FormContainer>
        <Title text="Forgot Password" />

        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={yup.object({
            email: yup
              .string()
              .required("Email is required.")
              .email("Email must be a valid email."),
          })}
          onSubmit={(values, { resetForm }) => {
            const { email } = values;

            axiox
              .post(`/api/v1/password/forgot`, {
                email,
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success(res.data.message);
                }
              })
              .catch((err) => {
                toast.error(
                  err?.response?.data?.message || "Invalid email address."
                );
                console.log(err);
              })
              .finally(() => {
                resetForm();
              });
          }}
        >
          <Form>
            <TextInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />

            <Button type="submit" text="Submit" />
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 50rem;
  margin: 5rem auto;
  padding: 1rem;

  @media screen and (max-width: 576px) {
    margin: 2rem auto;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  box-shadow: var(--shadow-1);
  border-radius: 5px;

  form {
    width: 100%;
  }
`;
