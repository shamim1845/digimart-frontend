import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const AutoFetching = ({ handler }) => {
  const fetchRef = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handler();
          }
        });
      },
      { root: null }
    );

    observer.observe(fetchRef.current);
  }, [handler]);

  return <Container ref={fetchRef}>AutoFetching</Container>;
};

export default AutoFetching;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;
