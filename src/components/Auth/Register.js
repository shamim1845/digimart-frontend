import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axiox from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Title from "../utils/reUseableComponents/Title";
import Button from "../utils/reUseableComponents/Buttons";
import TextInput from "../utils/formik/TextInput";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FormContainer>
        <Title text="Create an account " />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            cPassword: "",
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
          })}
          onSubmit={(values, { resetForm }) => {
            const { name, email, password } = values;

            axiox
              .post(`/api/v1/register`, { name, email, password })
              .then((res) => {
                if (res.status === 201) {
                  toast.success("Registration Sucessfull.");

                  setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                  }, 2000);
                } else {
                  toast.error("Registration failed.");
                }
              })
              .catch((err) => {
                toast.error("Registration failed.");
                console.error(err);
              });
          }}
        >
          <Form>
            <TextInput
              label="Name"
              type="name"
              name="name"
              placeholder="Enter Your Name"
            />
            <TextInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <TextInput
              label="Confirm password"
              type="password"
              name="cPassword"
              placeholder="Enter confirm password"
            />

            <Button type="submit" text="Register" />
          </Form>
        </Formik>

        <Message>
          <p>
            By creating an account, you agree to DIGIMART's
            <Link to={"/conditions"}> Conditions of Use </Link>and
            <Link to={"/privacy-policy"}> Privacy Notice.</Link>
          </p>
        </Message>
      </FormContainer>

      <ButtonContainer>
        <div>
          <p>Already have an account?</p>
          <Link to={"/login"}>Sign-In</Link>
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default Register;
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

const Message = styled.div`
  margin: 1rem 0;
  p {
    color: var(--text-secondary);

    margin-bottom: 1rem;
  }
  a {
    transition: all 0.3s ease-in-out;
  }
  a:hover {
    color: tomato;
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  margin: 3rem;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & p {
      margin: 1rem 0;
    }
    & a {
      text-align: center;
      border: 1px solid var(--text-primary);
      width: 100%;
      border-radius: 3px;
      padding: 1rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px -50px 36px -30px inset;
        color: tomato;
      }
    }
  }
`;
