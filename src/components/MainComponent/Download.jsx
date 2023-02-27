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

    
    

    return (
        <div>
            <p>data</p>
            <button onClick={() => console.log("x")}>refresh</button>
        </div>
    )
    
}

export default Download;