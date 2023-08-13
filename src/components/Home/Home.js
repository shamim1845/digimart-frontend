import styled from "styled-components";
import Carousle from "../slider/Slider";

import PageContainer from "../utils/PageContainer";
import NewArivals from "../newArivals/NewArivals";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <>
      <Container>
        <CaruusleContainer>
          <Carousle />
        </CaruusleContainer>
        <PageContainer>
          {/* <Metadata title="DIGIMART | Find any thing what do you want?"/> */}

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

const CaruusleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #eeede9;
`;
