import React, { useState, useEffect } from "react";
import './MainContent.css'
import Folder from "./Folder";
import Subfolder from "./Subfolder";
import Link from "./Link";
import axios from "axios";
import Folderfile from "./Folderfile";
import { render } from "@testing-library/react";
import Download from "./Download";

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
    // const [CHANGER, SETCHANGER] = useState("")

    let datalist = {}
    let [datalistx, setdatalistx] = useState({})
    const [selected, setselected] = useState("")
    
    
    const [rawdatas, setrawdatas] = useState()
    
    const [filefolder, setfilefolder] = useState({ filefolderselected: false })
    
    // const [dataList, setdataList] = useState({})
    
    


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

    


    // function prepareData() {
    //     // let dataHolder = {}

        
    //     let models = Object.keys(props.data)
    //     console.log(Object.keys(props.data))
    //     for (let i = 0; i < models.length; i++){
    //         console.log(props.data[models[i]], "each iter", props.data[models[i]], "each id")
    //         if (props.data[models[i]].length === 0){
    //             console.log(models[i], "empty")
    //             RAW = {...RAW, [models[i]]: {}}
    //         }
    //         for (let j = 0; j < props.data[models[i]].length; j++){
    //             console.log(props.data[models[i]][j], "item", Object.keys(props.data[models[i]][j]["imp"]), props.data[models[i]][j]["_id"],"data", props.data[models[i]][j]["imp"][Object.keys(props.data[models[i]][j]["imp"])[0]], )

                
    //             RAW = { ...RAW, [models[i]]: {...RAW[models[i]], [Object.keys(props.data[models[i]][j]["imp"])[0]]: {"data": props.data[models[i]][j]["imp"][Object.keys(props.data[models[i]][j]["imp"])[0]], "_id": props.data[models[i]][j]["_id"] }  } }
                
    //             console.log(RAW)

    //             console.log("collection", models[i])
    //             console.log("item", Object.keys(props.data[models[i]][j]["imp"])[0], "_id", props.data[models[i]][j]["_id"])
    //             console.log("data", props.data[models[i]][j]["imp"][Object.keys(props.data[models[i]][j]["imp"])[0]])

    //            // dataHolder = {...datay}
    //         }
    //     }

    //     RAWX = Object.keys(RAW)
    //     console.log("ready", JSON.stringify(RAW))
        
    //     // console.log("collections", Object.keys(RAW), "items", RAW["cbses"],Object.values(RAW["cbses"]), RAW)
    // }
    // prepareData()

    // console.log("RAW", RAW, "collections", Object.keys(RAW), "items", JSON.stringify(RAW["cbses"]))
    // if(RAW["cbses"] == "undefined" || RAW["cbses"] == "null"){
    //     console.log("undefined")
    // }else{
    //     console.log(typeof(RAW["cbses"]))
    //     console.log(Object.keys(RAW["cbses"]))
    // }

    // let boardDataFetcher = async () => {
    //     // BOARDDATA = Object.keys(RAW)
    //     SETBOARDDATA((item) => {
    //         console.log(item, Object.keys(RAW))
    //         let xor = Object.keys(RAW)
    //         return (
    //             [...Object.keys(RAW)]
    //         )
    //     })
    // }
    // useEffect(() => {
    //     SETBOARDDATA((item) => {
    //         console.log(Object.keys(RAW))
    //         console.log(item)
    //         return (
    //             [...item, ...Object.keys(RAW)]
    //         )
    //     })
    // }, [RAWX])
    
    // boardDataFetcher()
    console.log(BOARDDATA, "BOARDDATA", Object.keys(RAW))






    console.log(boarddata, "board data", )
    console.log(JSON.stringify(props.data), "props data")
    console.log(JSON.stringify(rawdatas), "rawdataaaaas")
     
    // const render_boarddata = boarddata.map((boarddataitem) => {
    //     console.log(boarddataitem, "hey")
        
    //     return (
            
    //         <Folder maindata={props.data}   key={Math.random()} name={boarddataitem} selector={[selected, setselected]} datalistxx={[datalistx, setdatalistx]} globallocation={[location, setlocation]} category={"sidebarcomp"} raw={rawdatas} dotselector={[propselect, setpropselect]} />
    //     )       
    // })
    useEffect(() => {
        let boarddatas = BOARDDATA.map((item) => {

            return (
                <Folder mainData={RAWX} name={item} selector={[selected, setselected]} globallocation={[location, setlocation]} category={"sidebarcomp"} dotselector={[dotselect, setdotselect]} BOARDDATA={[BOARDDATA, SETBOARDDATA]} />
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

    for (let i = 0; i < location.length; i++){
        if (i === 0) {
            if (typeof (cookeddata) == "object") { 
                cookeddata = props.data[location[i]]
                iterator = Object.values(cookeddata)
                console.log("iiiiiiiiiiiiiiiiiiiiiiiiiii", JSON.stringify(cookeddata))
                // let id_holder = {}
                let somedata ={}
                // let somedata = []
                console.log(Object.keys(cookeddata), "000cooked", cookeddata)
                for (let k = 0; k < Object.keys(cookeddata).length; k++){
                    console.log(JSON.stringify(props.data[location[i]][k]["imp"]), "kkkcooked", typeof (props.data[location[i]][k]["imp"]))
                    console.log("original id", props.data[location[i]][k]["_id"], somedata)
                    // somedata.push(props.data[location[i]][k]["imp"])
                    let year = Object.keys(props.data[location[i]][k]["imp"])[0]
                    console.log(Object.keys(props.data[location[i]][k]["imp"])[0], "year")
                    
                    somedata[Object.keys(props.data[location[i]][k]["imp"])[0]] = props.data[location[i]][k]["imp"][year]
                    id_holder[Object.keys(props.data[location[i]][k]["imp"])[0]] = props.data[location[i]][k]["_id"]

                }
                
                cookeddata = somedata
                console.log(Object.keys(somedata), "keys", Object.values(somedata), id_holder)
                // cookeddata = [...somedata]

                
                console.log(cookeddata, somedata)
                console.log("loc val", location[i])
            }
            
        }
        else {
            console.log("id coook", JSON.stringify(cookeddata))
            if (typeof (cookeddata) == "object") {
                console.log("else part")
                let cookeddatakeysx = Object.keys(cookeddata)
                let cookeddatavaluesx = Object.values(cookeddata)
                // console.log(cookeddatakeysx, "keys", cookeddatavaluesx, "values")

                let finaldatax = cookeddatakeysx.map((item) => {
                    let keyofdatax = item
                    let valueofdatax = cookeddata[item]
                    return (
                        {[keyofdatax]: valueofdatax}
                    )
                })
                console.log("coooooooooooooooooooked ddddaata", JSON.stringify(cookeddata), [cookeddata],"finalx", JSON.stringify(finaldatax))
                cookeddata = finaldatax
                

                for (let j = 0; j < cookeddata.length; j++){
                    console.log(cookeddata[j], "each iteration", typeof(cookeddata[j]))
                    
                    let somedatax = {}
                    if ([...Object.keys(cookeddata[j])] == location[i]) {
                        
                        cookeddata = cookeddata[j][location[i]]
                        console.log("mathed", JSON.stringify(cookeddata), JSON.stringify(id_holder[location[i]]))
                        console.log(Object.keys(cookeddata), "keys", Object.values(cookeddata))
                        idfinal = location[1] == undefined ? id_holder[location[i]] : id_holder[location[1]]
                        valfinal = cookeddata
                        
                    }
                    else {
                        console.log("not matched", cookeddata, JSON.stringify(cookeddata), location[i], cookeddata[j])
                    }
                }
            }
        }
        console.log(cookeddata, "cooooook", typeof(cookeddata) === 'object', typeof(cookeddata))
        let cookeddatakeys = Object.keys(cookeddata)
        let cookeddatavalues = Object.values(cookeddata)
        let finaldata = []

        if (typeof (cookeddata) != "object") {
            console.log([cookeddata], "exceo")
            finaldata = [cookeddata]
            
        }
        else {
            finaldata = cookeddatakeys.map((item) => {
                let keyofdata = item
                let valueofdata = cookeddata[item]
                return (
                    {[keyofdata]: valueofdata}
                )
            })
        }

        

        

        console.log(JSON.stringify(cookeddata), "looped data", iterator, Object.keys(cookeddata), JSON.stringify(finaldata))
        renderer = finaldata
        console.log(cookeddata, "raw data")
        // cookeddata = finaldata
    }

    const requireddata = props.data[[...location]] ? props.data[[...location]] : []


    // useEffect((() => {
    //     datalist[[location[location.length - 1]]] = renderer
    // }), [renderer])


    // const requireddata = []
    
    datalist[location[location.length - 1]] = renderer
    
    // datalistx.push({[location[location.length - 1]]: renderer})
    
    //  render_maindata = renderer.map((item) => {
    //     // console.log(Object.keys(item.imp), "itteemmmmm")
    //     console.log(item, "iteeeeeeeeeeeeeeeeeeeeeeeem", datalist, "val finalx", valfinal, "id x final", idfinal, "id holder", id_holder, Object.keys(item)[0], typeof (idfinal), idfinal == "")
    //     console.log(renderer, item)
    //     // let rendererpass = {}
    //     // let z = location.length > 1 ? rendererpass = renderer : ""
    //     // idfinal == "" ? idfinal = id_holder[Object.keys(item)[0]] : ""

    //     location.length == 1 ? idfinal = id_holder[Object.keys(item)[0]] : console.log("length g 1")
        
    //     console.log("mod id", idfinal)
    //     return (

    //         typeof (item) === "object"  ? <Subfolder key={Math.random()} name={typeof (item) === "object" ? Object.keys(item) : item} datalistxx={[datalistx, setdatalistx]} selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} dotselector={[dotselect, setdotselect]} raw={rawdatas} idholder={idfinal} valholder={cookeddata} rendererholder={renderer} /> : item != "" ? <Link key={Math.random()} name={item } dotselector={[dotselect, setdotselect]} globallocation={[location, setlocation]} idholder={idfinal} rendererholder={renderer} /> : ""
                
    //         // <Subfolder key={Math.random()} name={typeof(item) === "object" ? Object.keys(item) : item} selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} />
    //     )
    // }) 

    console.log(PRESENTDATAX)
    useEffect(() => {
        console.log(PRESENTDATAX, Object.keys(PRESENTDATAX))
        setrender_maindata((item) => {
            let listOfKeys = []
            if (typeof (PRESENTDATAX) == "object") {
                listOfKeys = Object.keys(PRESENTDATAX).map((item) => {
                    console.log(RAWX, item, location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"], location, PRESENTDATAX, PRESENTDATA)
                    return (
                        typeof (PRESENTDATAX) === "object"  ? <Subfolder key={Math.random()} name={item}  selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} dotselector={[dotselect, setdotselect]} changer={props.changer} idholder={location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"]} valholder={cookeddata} rendererholder={renderer} /> : item != "" ? <Link key={Math.random()} name={PRESENTDATAX} dotselector={[dotselect, setdotselect]} globallocation={[location, setlocation]} idholder={location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"]} rendererholder={renderer} /> : ""
                    )
                })                
            } else {
                console.log([PRESENTDATAX])
                listOfKeys = [PRESENTDATAX].map((item) => {
                    console.log(item)
                    return (
                        typeof (PRESENTDATAX) === "object"  ? <Subfolder key={Math.random()} name={item}  selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} dotselector={[dotselect, setdotselect]} changer={props.changer} idholder={location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"]} valholder={cookeddata} rendererholder={renderer} /> : item != "" ? <Link key={Math.random()} name={PRESENTDATAX} dotselector={[dotselect, setdotselect]} globallocation={[location, setlocation]} idholder={location[1] != undefined ? RAWX[location[0]][location[1]]["_id"] : RAWX[location[0]][item]["_id"]} rendererholder={renderer} /> : ""
                    )
                })                
            }

            
            return (
                listOfKeys

                
            )
        })

        // render_maindata = 
    }, [PRESENTDATAX, dotselect])
    
        
    console.log(render_boarddata)
    console.log(renderer, "finaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal")
    console.log(JSON.stringify(renderer))

    useEffect(() => {
        setdatalistx({...datalistx, [location[location.length-1]] : renderer})
    },[location])
    




    // if (renderer.length === 1 && renderer[0] == "") {
    //     console.log(renderer[0], "folder or file")
    // } else if (renderer.length >= 1 && typeof(renderer[0]) == Object) {
    //     console.log(renderer[0], "only folders")
    // }else {
    //     console.log(renderer, "not file")
    // }




    function folderAdder() {
        

        let createfile = prompt()

        let updatedata = {}
        
        for (let i = 0; i < renderer.length; i++){
            // if (Object.keys(renderer)[i][0] == location[location.length - 1]) {
            //     updatedata[]
            // }
            updatedata[Object.keys(renderer[i])[0]] = renderer[i][Object.keys(renderer[i])[0]] 
        }
        updatedata[createfile] = ""

        if (location.length == 1) {
            updatedata = { [createfile]: "" }
            axios.post('http://localhost:8000/adddata', { location: location, collectionname: location[0], idholder: idfinal, modified: updatedata })
            props.changer[1]((item) => {
                return (
                    createfile
                )
            })
        }
        else {
            axios.post('http://localhost:8000/adddata', { location: location, valholderx: valfinal, collectionname: location[0], addvalue: createfile, idholder: idfinal, modified: updatedata })
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
        console.log(renderer)
        if (location.length == 1) {
            
        }
        else {
            axios.post('http://localhost:8000/update', { location: location, valholderx: valfinal, collectionname: location[0], addvalue: createfile, idholder: idfinal, modified: createfile })
            props.changer[1]((item) => {
                return (
                    createfile
                )
            })
        }
    }

    
    // datalist[location[location.length - 1]] = renderer
    // console.log(datalist, "daaaaaaaaaaaataaaaaa lllllllllllist")
    // setboarddata((item) => [...Object.keys(props.data)])
    return (
        <div className="maincontainer">

            <div className="dirbar">
                <p>Directory:</p>
                <p>{location.map((itemx) => {
                    // let dataz = props.data[location[0]].map((item) => {
                    //     return (
                    //         item["imp"]
                    //     )
                    // })

                    
                    return (
                        <div style={{ display: "inline" }}><button style={{ display: "inline" }} onClick={() => {
                            console.log("heeeeey daaaaaaaaaaaaaaaaaata", props.data[itemx], renderer, "in", )
                            console.log("renderer", renderer, "datalistx",datalistx, "pitem", datalistx[itemx], "item", itemx)

                            // if (location.length == 1) {
                                
                            //     console.log(dataz)
                            // }
                            // else {
                            //     for (let i = 0; i < dataz.length; i++){
                            //         if (dataz[i][item] != undefined) {
                            //             console.log(dataz[i][item])
                            //         }
                            //         else {
                            //             console.log("undefined")
                            //         }
                            //     }
                            //     console.log()
                                
                            // }


                            // console.log(datalist[item], datalistx,"zaa", renderer, "item", JSON.stringify(datalistx[item]), typeof(datalistx[item]), item)

                            // render_maindata = datalistx[itemx].map((item) => {
                            //     // console.log(Object.keys(item.imp), "itteemmmmm")
                            //     console.log(item, "iteeeeeeeeeeeeeeeeeeeeeeeem", datalistx[itemx], itemx)
                                
                        
                            //     return (
                        
                            //         typeof (item) === "object"  ? <Subfolder key={Math.random()} name={typeof (item) === "object" ? Object.keys(item) : item} datalistxx={[datalistx, setdatalistx]} selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} dotselector={[propselect, setpropselect]} raw={rawdatas} idholder={idfinal} valholder={valfinal} rendererholder={renderer} /> : item != "" ? <Link key={Math.random()} name={item } /> : ""
                                     
                            //     )
                            // }) 
                            
                            // renderer = datalistx[itemx]
                            // console.log(render_maindata, "renderer_maindata")


                            
                        }} >{itemx}</button><p style={{display: "inline"}}>/</p></div>
                    )
                })}</p>
            </div>
            
            
            
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
                            

                            
                            
                            
                            // setboarddata((localboarddataitem) => [...localboarddataitem, renamer])
                        } }>
                            <img src="https://img.icons8.com/parakeet/48/null/add.png" alt="" />
                        </div>
                    </div>
                    <hr />

                    <div className="dataside">
                        {render_boarddata}
                        
                    </div>

                </div>

                <div className="mainsection" style={{ position: "relative", zIndex: 1 }}>
                    <div className="topdataside" >
                        {/* <img src="https://img.icons8.com/parakeet/48/null/add.png" alt="" onClick={dataAdder} /> */}
                        <div className="topimgholder" style={{ position: "relative"}}>
                            <img src="https://img.icons8.com/parakeet/48/null/add.png" alt="" onClick={() => filefolder.filefolderselected ? setfilefolder({filefolderselected : false}) : setfilefolder({filefolderselected : true})} />

                            <div className="folderfileholder" style={{}}>
                                {filefolder.filefolderselected ? <Folderfile folderadder={folderAdder} fileadder={fileAdder} rendererholder={renderer} changer={props.changer} location={location} /> : console.log("filefolder")}
                            </div>
                            
                        </div>
                        
                    </div>
                    <hr />
                    {/* <Subfolder key={Math.random()} maindata={props.data} /> */}
                    <div className="mainsectiondata">
                        {render_maindata}
                    </div>
                    
                    
                </div>
            </div>
            <Download RAW={[PRESENTDATA, SETPRESENTDATAX]} />
            
        </div>
    )
};

export default MainContent;