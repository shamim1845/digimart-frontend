import React, { useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Title from "../../../utils/reUseableComponents/Title";
import SelectBox from "../../../utils/formik/SelectBox";
import { useUpdateUserRoleMutation } from "../../../../redux/api/user/userAPI";
import Button from "../../../utils/reUseableComponents/Buttons";

const EditUser = ({ onClose, user }) => {
  //   =>Create category mutation
  const [updateUserRole, { data, isError, error, isLoading, isSuccess }] =
    useUpdateUserRoleMutation();

  console.log({ data, error });

  // => Effect for show Error and Success message
  useEffect(() => {
    if (isError) toast.error(error?.message);
    if (isSuccess) {
      onClose();
      toast.success(data?.message);
    }
  }, [isError, isSuccess, data?.message, error?.message, onClose]);

  return (
    <Container>
      <Content>
        <Title variant="h2" text="Update User Role" />
        <Formik
          initialValues={{
            role: user?.role,
          }}
          validationSchema={yup.object({
            role: yup.string().required("User role is required."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            updateUserRole({ id: user?._id, data: values });
          }}
        >
          <Form>
            <SelectBox label="Role" name="role">
              <option value="">Select User Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </SelectBox>

            <br />
            <Button type="submit" text={"Update"} disabled={isLoading} />
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default EditUser;

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
