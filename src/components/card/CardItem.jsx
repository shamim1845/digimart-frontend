import React from 'react';
import styled from 'styled-components';

export const CardItem = (props) => {
    return (
        <>
            <Item>
                {props.children}
            </Item>
        </>
    )
}

const Item = styled.div`

margin: .5rem;
        img{
            height: 100%;
            max-height: 28rem;
            width: 26rem;
            transition: all .5s;
            margin-bottom: .5rem;
            &:hover{

                transform: scale(1.1);
               
            }
        }
       p{     
          color: #666;
          font-size: 1.2rem;
         font-weight: 500;
       
        }
`


export const CardItemsContainer =(props) => {
    return (
        <>
            <ItemsContainer>
                {props.children}
            </ItemsContainer>
        </>
    )
}
const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
 width: 100%;
 min-width: 27rem;
    
`
export const CardItemsWrapper = (props) => {
    return (
        <>
            <ItemsWraper>
                {props.children}
            </ItemsWraper>
        </>
    )
}

const ItemsWraper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
   width: 50%;
   height: 50%;
    margin-bottom: 1rem;
    img{
        width: 120px;
            height: 120px;
    }

`