import { Link } from "react-router-dom";
import styled from "styled-components";
import axiox from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/products";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Email must be a valid email.")
        .required("Email is required."),
      password: yup
        .string()
        .min(8, "Password must have at least 8 characters.")
        .required("Password is required."),
    }),
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;

      axiox
        .post(`/api/v1/login`, { email, password })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Login successfull.");

            setTimeout(() => {
              navigate(redirectPath, { replace: true });
              window.location.reload();
            }, 3000);
          } else {
            toast.error("Invalid login details");
          }
        })
        .catch((err) => {
          toast.error("Invalid login details");
          console.log(err);
        });

      resetForm({ values: "" });
    },
  });

  return (
    <>
      <ToastContainer />
      <LoginContainer>
        <ContainerTop>
          <FormContainer>
            <Title>Sign In </Title>
            <Form onSubmit={formik.handleSubmit}>
              <InputGroup>
                <div>
                  <label htmlFor="email">Enter Your Email</label>
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
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p>
                      <span>i</span> {formik.errors.password}{" "}
                    </p>
                  )}
                </div>
              </InputGroup>
              <Button>
                <input type="submit" value="Login" />
              </Button>
            </Form>
            <Message>
              <p>
                By continuing, you agree to DIGIMART's{" "}
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
        </ContainerTop>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
const ContainerTop = styled.div`
  width: 100%;
  max-width: 35rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ButtonContainer = styled.div`
  margin: 2rem;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & p {
      font-size: 1.2rem;
      color: #666;
      margin: 1rem 0;
    }
    & a {
      text-align: center;

      font-size: 1.2rem;
      background: var(--bg-secondary);
      border: 1px solid #666;
      width: 100%;
      border-radius: 3px;
      padding: 1rem;
      transition: all 0.3s;
      &:hover {
        box-shadow: #66666683 0px -50px 36px -30px inset;
      }
    }
  }
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
      &:focus {
        border: none;
        outline: none;
        /* outline: 1px solid tomato; */
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
const Message = styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;
  p {
    color: var(--text-secondary);

    margin-bottom: 1rem;
  }
  a {
    transition: all 0.5s;
  }
  a:hover {
    color: tomato;
    text-decoration: underline;
  }
`;
