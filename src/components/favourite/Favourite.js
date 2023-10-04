import React from "react";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import FavouriteList from "./FavouriteList";
import EmptyItems from "../utils/EmptyItems";
import { useGetMyFavouriteListQuery } from "../../redux/api/favourite/favouriteAPI";
import Error from "../utils/fetchUtils/Error";

const Favourite = () => {
  // Get my Favourite list
  const { isSuccess, data, isError, error } = useGetMyFavouriteListQuery();
  console.log(data);
  console.log(error);

  return (
    <PageContainer>
      <Container>
        {isError && <Error text={error?.data?.message} />}

        {isSuccess && (
          <>
            {!data?.favourites?.length ? (
              <EmptyItems
                text={"Oops! Your favourite list is empty."}
                link={"/products"}
                btnText={"Add Product"}
              />
            ) : (
              <FavouriteList favouriteItems={data?.favourites} />
            )}
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default Favourite;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
