import { Link } from "react-router-dom";
import styled from "styled-components";
import axiox from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import Title from "../utils/reUseableComponents/Title";
import Button from "../utils/reUseableComponents/Buttons";
import TextInput from "../utils/formik/TextInput";

const Login = () => {
  const [nextRouteIsAdmin, setNextRouteIsAdmin] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/products";
  const {
    authenticated,
    userInfo: { role },
  } = useSelector((state) => state.user);

  // If user already authenticated navigate to the redirectPath
  useEffect(() => {
    if (!authenticated) return;
    if (!redirectPath.includes("admin")) {
      return navigate(redirectPath);
    }

    if (role === "admin") {
      return navigate(redirectPath);
    } else {
      setNextRouteIsAdmin(true);
    }
  }, [authenticated, redirectPath, navigate, role]);

  return (
    <Container>
      <FormContainer>
        <Title text={`Sign In ${nextRouteIsAdmin ? "as an Admin" : ""} `} />

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup.object({
            email: yup
              .string()
              .email("Email must be a valid email.")
              .required("Email is required."),
            password: yup
              .string()
              .min(8, "Password must have at least 8 characters.")
              .required("Password is required."),
          })}
          onSubmit={(values, { resetForm }) => {
            const { email, password } = values;

            axiox
              .post(`/api/v1/login`, { email, password })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Login successfull.");

                  setTimeout(() => {
                    navigate(redirectPath, { replace: true });
                    window.location.reload();
                  }, 2000);
                } else {
                  toast.error("Invalid login credentials.");
                }
              })
              .catch((err) => {
                toast.error("Invalid login credentials.");
                console.error(err);
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
            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />

            <Button type="submit" text="Login" />
          </Form>
        </Formik>

        <Message>
          <p>
            By continuing, you are agree to DIGIMART's{" "}
            <Link to={"/conditions"}> Conditions of Use </Link>and{" "}
            <Link to={"/privacy-policy"}> Privacy Notice.</Link>
          </p>
          <Link to={"/password/forgot"}> Forgot your password?</Link>
        </Message>
      </FormContainer>

      <ButtonContainer>
        <div>
          <p>New to DIGIMART?</p>
          <Link to={"/register"}>Create Your Account</Link>
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default Login;

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
