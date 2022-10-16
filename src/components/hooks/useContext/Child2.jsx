import React, {useContext} from 'react'
import { AppContext } from './Context'

const Child2 = () => {
    const {setData} = useContext(AppContext)
    return (
        <div>
            <hr />
            <input type="text" placeholder='Ex...' onChange={(e) => setData(e.target.value)} />
 
        </div>
    )
}

export default Child2
