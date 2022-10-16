import React from 'react';
import styled from 'styled-components';

const OrderSucess = () => {
  return (
    <OrderSucessContainer>
        <CheckMark>
        <i className="bi bi-check-circle-fill"></i>
        </CheckMark>

        <Message>
            <h1>Your order has been received</h1>
            <p>Thank you for shopping with us</p>
        </Message>

        <Button>
            <button>View order details <i className="bi bi-arrow-right"></i></button>
        </Button>
    </OrderSucessContainer>
  )
}

export default OrderSucess;

const OrderSucessContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1440px;
height: 60vh;
`
const CheckMark = styled.div`
margin-bottom: 1rem;
i{
    font-size: 6rem;
    color: #4ED18F;
}

`
const Message = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
    font-weight: 400;
}
p{
    font-size: 1.6rem;
    font-weight: 300;
}
`
const Button = styled.div`
margin-top: 2rem;

    button{
        border: 1px solid tomato;
        border-radius: 5rem;
        padding: 0.5rem 1rem;
        font-size: 1.4rem;
        color: tomato;
        transition: all .5s;

        i{
            padding-left: 1rem;
            font-size: 1.7rem;
        
        }
        &:hover{
            color: #000;
            border: 1px solid #000;
        }
    }
`