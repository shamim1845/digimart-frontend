import React, { useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../../utils/formik/TextInput";
import Title from "../../../utils/reUseableComponents/Title";
import { useCreateBrandMutation } from "../../../../redux/api/brand/brandAPI";

const CreateBrand = ({ onClose }) => {
  //   =>Create category mutation
  const [createBrand, { data, isError, error, isLoading, isSuccess }] =
    useCreateBrandMutation();

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
      <Title variant="h1" text="Create Brand" />

      <Content>
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .required("Brand name is required.")
              .min(2, "Brand name must have at least 2 characters."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            createBrand(values);
          }}
        >
          <Form>
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter brand name"
            />

            <br />
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default CreateBrand;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f2f2f2;
`;

const Content = styled.div`
  padding: 2rem 2rem;
  width: 100%;
`;

const Button = styled.button`
  font-size: 1.3rem;
  border: none;
  background-color: var(--bg-primary);
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #fff;
    background-color: #ff6347f6;
  }
`;
