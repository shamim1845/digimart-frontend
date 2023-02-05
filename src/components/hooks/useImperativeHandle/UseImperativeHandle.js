import React, {useRef} from 'react'
import Button from './Button'

const UseImperativeHandle = () => {
const buttonRef = useRef(null)

    return (
        <div>
            <h1>useImparativeHandle</h1><br /><br />

            <div>
                <button onClick={() => buttonRef.current.toogleFromParent()}>Toggle from parent</button>

                <Button ref={buttonRef}/>
            </div>
            
        </div>
    )
}

export default UseImperativeHandle
