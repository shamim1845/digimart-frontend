import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import PageContainer from "../../utils/PageContainer";

const Dashboard = () => {
  return (
    <PageContainer>
      <h1>Dashboard</h1>
      <p>Look, more routes!</p>
      <Outlet />
    </PageContainer>
  );
};

export default Dashboard;
