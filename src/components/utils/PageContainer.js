import React from 'react';
import styled from 'styled-components';

const PageContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default PageContainer;

const Container = styled.div`
width: 100%;
background-color: #F2F2F2;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
