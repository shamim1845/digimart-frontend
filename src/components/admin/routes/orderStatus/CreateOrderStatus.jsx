import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Title from "../../../utils/reUseableComponents/Title";
import TextInput from "../../../utils/formik/TextInput";
import Button from "../../../utils/reUseableComponents/Buttons";
import { useEffect } from "react";
import { useCreateOrderStatusMutation } from "../../../../redux/api/orderStatus/orderStatusAPI";

const CreateOrderStatus = ({ onClose }) => {
  // Create order status mutation
  const [createOrderStatus, { isLoading, isError, error, isSuccess, data }] =
    useCreateOrderStatusMutation();

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
        <Title text="Create Order Status " />
        <Formik
          initialValues={{
            name: "",
            description: "",
          }}
          validationSchema={yup.object({
            name: yup.string().required("Name is required."),
            description: yup.string().required("Description is required."),
          })}
          onSubmit={(values, { resetForm }) => {
            if (isLoading) return;

            createOrderStatus(values);
          }}
        >
          <Form>
            <TextInput
              label="Name"
              type="text"
              name="name"
              placeholder="Enter Status Name"
            />
            <TextInput
              label="Description"
              type="text"
              name="description"
              placeholder="Enter Status Description"
            />

            <Button type="submit" text="Create" />
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default CreateOrderStatus;
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
