import React, {useEffect, useState} from "react";
import "./DownloadPaper.css";
import axios from "axios";
import Selector from "./Selector";


function DownloadPaper() {
    const [options, setoptions] = useState([])
    const [data, setdata] = useState({})
    const [filtereddata, setfiltereddata] = useState({})
    const [presentdata, setpresentdata] = useState({})
    const [counter, setcounter] = useState()

    // const [optionlocation, setoptionlocation] = useState([])

    

    useEffect(() => {
        let x = async () => {
            let requestdata = await axios.get("http://localhost:8000/userdata")
            setdata(requestdata.data)
        }
        x()    
    }, [])

    
    useEffect(() => {
        let cook = {}
        if (Object.keys(data) != 0) {
            for (let i = 0; i < Object.keys(data).length; i++){
                console.log(data[Object.keys(data)[i]])
                // cook[Object.keys(data)[i]] = 
                for (let j = 0; j < data[Object.keys(data)[i]].length; j++) {
                    console.log(data[Object.keys(data)[i]], data[Object.keys(data)[i]][j]["imp"])
                    cook[Object.keys(data)[i]] = {...cook[Object.keys(data)[i]], [Object.keys(data[Object.keys(data)[i]][j]["imp"])[0]] : data[Object.keys(data)[i]][j]["imp"][Object.keys(data[Object.keys(data)[i]][j]["imp"])[0]]}
                } 
            }   
            console.log(cook)
            setfiltereddata(cook)
            setpresentdata(cook)
            setcounter(1)
        }
        
    },[data])
    
    
    
    useEffect(() => {

        if (Object.keys(data) != 0) {
            // let optionsdata = []
            // console.log(presentdata, this)
            // for (let i = 0; i < Object.keys(presentdata).length; i++){
            //     optionsdata.push(<option>{Object.keys(presentdata)[i]}</option>)
            // }
    
            // setoptions(<select onChange={setpresentdata(filtereddata["guns"])}>{optionsdata}</select>)
            
            // for (let i = 0; i < counter; i++){
                
            // }
            setoptions((prev) => {
                // console.log(counter)
                return (
                    [...prev, <Selector counter={[counter, setcounter]} presentdata={[presentdata,setpresentdata]} options={[options, setoptions]} key={"key"+Math.random() + Math.random()} />]
                )
                
            })
            
        }
        
        
    }, [counter])
    


    
    return (
        <>
            <div className="container">
                {options}
            </div>
        </>
    )
}

export default DownloadPaper;