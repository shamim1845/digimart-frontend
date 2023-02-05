import React, {useState ,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'

const UseEffect = () => {
    const [data, setData] = useState()
    const loadData = async() => {
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(data.data);
        setData(data.data)
    }
    useEffect(() => {
            loadData()
    }, [])
    return (
        <UseEffectContainer>
           <h1>useEffect Hooks</h1>
           {
               
             data && data.slice(0, 3).map((post) => {
                 return(
                    <div key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.body}</h3>
                </div>
                 )
                
               })
           }
        </UseEffectContainer>
    )
}

export default UseEffect;

const UseEffectContainer = styled.div`
h2{
    color: tomato;
    font-size: 2rem;
}
h3{
    color: #333;
    font-size: 1.6rem;
}
`
