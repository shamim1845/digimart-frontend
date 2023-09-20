import styled from "styled-components";

import ProductRating from "./ProductRating";
import ProductReviews from "./ProductReviews";
import Title from "../../utils/reUseableComponents/Title";

const RatingReviews = ({ product }) => {
  // console.log(product);
  return (
    <Container>
      <Title
        variant="h2"
        text={`Ratings`}
        style={{ padding: "1.3rem", color: "#333", background: "#fafafa" }}
      />

      <ProductRating product={product} />

      <ProductReviews product={product} />
    </Container>
  );
};

export default RatingReviews;

const Container = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;
