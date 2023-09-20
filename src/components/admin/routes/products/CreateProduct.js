import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../../utils/formik/TextInput";
import { useCreateProductMutation } from "../../../../redux/api/products/productsAPI";
import CategorySelector from "../../../utils/reUseableComponents/CategorySelector";
import RichTextEditor from "../../../utils/reUseableComponents/RichTextEditor";
import ImageUploader from "../../../utils/reUseableComponents/ImageUploader";
import Title from "../../../utils/reUseableComponents/Title";
import MediaUpload from "../../../utils/helperFunction/MediaUpload";
import SelectBox from "../../../utils/formik/SelectBox";
import { useGetAllBrandQuery } from "../../../../redux/api/brand/brandAPI";

const CreateProduct = () => {
  // => state
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  // Error state
  const [categoryError, setCategoryError] = useState(null);
  const [descError, setDescError] = useState(null);
  const [imagesError, setImagesError] = useState(null);

  const navigate = useNavigate();

  // Create product mutation
  const [createProduct, { data, isError, error, isLoading, isSuccess }] =
    useCreateProductMutation();

  // => Effect for show Error and Success message
  useEffect(() => {
    if (isError) toast.error(error?.message);
    if (isSuccess) {
      toast.success(data?.message);
      navigate("/admin/products");
    }
  }, [isError, isSuccess, data?.message, error?.message, navigate]);

  // => Effect for handle Category, Description, and Images error
  useEffect(() => {
    if (category) {
      setCategoryError(null);
    }

    if (images?.length > 0) {
      setImagesError(null);
    }

    if (description && description.split(" ").length < 10) {
      setDescError("Description must have at least 10 word.");
    } else {
      setDescError(null);
    }
  }, [category, images, description]);

  // Fetch brands for brand selection
  const { data: brandsdata } = useGetAllBrandQuery();

  return (
    <CreateProductContainer>
      <Title variant="h2" text="Create Product" />
      <Content>
        <Formik
          initialValues={{
            name: "",
            price: "",
            brand: "",
            stock: "",
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .required("Product name is required.")
              .min(3, "Product name must have at least 3 characters."),
            price: yup
              .number()
              .required("Product price is required.")
              .max(100000, "Maximum product price 100000"),
            brand: yup.string(),
            stock: yup
              .number()
              .min(1, "Product stock must be greater than or equal 1")
              .required("Product stock  is required."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // => validation
            if (!description || !category || images?.length === 0) {
              if (!category) setCategoryError("Category is required.");
              if (!description) setDescError("Description is required.");
              if (images?.length === 0)
                setImagesError("Product image is required.");
              return;
            }

            // => Upload images
            MediaUpload(images)
              .then((uploadedImages) => {
                // => Images array modification for send in DB
                const modiFiedImages = uploadedImages.map((img) => {
                  return { public_id: img.public_id, url: img.secure_url };
                });

                // => Prepare product
                const product = {
                  ...values,
                  category: category?.slug,
                  description,
                  images: modiFiedImages,
                };

                createProduct(product);
              })
              .catch((err) => {
                setImagesError("There was an error while uploadin images.");
              });
          }}
        >
          <Form>
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your product name"
            />
            <TextInput
              label="Price"
              name="price"
              type="number"
              placeholder="Enter your product price"
            />
            <SelectBox label="Brand" name="brand">
              <option value="">Choose a brand</option>
              {brandsdata?.brands.map((brand) => (
                <option key={brand?._id} value={brand?.slug}>
                  {brand?.name}
                </option>
              ))}
            </SelectBox>
            <TextInput
              label="Stock"
              name="stock"
              type="number"
              placeholder="Product stock"
            />
            <CategoriesContainer>
              <CategorySelector
                label="Category"
                category={category}
                setCategory={setCategory}
                categoryError={categoryError}
                setCategoryError={setCategoryError}
              />
            </CategoriesContainer>

            <DescriptionContainer>
              <RichTextEditor
                label="Description"
                richText={description}
                setRichText={setDescription}
                richTextError={descError}
                setRichTextError={setDescError}
              />
            </DescriptionContainer>

            <ProductImage>
              <ImageUploader
                label="Product Images"
                images={images}
                setImages={setImages}
                imagesError={imagesError}
                setImagesError={setImagesError}
              />
            </ProductImage>

            <br />
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </Form>
        </Formik>
      </Content>
    </CreateProductContainer>
  );
};

export default CreateProduct;

const CreateProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Content = styled.div`
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    /* margin: 0 5rem; */
  }
  @media screen and (max-width: 576px) {
    /* padding: 2rem; */
  }
`;

const CategoriesContainer = styled.div``;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
