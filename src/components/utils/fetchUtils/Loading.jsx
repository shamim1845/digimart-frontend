import styled from "styled-components";
import ReactDOM from "react-dom";

const Loading = () => {
  return ReactDOM.createPortal(
    <LoadingContainer>
      <Circle>
        <div className="loader"></div>
      </Circle>
    </LoadingContainer>,
    document.getElementById("loader")
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.281);
  cursor: not-allowed;
  overflow: hidden;
`;
const Circle = styled.div`
  .loader {
    width: 75px;
    height: 80px;
    margin: 0 auto;
    position: relative;
    animation: spin 0.8s linear infinite;
  }
  .loader:before,
  .loader:after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 14px;
    box-shadow: 18px 18px #0db14c, -18px -18px #121313;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    background: tomato;

    /* animation: load 1.3s linear infinite; */
  }
  .loader:after {
    box-shadow: 18px 18px tomato, -18px -18px #cd014f;
    transform: translate(-50%, -50%) rotate(90deg);
  }
  @keyframes load {
    50% {
      height: 30px;
    }
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
