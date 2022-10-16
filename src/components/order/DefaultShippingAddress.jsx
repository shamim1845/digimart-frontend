import React from 'react';
import styled from 'styled-components';

const DefaultShippingAddress = () => {

    const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    // console.log(shippingInfo);
  return (
      <>
      {
          shippingInfo &&     <DefaultShippingContainer>
          <Title>Default Shipping Address</Title>
         
            <MainContent>
          <p>Address: <span>{shippingInfo.address}</span></p>
          <p>Phone Number: <span>{shippingInfo.phoneNo}</span></p>
          <p>Zip Code: <span>{shippingInfo.postCode}</span></p>
          <p>Country: <span>{shippingInfo.country}</span></p>
          <p>State: <span>{shippingInfo.state}</span></p>
          <p>City: <span>{shippingInfo.city}</span></p>
          </MainContent>
  
      </DefaultShippingContainer>
      }

    </>
  )
}

export default DefaultShippingAddress;

const DefaultShippingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const Title = styled.h4`
    margin-bottom: 1rem;
`
    const MainContent = styled.div`
        p{
            color: #000!important;
            span{
                color: #666;
            }
        }
    `