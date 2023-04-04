import React, {useEffect, useState} from "react";
import "./DownloadPaper.css";
import axios from "axios";
import Selector from "./Selector";
import downloadlogo from './download.png'


function DownloadPaper() {
    const [options, setoptions] = useState([])
    const [data, setdata] = useState({})
    const [filtereddata, setfiltereddata] = useState({})
    const [presentdata, setpresentdata] = useState({})
    const [counter, setcounter] = useState()
    // const [inc, setinc] = useState(1)
    const [comp, setcomp] = useState([])
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
            setoptions((prev) => {
                // setinc((item) => item + 1)
                return (
                    [...prev, <Selector counter={[counter, setcounter]} presentdata={[presentdata, setpresentdata]} options={[options, setoptions]} key={"key" + Math.random() + Math.random()} name={options.length + 1} comp={[comp, setcomp]}  />]
                )   
            })        
        }
        
        
    }, [counter])
    


    
    return (
        <>
            <div className="container">
                <div className="imgholder">
                    <img src={downloadlogo} alt="" width="256px" />
                </div>
                <div className="downloadholder">
                    
                    {options}
                    {presentdata != "" && typeof(presentdata) == "string" ? <div className="downloadbtn" style={{ display: "inline", width:"10vw", height:"50px", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center", border:"none", borderRadius:"10px" }} ><a href={presentdata} style={{textDecoration:"none", width:"95%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"1.5em"}} target="_blank">Download</a></div> : ""}
                </div>
                
            </div>
        </>
    )
}

export default DownloadPaper;