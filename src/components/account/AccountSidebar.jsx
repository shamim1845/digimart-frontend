import React from 'react';
import styled from 'styled-components';

const AccountSidebar = () => {
  return <AccountSidebarContainer>
      <AccUserName>
        <p>Hello, Md Shamim Hossain</p>
      </AccUserName>

      <AccSidebaContent>
            <h4>Manage My Account</h4>
            <p>My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
            <p>Vouchers</p>
      </AccSidebaContent>

  </AccountSidebarContainer>;
};

export default AccountSidebar;


const AccountSidebarContainer = styled.div`
    
`

const AccUserName = styled.div`
    
`

const AccSidebaContent = styled.div`
    
`
