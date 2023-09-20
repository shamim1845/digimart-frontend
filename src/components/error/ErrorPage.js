import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Container>
      <h1>Opps! Page not found...</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </Container>
  );
};

export default ErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55vh;
  h1 {
  }
  button {
    margin-top: 1rem;
    border: none;
    background-color: tomato;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #fff;
    }
  }
`;
