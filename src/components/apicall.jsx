import React, {useEffect, useState} from "react";
import axios from "axios";


function Apicall() {
    const [apidata, setapidata] = useState({})

    useEffect(() => {
        const data = axios.post('http://localhost:8000/createdata', {name: "vijay", age: "2000"})
            
        
    }, [])
    
    
    return (
        <p>{apidata.course}</p>
    )
}

export default Apicall;