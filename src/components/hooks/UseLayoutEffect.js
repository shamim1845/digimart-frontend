import React, {useLayoutEffect, useEffect, useRef} from 'react'

const UseLayoutEffect = () => {

    const divRef = useRef(null)

    useEffect(() =>  {
        divRef.current.value = "useEffect"
 console.log(divRef.current.value);
    }, [])

    useLayoutEffect(() => {
        divRef.current.value = "useLayoutEffect"
    console.log(divRef.current.value);
    }, [])


    return (
        <div>
            <h1>useLayoutEffect Hooks</h1>
            <br /><br />

            <div>
                <input   ref={divRef} style={{width: "400", height: "200"}} />
            </div>
            
        </div>
    )
}

export default UseLayoutEffect
