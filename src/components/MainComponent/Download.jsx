import axios from "axios";
import React, { useState, useEffect } from "react";

function Download(props) {
    const [real, setreal] = useState()
    let data

    useEffect(() => {
        (async () => {
            data = await axios.get('http://localhost:8000/fetchData').then((item) => {
                setreal((itemx) => {
                    return (
                        item
                    )
                })
            })
        })()

        
    }, [data])

    console.log(real, "useeffect")

    function change() {
        console.log(props.RAW[0])

        props.RAW[1]((item) => {
            return (
                { ...item, "dog": {"df": "xdfg"} }
            )
        })
        console.log(props.RAW[0])
    }
    

    return (
        <div>
            <p>data</p>
            <button onClick={change}>refresh</button>
        </div>
    )
    
}

export default Download;