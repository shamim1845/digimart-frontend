import React from "react";
import styled from "styled-components";

export const Button = ({ text, ...rest }) => {
  return <ButtonDefault {...rest}>{text}</ButtonDefault>;
};

export default Button;

const ButtonDefault = styled.button`
  border: none;
  color: var(--text-primary);
  background-color: tomato;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #dd5a43;
    color: #f1f1f1;
  }
`;
