import React , {useState, useRef} from 'react';
import styled from 'styled-components';

const UseRef = () => {
    const [data, setData] = useState('');
    const InputRef = useRef(null);

    const submitHandler = () => {
        InputRef.current.focus();
        setData(InputRef.current.value);
        InputRef.current.value = "";
    }
    return (
        <Container>
            <h1>useRef Hooks</h1>


            <Content>
                <input type="text" placeholder='Ex...' ref={InputRef} />
                <button onClick={submitHandler}>Submit</button><br /><br />
                <p>{data}</p>
            </Content>
        </Container>
    )
}

export default UseRef;


const Container = styled.div`

`

const Content = styled.div`

`