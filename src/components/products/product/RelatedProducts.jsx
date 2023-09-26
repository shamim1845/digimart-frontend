import styled from "styled-components";
import Product from "../ProductCard";
import Title from "../../utils/reUseableComponents/Title";
import { useGetProductsQuery } from "../../../redux/api/products/productsAPI";

const RelatedProducts = ({ category, id }) => {
  const { data } = useGetProductsQuery(`category=${category}`, {
    refetchOnReconnect: true,
  });

  const products =
    data?.products?.filter((product) => product._id !== id).slice(0, 10) || [];

  return (
    <>
      <Container>
        <Title
          variant="h2"
          text="Related Products"
          style={{ padding: "1.5rem", color: "#333" }}
        />

        <ProductBox>
          {products &&
            products?.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
        </ProductBox>
        {products && products?.length === 0 && (
          <div className="no_products">
            <p>No products found.</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default RelatedProducts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */

  .no_products {
    padding-left: 1.5rem;
  }
`;

const ProductBox = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
