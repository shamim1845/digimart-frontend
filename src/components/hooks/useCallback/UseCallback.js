import React, {useState, useCallback, useRef} from 'react'
import Child from './Child';

const UseCallback = () => {
    const inputRef = useRef();
    const [data, setData] = useState("Hello world!");
    const [toggle, setToggle] = useState(false);

    const returnComment = useCallback(() => {
               return data;
        }, [data] 
    )
const InputHandler = () => {
     setData(inputRef.current.value)
}


    return (
        <div>
            <h1>UseCallback Hooks</h1>
            <Child returnComment={returnComment}/>

                <input type="text" placeholder='type something'  ref={inputRef} />
                <button onClick={InputHandler}>submit</button>
<br />
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <p>Toggle Components</p>}
        </div>
    )
}

export default UseCallback
