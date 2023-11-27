import { useEffect, useState } from "react";
import Title from "../../utils/reUseableComponents/Title";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../utils/formik/TextInput";
import ImageUploader from "../../utils/reUseableComponents/ImageUploader";
import Button from "../../utils/reUseableComponents/Buttons";
import styled from "styled-components";
import TextArea from "../../utils/formik/TextArea";
import axios from "axios";
import MediaUpload from "../../utils/helperFunction/MediaUpload";
import { toast } from "react-toastify";

const ReviewCard = ({ products, setShowModal }) => {
  const [images, setImages] = useState([]);
  const [prevImages, setPrevImages] = useState([]);
  const [productId, setProductId] = useState("");
  const [initialValues, setInitialValues] = useState({
    rating: "",
    comment: "",
  });

  console.log(prevImages);
  //   set product id if has only one product
  useEffect(() => {
    if (products?.length === 1) {
      setProductId(products[0].productId);
    }
  }, [products?.length, products]);

  //   fetch previous review
  useEffect(() => {
    if (productId) {
      axios.get(`/api/v1/product-review/${productId}`).then((res) => {
        console.log(res);
        setInitialValues({
          rating: res?.data?.review?.rating,
          comment: res?.data?.review?.comment,
        });

        setPrevImages(res?.data?.review?.images || []);
      });
    }
  }, [productId]);

  return (
    <CreateProductContainer>
      {productId ? (
        <>
          <Title variant="h2" text="Product Review" />
          <Content>
            <Formik
              initialValues={initialValues}
              validationSchema={yup.object({
                rating: yup
                  .number()
                  .required("Rating is required.")
                  .max(5, "Max rating 5"),
                comment: yup.string().required("Comment is required."),
              })}
              onSubmit={(values, { setSubmitting }) => {
                const { rating, comment } = values;

                const addReview = (images = []) => {
                  // add review
                  axios
                    .put(`/api/v1/product-review/${productId}`, {
                      rating,
                      comment,
                      images,
                    })
                    .then((res) => {
                      toast.success(
                        res.data?.message || "Review added successfully."
                      );
                      setShowModal(false);
                    })
                    .catch((err) => {
                      console.log(err);
                      toast.error(
                        err?.response?.data?.message ||
                          "Oops! Review not added."
                      );
                    });
                };

                // check images exist or not
                if (images.length) {
                  // => Upload images to Cloudinary
                  MediaUpload(images, "reviews")
                    .then((uploadedImages) => {
                      // => Images array modification for send in DB
                      const modiFiedImages = uploadedImages.map((img) => {
                        return {
                          public_id: img.public_id,
                          url: img.secure_url,
                        };
                      });

                      addReview([...prevImages, ...modiFiedImages]);
                    })
                    .catch((err) => {
                      console.log(err);
                      toast.error(
                        err?.response?.data?.message ||
                          "There was an error while uploading images."
                      );
                    });
                } else {
                  addReview(prevImages);
                }
              }}
              enableReinitialize
            >
              <Form>
                <TextInput
                  label="Rating"
                  name="rating"
                  type="number"
                  max={5}
                  placeholder="Enter your preferead rating"
                />
                <TextArea
                  label="Comment"
                  rows={5}
                  name="comment"
                  type="text"
                  placeholder="Write your experience with this product"
                />

                <ProductImage>
                  <label htmlFor="">Product Images</label>
                  {prevImages?.length > 0 && (
                    <PrevImageContainer>
                      {prevImages?.map((img) => (
                        <div key={img?._id}>
                          <img src={img?.url} alt={img?.public_id} />
                          <i
                            className="bi bi-trash"
                            onClick={() =>
                              setPrevImages((prev) =>
                                prev.filter(
                                  (premImg) => premImg?.url !== img?.url
                                )
                              )
                            }
                          ></i>
                        </div>
                      ))}
                    </PrevImageContainer>
                  )}
                  <ImageUploader images={images} setImages={setImages} />
                </ProductImage>

                <br />
                <Button type="submit" text="Submit" />
              </Form>
            </Formik>
          </Content>
        </>
      ) : (
        <>
          <Title variant="h2" text="Select a product" />
          <ProductsContainer>
            {products?.map((product) => (
              <img
                key={product?.productId}
                src={product?.image}
                alt={product?.name}
                onClick={() => setProductId(product?.productId)}
              />
            ))}
          </ProductsContainer>
        </>
      )}
    </CreateProductContainer>
  );
};

export default ReviewCard;

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

const ProductsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;

  img {
    width: 100px;
    cursor: pointer;
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid transparent;

    &:hover {
      border-color: tomato;
    }
  }
`;

const Content = styled.div`
  border-radius: 0.5rem;
  width: 100%;
`;

const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const PrevImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
  box-shadow: var(--shadow-3);
  border-radius: 0.2rem;

  div {
    position: relative;
    img {
      width: 100px;
      padding: 1rem;
    }
    i {
      display: none;
      transition: all 0.3s ease-in-out;
      font-size: 1.6rem;
      cursor: pointer;
    }

    &:hover {
      i {
        display: block;
        position: absolute;
        top: 0;
        right: 0;

        &:hover {
          color: red;
        }
      }
    }
  }
`;
