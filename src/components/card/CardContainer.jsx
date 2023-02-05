import React from 'react';
import styled from 'styled-components';

export const CardContainer = (props) => {
    return (
        <>
            <Container>
                {props.children}
            </Container>
        </>
    )
}
export const Title = (props) => {
    return (
        <>
            <CardTitle>
                {props.children}
            </CardTitle>
        </>
    )
}
export const CategoriesLink = (props) => {
    return (
        <>
            <CardLink>
                {props.children}
            </CardLink>
        </>
    )
}




const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
   margin: 1rem;
   background: #fff;
   position: relative;
   padding: .5rem .5rem 3rem;
   width: 100%;
   height: 100%;
   max-width: 30rem;
   min-height: 35rem;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   
     
        &:hover{
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        }
        @media screen and (max-width: 576px) {
            /* display: inline-block; */
           
        }
      
`

const CardTitle = styled.h2`
           font-size: 2rem;
          padding: 1rem 0;
      `

const CardLink = styled.p`

      a{
            color: tomato;
            position: absolute;
            bottom: 1rem;
            font-size: 1.2rem;
            font-weight: 600;
         
         

            &:hover{
                color: #666;
                text-decoration: underline;
            }
        }
`