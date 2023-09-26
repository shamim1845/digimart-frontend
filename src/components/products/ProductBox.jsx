import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useQuery from "../utils/customHooks/useQuery";
import { useGetProductsQuery } from "../../redux/api/products/productsAPI";
import NotFound from "../utils/fetchUtils/NotFound";
import Error from "../utils/fetchUtils/Error";
import Loading from "../utils/fetchUtils/Loading";
import ProductCard from "./ProductCard";
import Pagination from "../utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../../redux/productFilter/productFilterSlice";
import generateQuery from "../utils/helperFunction/generateQuery";
import { selectproductFilter } from "../../redux/productFilter/productFilterSelector";
import ProductCardSkeleton from "../utils/skeleton/ProductCardSkeleton";

const ProductBox = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  console.log("ProductBox Render. =>");

  // => Redux selector
  const productFilter = useSelector(selectproductFilter);

  // => Produce Query String
  const query = useQuery(search) || generateQuery(productFilter);

  // Move scroll bar to the top
  window.scrollTo(0, 0);

  //   Get Products
  const { isLoading, isFetching, isError, error, isSuccess, data } =
    useGetProductsQuery(query, {
      refetchOnReconnect: true,
      skip: query ? false : true,
    });

  return (
    <Container>
      {(isFetching || isLoading) && (
        <Content>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </Content>
      )}

      {isError && (
        <>
          {error.status === 404 ? (
            <NotFound text="No product found." style={{ maxHeight: "15rem" }} />
          ) : (
            <Error text={error?.message} style={{ justifyContent: "center" }} />
          )}
        </>
      )}

      {!isLoading && !isFetching && !isError && isSuccess && (
        <>
          <Content>
            {data?.products?.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </Content>

          <PaginationContainer>
            {data?.pagination?.length > 1 && (
              <Pagination
                pages={data?.pagination}
                currentPage={productFilter?.page}
                setCurrentPage={(pageNo) => dispatch(addPage(pageNo))}
              />
            )}
          </PaginationContainer>
        </>
      )}
    </Container>
  );
};

export default ProductBox;

const Container = styled.div`
  flex: 1;
  height: auto;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

const PaginationContainer = styled.div``;
