import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../../utils/formik/TextInput";
import CategorySelector from "../../../utils/reUseableComponents/CategorySelector";
import Title from "../../../utils/reUseableComponents/Title";
import { useCreateCategoryMutation } from "../../../../redux/api/category/categoryAPI";
import Button from "../../../utils/reUseableComponents/Buttons";

const CreateCategory = ({ onClose }) => {
  // => state
  const [categories, setCategories] = useState([]);

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
      <Title variant="h2" text="Create Category" />

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
              parent: categories?.length
                ? categories[categories?.length - 1]?.category_id
                : null,
            };
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

            <CategorySelector
              label="Parent Category (optional)"
              categories={categories}
              setCategories={setCategories}
            />

            <br />
            <Button type="submit" text={"Create"} disabled={isLoading} />
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
