import styled from "styled-components";
import AuthMenu from "./headerUtils/AuthMenu";
import Currency from "./headerUtils/Currency.jsx";

const HeaderTop = () => {
  return (
    <HeaderTopContainer>
      <HeaderTopBar>
        <div className="left">
          <div>
            <img src="/images/icons/email-envelop.svg" alt="envelop" />
            <span>Email: support@digimart.com</span>
          </div>
          <div>
            <img src="/images/icons/tag-fill.svg" alt="Tag" />
            <span>Today Deals</span>
          </div>
        </div>
        <div className="right">
          <div className="authmenu_container">
            <AuthMenu />
          </div>
          {/* <div className="currency_container">
            <Currency />
          </div> */}
          {/* <div className="site_language">
            <img src="/images/icons/bd-flag.svg" alt="Country flag" />
          </div> */}
        </div>
      </HeaderTopBar>
    </HeaderTopContainer>
  );
};

export default HeaderTop;

const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 3rem;
  border-top: 5px solid tomato;
  border-bottom: 1px solid #e4e9eb;
`;
const HeaderTopBar = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;

  .left {
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    flex: 2;
    border-right: 1px solid #e4e9eb;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 0.5rem;
      }
      span {
        margin-bottom: 0;
      }
    }
  }
  .right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .authmenu_container {
      border-right: 1px solid #e4e9eb;
    }
    .currency_container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #e4e9eb;
      padding: 0 1rem;
    }

    .site_language {
      display: flex;
      align-items: center;
      padding: 1rem;
      border-right: 1px solid #e4e9eb;

      img {
        width: 25px;
      }
    }
  }
`;
