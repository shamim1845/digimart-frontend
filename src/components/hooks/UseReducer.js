import React, {useReducer} from 'react';
import styled from 'styled-components';

const reducer = (state, action) => {
    switch(action.type) {
        case "Increment": return {count: state.count + 1};
        case "Decrement": 
        console.log("decrement");
        if(state.count>0) {
            return {count: state.count - 1};
        }else {
            return {count: 0};
        }
        case "ShowText": return {text: !state.text, count: state.count};
        default:  return ;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, text: false})
    return (
        <>
            
            <Container>
        <h1>useReducer Hooks</h1>
                <h2>{state.count}</h2>
                <button onClick={() => dispatch({type: "Increment"})}>Increments</button>
                <button onClick={() => dispatch({type: "Decrement"})}>Decrements</button>
<br /><br />
               {state.text && <p>hello world</p>}
                <button onClick={() => dispatch({type: "ShowText"})}>Toogle</button>
            </Container>
        </>
    )
}

export default UseReducer;

const Container = styled.div`
    text-align: center;
    margin: 2rem 0;
`
