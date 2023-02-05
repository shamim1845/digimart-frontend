import React, {useContext} from 'react'
import Child2 from './Child2'
import { AppContext } from './Context'

const Child = () => {
    const {data} = useContext(AppContext)
    return (
        <div>
             <Child2 /> 
            <hr />
            {data}

           
        </div>
    )
}

export default Child
