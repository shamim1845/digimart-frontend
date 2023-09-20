import React, { useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../../utils/formik/TextInput";

import Title from "../../../utils/reUseableComponents/Title";
import { useUpdateBrandMutation } from "../../../../redux/api/brand/brandAPI";

const EditBrand = ({ onClose, brandForEdit }) => {
  //   =>Create category mutation
  const [updateBrand, { data, isError, error, isLoading, isSuccess }] =
    useUpdateBrandMutation();

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
      <Title variant="h1" text="Edit Brand" />

      <Content>
        <Formik
          initialValues={{
            name: brandForEdit?.name,
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .required("Brand name is required.")
              .min(2, "Brand name must have at least 2 characters."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            updateBrand({ id: brandForEdit?._id, brand: values });
          }}
        >
          <Form>
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter Brand name"
            />

            <br />
            <Button type="submit" disabled={isLoading}>
              Update
            </Button>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default EditBrand;

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
