import React from 'react';
import { Outlet} from 'react-router-dom';

import PageContainer from "../utils/PageContainer"

const Dashboard = () => {
    console.log(parseFloat("50.9", 10));
    return (
        <PageContainer>
             <p>Look, more routes!</p>
   <Outlet />
        </PageContainer>
    )
}

export default Dashboard
