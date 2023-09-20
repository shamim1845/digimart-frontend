import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

// Mobile Header
import MobHeaderBottom from "./mobile/MobHeaderBottom";
import MobHeaderTop from "./mobile/MobHeaderTop";

import useWindowSize from "../../utils/customHooks/useWindowSize";

const Header = () => {
  const windowSize = useWindowSize();
  console.log("Header.js render =>");

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
  flex-direction: column;
  align-items: center;
`;

const MobileHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
