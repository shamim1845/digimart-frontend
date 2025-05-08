import React, { useState } from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";
import { useGetAnalyticsQuery } from "../../../../redux/api/analytics/analyticsAPI";
import Loading from "../../../utils/fetchUtils/Loading";
import NotFound from "../../../utils/fetchUtils/NotFound";
import Error from "../../../utils/fetchUtils/Error";
import TimePeriodSelector from "./TimePeriodSelector";

const Dashboard = () => {
  const [period, setPeriod] = useState(0);


  const { isFetching, isError, error, isLoading, isSuccess, data } = useGetAnalyticsQuery(`period=${period}`, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    skip: period === 0
  })

  return (
    <DashboardContainer>
      {(isFetching || isLoading) && <Loading />}

      {isError && (
        <>
          {error.status === 404 ? (
            <NotFound
              style={{ justifyContent: "center", marginTop: "10rem" }}
              text={error.data?.message}
            />
          ) : (
            <Error
              style={{ justifyContent: "center", marginTop: "10rem" }}
              text={error?.message}
            />
          )}
        </>
      )}

      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "1rem"
      }}>
        <TimePeriodSelector period={period} setPeriod={setPeriod} />
      </div>

      {isSuccess && data && (
        <QuickInfo>
          <InfoCard
            titleText={"Total Revenue"}
            subTitleText={`(Last ${period} Days)`}
            icon={<i className="bi bi-shop-window"></i>}
            value={`$${data?.data?.totalRevenueInPeriod}`}
            iconBg="#A7F3D0"
          />
          <InfoCard
            titleText={"Total Order"}
            subTitleText={`(Last ${period} Days)`}
            icon={<i className="bi bi-cart3"></i>}
            value={`$${data?.data?.totalOrdersInPeriod}`}
            iconBg="#FACACA"
          />

          <InfoCard
            titleText={"Todays Revenue"}
            icon={<i className="bi bi-shop-window"></i>}
            value={`$${data?.data?.todaysRevenue}`}
            iconBg="#FFE8B2"
          />

          <InfoCard
            titleText={"Total Brands"}
            icon={<i className="bi bi-shop-window"></i>}
            value={`$${data?.data?.totalBrands}`}
            iconBg="#93C5FD"
          />
        </QuickInfo>
      )}

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
