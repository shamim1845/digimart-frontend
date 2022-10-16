import React from "react";
import styled from "styled-components";

import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

import MobHeaderBottom from "./mobile/MobHeaderBottom";
import MobHeaderTop from "./mobile/MobHeaderTop";


const Header = () => {
  return (
    <>

      <HeaderContainer>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
      </HeaderContainer>

      <MobileHeaderContainer>
   
       <MobHeaderTop />
      <MobHeaderBottom />

      </MobileHeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
 


  @media screen and (max-width: 576px) {
      display: none;
    }
`;


const MobileHeaderContainer = styled.div`

`
