import React, {useEffect} from 'react'

const Child = ({returnComment}) => {
    useEffect(() => {
      console.log("reRender");
    }, [returnComment])
    return (
        <div>
            <h2>{returnComment()}</h2>
        </div>
    )
}

export default Child
