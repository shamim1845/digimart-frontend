import React from "react";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import FavouriteList from "./FavouriteList";
import EmptyItems from "../utils/EmptyItems";
import { useGetMyFavouriteListQuery } from "../../redux/api/favourite/favouriteAPI";
import Error from "../utils/fetchUtils/Error";
import Title from "../utils/reUseableComponents/Title";

const Favourite = () => {
  // Get my Favourite list
  const { isSuccess, data, isError, error } = useGetMyFavouriteListQuery();

  return (
    <PageContainer>
      <Container>
        {isError && (
          <>
            {error.status === 404 ? (
              <EmptyItems
                text={"Your favourite list is empty."}
                link={"/products"}
                btnText={"Add Product"}
              />
            ) : (
              <Error
                text={error?.data?.message}
                style={{
                  padding: "10rem 0",
                  width: "100%",
                  background: "pink",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            )}
          </>
        )}

        {isSuccess && (
          <>
            {data?.favourites?.length ? (
              <ContentWrapper>
                <Title
                  variant="h1"
                  text={`Default Wish List (${data?.favourites?.length || 0})`}
                  style={{ marginBottom: "2rem" }}
                />
                <FavouriteList favouriteItems={data?.favourites} />
              </ContentWrapper>
            ) : (
              <EmptyItems
                text={"Your favourite list is empty."}
                link={"/products"}
                btnText={"Add Product"}
              />
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
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;
