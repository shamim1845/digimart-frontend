import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../../utils/formik/TextInput";
import CategorySelector from "../../../utils/reUseableComponents/CategorySelector";
import Title from "../../../utils/reUseableComponents/Title";
import { useCreateCategoryMutation } from "../../../../redux/api/category/categoryAPI";

const CreateCategory = ({ onClose }) => {
  // => state
  const [category, setCategory] = useState(null);

  //   =>Create category mutation
  const [createCategory, { data, isError, error, isLoading, isSuccess }] =
    useCreateCategoryMutation();

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
      <Title variant="h1" text="Create Categories" />

      <Content>
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .required("Category name is required.")
              .min(2, "Category name must have at least 2 characters."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const new_category = {
              name: values.name,
              parent: category ? category?._id : null,
            };
            console.log(new_category);
            createCategory(new_category);
          }}
        >
          <Form>
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your category name"
            />

            <CategoriesContainer>
              <CategorySelector
                label="Parent Category (optional)"
                category={category}
                setCategory={setCategory}
              />
            </CategoriesContainer>

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

export default CreateCategory;

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

const CategoriesContainer = styled.div``;

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
