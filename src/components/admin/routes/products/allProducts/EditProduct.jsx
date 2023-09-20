import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useUpdateProductMutation } from "../../../../../redux/api/products/productsAPI";
import Title from "../../../../utils/reUseableComponents/Title";
import MediaUpload from "../../../../utils/helperFunction/MediaUpload";
import TextInput from "../../../../utils/formik/TextInput";
import CategorySelector from "../../../../utils/reUseableComponents/CategorySelector";
import RichTextEditor from "../../../../utils/reUseableComponents/RichTextEditor";
import ImageUploader from "../../../../utils/reUseableComponents/ImageUploader";

const EditProduct = ({ product, onClose, refetch }) => {
  // => state
  const [category, setCategory] = useState(product?.category);
  const [description, setDescription] = useState(product?.description);
  const [images, setImages] = useState([]);
  const [prevImages, setPrevImages] = useState(product?.images);
  // Error state
  const [categoryError, setCategoryError] = useState(null);
  const [descError, setDescError] = useState(null);
  const [imagesError, setImagesError] = useState(null);
  // check categories change or not
  const [isChangeCategory, setIsChangeCategory] = useState(false);

  const navigate = useNavigate();
  const [updateProduct, { data, isError, error, isLoading, isSuccess }] =
    useUpdateProductMutation();

  // => Effect for show Error and Success message
  useEffect(() => {
    if (isError) toast.error(error?.message);
    if (isSuccess) {
      toast.success(data?.message);
      refetch();
      onClose();
    }
  }, [
    isError,
    isSuccess,
    data?.message,
    error?.message,
    navigate,
    onClose,
    refetch,
  ]);

  // => Effect for handle Category, Description, and Images error
  useEffect(() => {
    if (category) {
      setCategoryError(null);
    }

    if (images?.length > 0) {
      setImagesError(null);
    }

    if (description && description.split(" ").length < 50) {
      setDescError("Description must have at least 50 word.");
    } else {
      setDescError(null);
    }
  }, [category, images, description]);

  return (
    <Container>
      <Title variant="h2" text="Update Product" />
      <Content>
        <Formik
          initialValues={{
            name: product?.name,
            price: product?.price,
            brand: product?.brand,
            stock: product?.stock,
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

            if (
              !description ||
              !category ||
              (images?.length === 0 && prevImages.length === 0)
            ) {
              if (!description) setDescError("Description is required.");
              if (!category) setCategoryError("Category is required.");
              if (images?.length === 0 && prevImages.length === 0)
                setImagesError("Product image is required.");
              return;
            }

            if (description && description.split(" ").length < 50) {
              return setDescError("Description must have at least 50 word.");
            }

            if (images?.length > 0) {
              // => Upload images
              MediaUpload(images)
                .then((uploadedImages) => {
                  // => Images array modification for send in DB
                  const modiFiedImages = uploadedImages.map((img) => {
                    return { public_id: img.public_id, url: img.secure_url };
                  });

                  // => Prepare product
                  const new_product = {
                    ...values,
                    category,
                    description,
                    images: [...prevImages, ...modiFiedImages],
                  };

                  updateProduct({ id: product?._id, product: new_product });
                })
                .catch((err) => {
                  setImagesError("There was an error while uploadin images.");
                });
            } else {
              // => Prepare product
              const new_product = {
                ...values,
                category,
                description,
                images: prevImages,
              };
              updateProduct({ id: product?._id, product: new_product });
            }
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
            <TextInput
              label="Brand"
              name="brand"
              type="text"
              placeholder="Product brand"
            />
            <TextInput
              label="Stock"
              name="stock"
              type="number"
              placeholder="Product stock"
            />
            <CategoriesContainer>
              {isChangeCategory ? (
                <CategorySelector
                  label="Category"
                  category={category}
                  setCategory={setCategory}
                  categoryError={categoryError}
                  setCategoryError={setCategoryError}
                />
              ) : (
                <DefaultCategory>
                  <label>Category</label>
                  <div className="content">
                    <span className="category">{product?.category}</span>
                    <span
                      onClick={() => setIsChangeCategory(true)}
                      className="change_category"
                    >
                      change
                    </span>
                  </div>
                </DefaultCategory>
              )}
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
              <label>Product Images</label>

              {prevImages?.length > 0 && (
                <PreviousImages>
                  {prevImages?.map((img, i) => (
                    <div key={i} className="img_box">
                      <img src={img.url} alt="product" />
                      <svg
                        onClick={() => {
                          setPrevImages((prev) => {
                            console.log(prev);
                            return prev.filter(
                              (prev_img) => img._id !== prev_img._id
                            );
                          });
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </div>
                  ))}
                </PreviousImages>
              )}

              <ImageUploader
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
    </Container>
  );
};

export default EditProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f2f2f2;
`;

const Content = styled.div`
  border-radius: 0.5rem;
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

const PreviousImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, auto));
  gap: 1rem;
  margin-bottom: 1rem;
  user-select: none;
  border: 1px solid #ccc;
  padding: 1rem;

  .img_box {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    svg {
      position: absolute;
      top: 3px;
      right: 3px;
      cursor: pointer;
      &:hover {
        fill: red;
      }
    }
  }
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
