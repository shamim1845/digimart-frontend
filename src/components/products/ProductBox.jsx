import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useQuery from "../utils/customHooks/useQuery";
import { useGetProductsQuery } from "../../redux/api/products/productsAPI";
import NotFound from "../utils/fetchUtils/NotFound";
import Error from "../utils/fetchUtils/Error";
import ProductCard from "./ProductCard";
import Pagination from "../utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../../redux/productFilter/productFilterSlice";
import generateQuery from "../utils/helperFunction/generateQuery";
import { selectproductFilter } from "../../redux/productFilter/productFilterSelector";
import ProductCardSkeleton from "../utils/skeleton/ProductCardSkeleton";
import { useEffect } from "react";

const ProductBox = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  // => Redux selector
  const productFilter = useSelector(selectproductFilter);

  // => Produce Query String
  const query = useQuery(search) || generateQuery(productFilter);

  //   Get Products
  const { isLoading, isFetching, isError, error, isSuccess, data } =
    useGetProductsQuery(query, {
      refetchOnReconnect: true,
      skip: query ? false : true,
    });

  // Move scroll bar to the top when page changed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productFilter?.page]);

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
  margin-bottom: 3rem;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

const PaginationContainer = styled.div`
  width: 100%;
  margin: 5rem 0;
`;
