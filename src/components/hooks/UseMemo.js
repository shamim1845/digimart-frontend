import React, {useEffect, useState, useMemo} from 'react';
import axios from 'axios';

const UseMemo = () => {
    const [data, setData] = useState('');
    const [toggle, setToggle] = useState(false);

    const fetchData = async() => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setData(res.data)
        console.log(res.data);
    }

    useEffect( () => {
        fetchData();
    }, [])

    const findLongestName = (comments) => {
        let longestName = '';

        for(let i=0; i<comments.length; i++) {
                if(comments[i].name > longestName) {
                    longestName = comments[i].name
                }
        }
        console.log("computed");
        return longestName;
    }
    // const myData = [
    //     {name: "ab"},
    //     {name: "abc"},
    //     {name: "abcd"},
    //     {name: "abcde"},
    //     {name: "abcdefghi"},
    //     {name: "abcdefg"},
    // ]

    const getLongestName = useMemo(() => findLongestName(data), [data])
    return (
        <div>
            <h1>UseMemo Hooks</h1>

            <p>{ getLongestName}</p>

            <button onClick={() => setToggle(!toggle)}>Toggle</button>
                {toggle && <h1>Toogle text</h1>}
        </div>
    )
}

export default UseMemo
