import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../../utils/formik/TextInput";
import CategorySelector from "../../../utils/reUseableComponents/CategorySelector";
import Title from "../../../utils/reUseableComponents/Title";
import { useUpdateCategoryMutation } from "../../../../redux/api/category/categoryAPI";
import Button from "../../../utils/reUseableComponents/Buttons";

const EditCategory = ({ onClose, categoryForEdit }) => {
  console.log(categoryForEdit);
  // => state
  const [categories, setCategories] = useState([]);

  // check categories change or not
  const [isChangeCategory, setIsChangeCategory] = useState(false);

  //   =>Create category mutation
  const [updateCategory, { data, isError, error, isLoading, isSuccess }] =
    useUpdateCategoryMutation();

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
      <Title variant="h2" text="Edit Category" />

      <Content>
        <Formik
          initialValues={{
            name: categoryForEdit?.name,
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

            updateCategory({
              id: categoryForEdit?._id,
              category: new_category,
            });
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
              {isChangeCategory ? (
                <CategorySelector
                  label="Parent Category (optional)"
                  categories={categories}
                  setCategories={setCategories}
                />
              ) : (
                <DefaultCategory>
                  <label>Parent Category (optional)</label>
                  <div className="content">
                    <span className="category">
                      {categoryForEdit?.ancestors[0]?.name}
                    </span>
                    <span
                      onClick={() => setIsChangeCategory(true)}
                      className="change_category"
                    >
                      {categoryForEdit?.parent ? "change" : "add"}
                    </span>
                  </div>
                </DefaultCategory>
              )}
            </CategoriesContainer>

            <br />
            <Button type="submit" disabled={isLoading} text="Update" />
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default EditCategory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f2f2f2;
`;

const Content = styled.div`
  padding: 2rem 0rem;
  width: 100%;
`;

const CategoriesContainer = styled.div``;

const DefaultCategory = styled.div`
  .content {
    background: #fff;
    min-height: 3.5rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.8rem 1rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;

    .category {
      text-transform: capitalize;
      font-size: 1.3rem;
    }
    .change_category {
      font-size: 1rem;
      color: teal;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
