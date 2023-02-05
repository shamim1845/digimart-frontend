import React, {createContext, useState} from 'react'
import Child from './Child';

export const AppContext = createContext(null);

const Parent = () => {
    const [data, setData] = useState("");

    return (
        <AppContext.Provider value={{data, setData}}>
           
            <h1>UseContext Hooks</h1>
            <Child />
        </AppContext.Provider>
    )
}

export default Parent
