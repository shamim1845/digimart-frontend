import React, {forwardRef, useImperativeHandle, useState} from 'react'

const Button = forwardRef((props, ref) => {
 const [data, setData] = useState(false);

 useImperativeHandle(ref, () => {
     return{
         toogleFromParent() {
             setData(!data)
         }
     }
 })


    return (
        <>
        <div>
            <button onClick={() => setData(!data)}>Toggle from child</button><br /><br />

            </div>
            {
                data && <p>Toogle Components</p>
            }
            </>
    )
})

export default Button
