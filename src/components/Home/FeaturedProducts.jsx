import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import {
  getAllProducts,
} from "../../features/products/productSlice";

import Loading from "../utils/Loading";
import Product from "../products/Product";


const CategoriesDisplay = () => {

  const productDetails = useSelector(getAllProducts);
  const { loading, fetchProduct } = productDetails;


  return (
    <>
      {loading && <Loading />}
      <MainTitle>
        <h2>Featured Products</h2>
      </MainTitle>
      <ProductContainer>
        <ProductBox>
          {!loading && fetchProduct.products ?
            fetchProduct.products.map((product) => {

              return (
                <Product key={product._id} product={product} />
              );
            }) :
            <p>No products found...</p>}

        </ProductBox>

      </ProductContainer>
      <Link to="/products">
        <Button>All Products</Button>

      </Link>
    </>
  );
};

export default CategoriesDisplay;

const MainTitle = styled.div`
  margin: 3rem 0 2rem 0;
  h2 {
    border-bottom: 4px solid #ddd;
    font-size: 3rem;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
`;

const ProductBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 90%;
`


const Button = styled.button`
border: none;
background-color: tomato;
padding: 1rem 3rem;
margin: 2rem 0;
font-size: 1.5rem;
transition: all .5s;

&:hover{
    color: #fff;
}
`