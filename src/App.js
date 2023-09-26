import React from "react";
import "./App.css";
import Routes from "./components/Routes";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchAsyncLoggedIn, fetchAsyncUser } from "./redux/user/userSlice";
import { ToastContainer } from "react-toastify";
import { Detector } from "react-detect-offline";

export const backendUrl = process.env.REACT_APP_SERVER_URL;
export const rate = {
  shipping: 1,
  tax: 0.5,
};

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchAsyncLoggedIn());
  dispatch(fetchAsyncUser());

  return (
    <>
      <ToastContainer />
      <Routes />
      {/* <CheckConnection>
      </CheckConnection> */}
    </>
  );
};

export default App;

// => Check Internet connected or not
const CheckConnection = ({ children }) => {
  return (
    <Detector
      polling={{ enabled: true, interval: 10000, timeout: 10000 }}
      render={({ online }) => (
        <>
          {online ? (
            children
          ) : (
            <Container>
              <img
                src={"/images/wifi-disconnected.png"}
                alt="Internet disconnected"
              />
              <div>
                <h1> You are currently offline.</h1>
                <p>Please check your inter connection.</p>
              </div>
            </Container>
          )}
        </>
      )}
    />
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    width: 5rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2.1rem;
    }
  }
`;
