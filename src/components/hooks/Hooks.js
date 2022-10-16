import React, {useReducer, } from 'react'
import UseReducer from './UseReducer';
import styled from 'styled-components';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseLayoutEffect from './UseLayoutEffect';
import UseImperativeHandle from './useImperativeHandle/UseImperativeHandle';
import UseContext  from './useContext/Context';
import UseMemo from './UseMemo';
import UseCallback from './useCallback/UseCallback';


const reducer = (state, action) => {
    switch(action.type) {
        case "useReducer": return {useReducer: !state.useReducer};
        case "useEffect": return {useEffect: !state.useEffect};
        case "useRef": return {useRef: !state.useRef};
        case "useLayoutEffect": return {useLayoutEffect: !state.useLayoutEffect};
        case "useImperativeHandle": return {useImperativeHandle: !state.useImperativeHandle};
        case "useContext": return {useContext: !state.useContext};
        case "useMemo": return {useMemo: !state.useMemo};
        case "useCallback": return {useCallback: !state.useCallback};
        default: return {allHooks: !state.allHooks }
    }
}

const Hooks = () => {
    const [state, dispatch] = useReducer(reducer, {
        allHooks: false,
        useReducer: false, 
        useEffect: false, 
        useRef: false, 
        useLayoutEffect: false, 
        useImperativeHandle: false, 
        useContext: false, 
        useMemo: false, 
        useCallback: false, 
    })
    return (
        <>
        <HooksContainer>
            <h1>All react hooks</h1>

        <Content>
            <Sidebar>

            <h2 onClick={() => dispatch({type: "useReducer"})}>useReducer</h2>
            <h2 onClick={() => dispatch({type: "useEffect"})}>useEffect</h2>
            <h2 onClick={() => dispatch({type: "useRef"})}>useRef</h2>
            <h2 onClick={() => dispatch({type: "useLayoutEffect"})}>useLayoutEffect</h2>
            <h2 onClick={() => dispatch({type: "useImperativeHandle"})}>useImperativeHandle</h2>
            <h2 onClick={() => dispatch({type: "useContext"})}>useContext</h2>
            <h2 onClick={() => dispatch({type: "useMemo"})}>useMemo</h2>
            <h2 onClick={() => dispatch({type: "useCallback"})}>useCallback</h2>
          
            </Sidebar>

            <MainContent>
                {state.useReducer &&   <UseReducer />}
                {state.useEffect &&   <UseEffect />}
                {state.useRef &&   <UseRef />}
                {state.useLayoutEffect &&   <UseLayoutEffect />}
                {state.useImperativeHandle &&   <UseImperativeHandle />}
                {state.useContext &&   <UseContext />}
                {state.useMemo &&   <UseMemo />}
                {state.useCallback &&   <UseCallback />}
             
              
            </MainContent>
        </Content>
        
        </HooksContainer>
        </>
    )
}

export default Hooks;


const HooksContainer = styled.div`
min-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
`
const Content = styled.div`
background-color: #ddd;
display: flex;
justify-content: space-around;
align-items: center;
width: 70%;
min-height: 40vh;

`
const Sidebar = styled.div`
  
width: 50%;

background-color: #ddd;
    h2{
        cursor: pointer;
        margin: 5px 0;
        font-size: 1.7rem;
        &:hover{
            color: tomato;

        }
    }     
`
const MainContent = styled.div`
width: 50%;
`