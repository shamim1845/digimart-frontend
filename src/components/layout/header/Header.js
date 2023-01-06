import React from "react";
import styled from "styled-components";

import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

import MobHeaderBottom from "./mobile/MobHeaderBottom";
import MobHeaderTop from "./mobile/MobHeaderTop";
import useWindowSize from "../../customHooks/useWindowSize";

const Header = () => {
  const windowSize = useWindowSize();

  return (
    <>
      {windowSize > 768 ? (
        <HeaderContainer>
          <HeaderTop />
          <HeaderMiddle />
          <HeaderBottom />
        </HeaderContainer>
      ) : (
        <MobileHeaderContainer>
          <MobHeaderTop />
          <MobHeaderBottom />
        </MobileHeaderContainer>
      )}
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MobileHeaderContainer = styled.div``;
