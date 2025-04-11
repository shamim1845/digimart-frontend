import React from "react";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import NewsLetter from "./NewsLetter";
import NewArivals from "./newArivals/NewArivals";
import Metadata from "../utils/Metadata";

const LazyCarousle = React.lazy(() =>
  import("../utils/slider/homeSlider/Slider")
);

const Home = () => {
  return (
    <>
      <Metadata
        title="Digimart | Find any thing what do you want?"
        description="Discover a world of endless possibilities at Digimart. Shop the latest trends in electronics, fashion, and groceries. With fast shipping and top-notch customer service, your online shopping experience just got better. Start browsing now!"
      />

      <Container>
        <CarousleContainer>
          <LazyCarousle />
        </CarousleContainer>
        <PageContainer>
          <NewArivals />
        </PageContainer>
        <NewsLetter />
      </Container>
    </>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarousleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #eeede9;
`;
