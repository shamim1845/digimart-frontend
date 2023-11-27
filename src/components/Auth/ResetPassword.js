import { useParams } from "react-router-dom";
import styled from "styled-components";
import axiox from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../utils/formik/TextInput";
import Button from "../utils/reUseableComponents/Buttons";
import Title from "../utils/reUseableComponents/Title";

const ResetPassword = () => {
  const navigate = useNavigate();
  let params = useParams();

  return (
    <Container>
      <FormContainer>
        <Title text="Reset Password" />

        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={yup.object({
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
                      .oneOf(
                        [yup.ref("password", "must match")],
                        "Password and Confirm Password must match."
                      )
                  : field
              ),
          })}
          onSubmit={(values, { resetForm }) => {
            const { password, confirmPassword } = values;

            axiox
              .put(`/api/v1/password/reset/${params.token}`, {
                password,
                confirmPassword,
              })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Password Update successfully.");

                  setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                  }, 3000);
                } else {
                  toast.info("Something went wrong.");
                }
              })
              .catch((err) => {
                toast.error(
                  err?.response?.data?.message ||
                    "Invalid Password Reset Details."
                );
                console.log(err);
              });

            resetForm({ values: "" });
          }}
        >
          <Form>
            <TextInput
              label="New Password"
              type="password"
              name="password"
              placeholder="Enter Your password"
            />

            <TextInput
              label="Confirm New Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />

            <Button type="submit" text="Submit" />
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );

  //   <>
  //     <LoginContainer>
  //       <ContainerTop>
  //         <FormContainer>
  //           <Title> Reset Password </Title>
  //           <Form onSubmit={formik.handleSubmit}>
  //             <InputGroup>
  //               <div>
  //                 <label htmlFor="password">New Password</label>
  //                 <input
  //                   type="password"
  //                   name="password"
  //                   onChange={formik.handleChange}
  //                   value={formik.values.password}
  //                 />
  //                 {formik.touched.password && formik.errors.password && (
  //                   <p>
  //                     <span>i</span> {formik.errors.password}{" "}
  //                   </p>
  //                 )}
  //               </div>

  //               <div>
  //                 <label htmlFor="confirmPassword">Confirm New Password</label>
  //                 <input
  //                   type="password"
  //                   name="confirmPassword"
  //                   onChange={formik.handleChange}
  //                   value={formik.values.confirmPassword}
  //                 />
  //                 {formik.touched.confirmPassword &&
  //                   formik.errors.confirmPassword && (
  //                     <p>
  //                       <span>i</span> {formik.errors.confirmPassword}{" "}
  //                     </p>
  //                   )}
  //               </div>
  //             </InputGroup>
  //             <Button>
  //               <input type="submit" value="Submit" />
  //             </Button>
  //           </Form>
  //         </FormContainer>
  //       </ContainerTop>
  //     </LoginContainer>
  //   </>
  // );
};

export default ResetPassword;

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
