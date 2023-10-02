import React, { useState, useEffect } from "react";
import './MainContent.css'
import Folder from "./Folder";
import Subfolder from "./Subfolder";
import Link from "./Link";
import axios from "axios";
import Folderfile from "./Folderfile";
import { render } from "@testing-library/react";

function MainContent(props) {
    console.log("check rendering")
    let [RAWX, SETRAWX] = useState({})
    let RAW = {}
    let [PRESENTDATAX, SETPRESENTDATAX] = useState({})
    let PRESENTDATA = {}
    const [BOARDDATA, SETBOARDDATA] = useState([])
    const [MAINDATA, SETMAINDATA] = useState([])
    const [location, setlocation] = useState([]) 
    const [dotselect, setdotselect] = useState("")
    let [render_maindata, setrender_maindata] = useState([])
    let [boarddata, setboarddata] = useState([])
    let [render_boarddata, setrender_boarddata] = useState([])

    let datalist = {}
    let [datalistx, setdatalistx] = useState({})
    const [selected, setselected] = useState("")
    
    
    const [rawdatas, setrawdatas] = useState()
    
    const [filefolder, setfilefolder] = useState({ filefolderselected: false })
        

    useEffect(() => {
        setboarddata(Object.keys(props.data))
        setrawdatas(props.data)
        console.log("after using useeffect", boarddata, JSON.stringify(props.data))
        
        
        if (props.data.length != 0) {
            console.log("data recieved")

            let models = Object.keys(props.data)
            console.log(Object.keys(props.data))
            for (let i = 0; i < models.length; i++){
                console.log(props.data[models[i]], "each iter", props.data[models[i]], "each id")
                if (props.data[models[i]].length === 0){
                    console.log(models[i], "empty")
                    RAW = {...RAW, [models[i]]: {}}
                }
                for (let j = 0; j < props.data[models[i]].length; j++){
                    console.log(props.data[models[i]][j], "item", Object.keys(props.data[models[i]][j]["imp"]), props.data[models[i]][j]["_id"],"data", props.data[models[i]][j]["imp"][Object.keys(props.data[models[i]][j]["imp"])[0]], )
    
                    
                    RAW = { ...RAW, [models[i]]: {...RAW[models[i]], [Object.keys(props.data[models[i]][j]["imp"])[0]]: {"data": props.data[models[i]][j]["imp"][Object.keys(props.data[models[i]][j]["imp"])[0]], "_id": props.data[models[i]][j]["_id"] }  } }
                    
                    console.log(RAW)
    
                    console.log("collection", models[i])
                    console.log("item", Object.keys(props.data[models[i]][j]["imp"])[0], "_id", props.data[models[i]][j]["_id"])
                    console.log("data", props.data[models[i]][j]["imp"][Object.keys(props.data[models[i]][j]["imp"])[0]])
    
                   // dataHolder = {...datay}
                }
            }

            SETRAWX(RAW)

            SETBOARDDATA((item) => {

                return (
                    [...Object.keys(RAW)]
                )
            })

            

            console.log(location)
            for (let i = 0; i < location.length; i++){
                if (i == 1) {
                    PRESENTDATA = RAW[location[i]]
                    console.log(RAW[location[i]])
                }
                else {
                    PRESENTDATA = RAW[location[i]]
                    console.log(RAW[location[i]])
                    
                    
                }
            }
            console.log(PRESENTDATA)


        }
    }, [props.data])

    console.log(JSON.stringify(PRESENTDATA), JSON.stringify(RAWX))
    


    useEffect(() => {
        
        for (let i = 0; i < location.length; i++){
            let waiter = async () => {
                if (i == 1) {
                    // PRESENTDATA = PRESENTDATA[location[i]]
                    PRESENTDATA = PRESENTDATA[location[i]]["data"]
                    console.log(PRESENTDATA)
                }
                else if (i == 0) {
                    PRESENTDATA = RAWX[location[i]]
                    console.log(PRESENTDATA)
                }
                else if(i == 2){
                    PRESENTDATA = PRESENTDATA[location[i]]
                    console.log(PRESENTDATA)
                }
                else {
                    PRESENTDATA = PRESENTDATA[location[i]]
                    console.log(PRESENTDATA)
                    
                    
                }
            }
            waiter()
            
            console.log(location[i])
        }
        
        console.log(PRESENTDATA)
        console.log(PRESENTDATAX)
        console.log(location)
        SETPRESENTDATAX(PRESENTDATA)
        console.log(PRESENTDATAX)
        
    }, [location, RAWX])

    
    console.log(BOARDDATA, "BOARDDATA", Object.keys(RAW))






    console.log(boarddata, "board data", )
    console.log(JSON.stringify(props.data), "props data")
    console.log(JSON.stringify(rawdatas), "rawdataaaaas")

    useEffect(() => {
        let boarddatas = BOARDDATA.map((item) => {

            return (
                <Folder mainData={RAWX} name={item} selector={[selected, setselected]} globallocation={[location, setlocation]} category={"sidebarcomp"} dotselector={[dotselect, setdotselect]} BOARDDATA={[BOARDDATA, SETBOARDDATA]} changer={props.changer} presentdatax={[PRESENTDATAX, SETPRESENTDATAX]} />
            )
        })

        setrender_boarddata((item) => {
            return (
                boarddatas
            )
        })
    }, [props.data, props.changer[0], selected, dotselect])
    // render_boarddata = 


    

    // vert imp
    console.log(location)
    let iterator = []
    let cookeddata = []
    let renderer = []
    let id_holder = {}
    let idfinal = ""
    let valfinal = ""

   

    const requireddata = props.data[[...location]] ? props.data[[...location]] : []


    
    datalist[location[location.length - 1]] = renderer
    
    

    console.log(PRESENTDATAX)
    typeof(PRESENTDATAX) == "undefined" ? SETPRESENTDATAX({}) : console.log("valid present data")
    useEffect(() => {
    
        setrender_maindata((item) => {
            let listOfKeys = []
            if (typeof (PRESENTDATAX) == "object") {
                listOfKeys = Object.keys(PRESENTDATAX).map((item) => {
                    console.log(RAWX, item, location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"], location, PRESENTDATAX, PRESENTDATA)
                    return (
                        typeof (PRESENTDATAX) === "object"  ? <Subfolder key={Math.random()} name={item}  selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} dotselector={[dotselect, setdotselect]} changer={props.changer} idholder={location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"]}  presentdatax={PRESENTDATAX}  /> : item != "" ? <Link key={Math.random()} name={PRESENTDATAX} dotselector={[dotselect, setdotselect]}changer={props.changer} globallocation={[location, setlocation]} idholder={location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"]} presentdatax={PRESENTDATAX}  /> : ""
                    )
                })                
            } else {
                console.log([PRESENTDATAX])
                listOfKeys = [PRESENTDATAX].map((item) => {
                    console.log(item)
                    
                    return (
                        typeof (PRESENTDATAX) == "object"  ? <Subfolder key={Math.random()} name={item}  selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} dotselector={[dotselect, setdotselect]} changer={props.changer} idholder={location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"]}  presentdatax={PRESENTDATAX}  /> : item != "" ? <Link key={Math.random()} name={PRESENTDATAX} dotselector={[dotselect, setdotselect]} changer={props.changer} globallocation={[location, setlocation]} idholder={location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"]} presentdatax={PRESENTDATAX}  /> : ""
                    )
                })                
            }

            
            return (
                listOfKeys

                
            )
        })

        // render_maindata = 
    }, [PRESENTDATAX, dotselect, props.changer[0]])      
    console.log(render_boarddata)
    
    function folderAdder() {

        let createfile = prompt()
        let updatedata = {}
        
        for (let i = 0; i < Object.keys(PRESENTDATAX).length; i++){
            
            updatedata[Object.keys(PRESENTDATAX)[i]] = PRESENTDATAX[Object.keys(PRESENTDATAX)[i]]
        }
        updatedata[createfile] = ""

        if (location.length == 1) {
            updatedata = { [createfile]: "" }
            axios.post('http://localhost:8000/adddata', { location: location, collectionname: location[0], idholder: location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : "", modified: updatedata })
            console.log(updatedata)
            props.changer[1]((item) => {
                return (
                    createfile
                )
            })
        }
        else {
            axios.post('http://localhost:8000/adddata', { location: location, valholderx: valfinal, collectionname: location[0], addvalue: createfile, idholder: location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][location[1]]["_id"], modified: updatedata })
            props.changer[1]((item) => {
                return (
                    createfile
                )
            })
        }
    }

    function fileAdder() {
        let createfile = prompt()

        let updatedata = {}
        // console.log(renderer)
        if (location.length == 1) {
            
        }
        else {
            axios.post('http://localhost:8000/update', { location: location, valholderx: valfinal, collectionname: location[0], addvalue: createfile, idholder: location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][location[1]]["_id"], modified: createfile })
            props.changer[1]((item) => {
                return (
                    createfile
                )
            })
        }
    }

    return (
        <div className="maincontainer">

            <div className="underdir">

                <div className="sidebar">
                    <div className="topside">
                        <p>Console</p>

                        <div className="topsideimg" onClick={() => {
                            const renamer = prompt()

                            console.log(renamer)
                            

                            axios.post('http://localhost:8000/adddata', { category: "folder", collectionname: renamer })
                            
                            props.changer[1]((item) => {
                                console.log(renamer, item)
                                return (
                                    renamer
                                )
                            })
                            
                        } }>
                            <img src="https://img.icons8.com/parakeet/48/null/add.png" alt="" />
                        </div>
                    </div>
                    <div className="dataside">
                        {render_boarddata}   
                    </div>

                </div>

                <div className="mainsection" style={{ position: "relative", zIndex: 1 }}>
                    <div className="topdataside" >


                        <div className="dirbar">
                            <p style={{backgroundColor:"", color:"black", border:"none", borderRadius:"5px", fontSize:"1.5em", display:"flex", justifyContent:"center", alignItems:"center"}}>Directory:</p>
                            <p style={{height:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"inherit", margin:"0px 10px"}}>{location.map((itemx) => {
                                    
                                return (
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}><button style={{ display: "inline", height:"inherit", fontSize:"1.25em", backgroundColor:"lightgreen", padding:"5px 5px", border:"none", borderRadius:"10px", margin:"0px 5px"}} onClick={() => {
                                        let loclocation = []
                                        for (let i = 0; i <= location.indexOf(itemx); i++){
                                            loclocation.push(location[i])
                                        }

                                        setlocation((data) => {

                                            return (
                                                loclocation
                                            )
                                        })                
                                    }} >{itemx}</button><p style={{display: "inline", fontSize:"1.25em"}}>/</p></div>
                                )
                            })}</p>
                        </div>




                        {/* <img src="https://img.icons8.com/parakeet/48/null/add.png" alt="" onClick={dataAdder} /> */}
                        <div className="topimgholder" style={{ position: "relative"}}>
                            <img src="https://img.icons8.com/parakeet/48/null/add.png" alt="" onClick={() => filefolder.filefolderselected ? setfilefolder({filefolderselected : false}) : setfilefolder({filefolderselected : true})} />

                            <div className="folderfileholder" style={{}}>
                                {filefolder.filefolderselected ? <Folderfile folderadder={folderAdder} fileadder={fileAdder}  presentdatax={PRESENTDATAX} changer={props.changer} location={location} /> : console.log("filefolder")}
                            </div>
                            
                        </div>
                        
                    </div>
                    <hr />
                    <div className="mainsectiondata">
                        <div className="mainsectiondatachild">
                            {render_maindata}
                        </div>
                        
                    </div>   
                </div>
            </div>           
        </div>
    )
};

export default MainContent;