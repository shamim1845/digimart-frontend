import React from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <QuickInfo>
        <InfoCard
          titleText={"Total Revenue"}
          subTitleText={"(Last 30 Days)"}
          icon={<i className="bi bi-shop-window"></i>}
          value={"$0.00"}
          iconBg="#A7F3D0"
        />
        <InfoCard
          titleText={"Total Order"}
          subTitleText={"(Last 30 Days)"}
          icon={<i className="bi bi-cart3"></i>}
          value={"$0.00"}
          iconBg="#FACACA"
        />

        <InfoCard
          titleText={"Todays Revenue"}
          icon={<i className="bi bi-shop-window"></i>}
          value={"$0.00"}
          iconBg="#FFE8B2"
        />

        <InfoCard
          titleText={"Total Brands"}
          icon={<i className="bi bi-shop-window"></i>}
          value={"$0.00"}
          iconBg="#93C5FD"
        />
      </QuickInfo>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const QuickInfo = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, minmax(240px, 1fr));

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(240px, 1fr));
  }
`;
