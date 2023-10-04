import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

// Mobile Header
import MobHeaderBottom from "./mobile/MobHeaderBottom";
import MobHeaderTop from "./mobile/MobHeaderTop";

// Custom hooks
import useWindowSize from "../../utils/customHooks/useWindowSize";

const Header = () => {
  const windowSize = useWindowSize();

  return (
    <>
      {windowSize > 768 ? (
        <>
          <HeaderTop />
          <HeaderMiddle />
          <HeaderBottom />
        </>
      ) : (
        <>
          <MobHeaderTop />
          <MobHeaderBottom />
        </>
      )}
    </>
  );
};

export default Header;
