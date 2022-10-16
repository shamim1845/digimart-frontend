import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadingContainer>
            <Circle>

            1
<div className="loader"></div>
            </Circle>
        </LoadingContainer>
    )
}

export default Loading;


const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
    
`
const Circle = styled.div`
    .loader{
    width: 75px;
    height: 80px;
    margin: 0 auto;
    position: relative;
    animation: spin 4s linear infinite;
}
.loader:before,
.loader:after{
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 14px;
    box-shadow: 18px 18px #0DB14C, -18px -18px #0189D2;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    animation: load 1.2s linear infinite;
}
.loader:after{
    box-shadow: 18px 18px #6461AB, -18px -18px #CD014F;
    transform: translate(-50%, -50%) rotate(90deg);
}
@keyframes load{
    50%{ height: 42px; }
}
@keyframes spin{
    100%{ transform: rotate(360deg); }
}
`
