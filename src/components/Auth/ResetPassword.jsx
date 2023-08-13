import { useParams } from "react-router-dom";
import styled from "styled-components";
import axiox from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";

const ResetPassword = () => {
  const navigate = useNavigate();
  let params = useParams();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .min(8, "Password must have at least 8 characters.")
        .required("Password is required."),
      confirmPassword: yup
        .string()
        .when("password", (password, field) =>
          password
            ? field
                .required("Confirm password is required.")
                .oneOf([yup.ref("password", "must match")])
            : field
        ),
    }),
    onSubmit: async (values, { resetForm }) => {
      const { password, confirmPassword } = values;
      try {
        const res = await axiox.put(`/api/v1/password/reset/${params.token}`, {
          password,
          confirmPassword,
        });
        console.log(res);
        if (res.status === 200) {
          toast("Password Update successfull.");

          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 3000);
        }
      } catch (err) {
        toast.error("Invalid Password Reset Details");
        console.log(err);
      }

      resetForm({ values: "" });
    },
  });

  return (
    <>
      <ToastContainer />
      <LoginContainer>
        <ContainerTop>
          <FormContainer>
            <Title> Reset Password </Title>
            <Form onSubmit={formik.handleSubmit}>
              <InputGroup>
                <div>
                  <label htmlFor="password">New Password</label>
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

                <div>
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p>
                        <span>i</span> {formik.errors.confirmPassword}{" "}
                      </p>
                    )}
                </div>
              </InputGroup>
              <Button>
                <input type="submit" value="Submit" />
              </Button>
            </Form>
          </FormContainer>
        </ContainerTop>
      </LoginContainer>
    </>
  );
};

export default ResetPassword;

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
