import React, { useState, useEffect } from "react";
import './MainContent.css'
import Folder from "./Folder";
import Subfolder from "./Subfolder";
import Link from "./Link";
import axios from "axios";
import Folderfile from "./Folderfile";
import { render } from "@testing-library/react";

function MainContent(props) {
    let RAW = {}
    let datalist = {}
    let [datalistx, setdatalistx] = useState({})
    const [selected, setselected] = useState("")
    const [boarddata, setboarddata] = useState([])
    const [location, setlocation] = useState([])
    const [rawdatas, setrawdatas] = useState()
    const [propselect, setpropselect] = useState("")
    const [filefolder, setfilefolder] = useState({ filefolderselected: false })
    let [render_maindata, setrender_maindata] = useState([])
    // const [dataList, setdataList] = useState({})
    
    


    useEffect(() => {
        setboarddata(Object.keys(props.data))
        setrawdatas(props.data)
        console.log("after using useeffect", boarddata, JSON.stringify(props.data))
    }, [props.data])

    function prepareData() {
        // let dataHolder = {}
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

        console.log("ready", JSON.stringify(RAW))
        
        // console.log("collections", Object.keys(RAW), "items", RAW["cbses"],Object.values(RAW["cbses"]), RAW)
    }
    prepareData()

    // console.log("RAW", RAW, "collections", Object.keys(RAW), "items", JSON.stringify(RAW["cbses"]))
    // if(RAW["cbses"] == "undefined" || RAW["cbses"] == "null"){
    //     console.log("undefined")
    // }else{
    //     console.log(typeof(RAW["cbses"]))
    //     console.log(Object.keys(RAW["cbses"]))
    // }
    let kick = async () => {
        let xor = await RAW["cbses"] 
        console.log( await Object.keys(xor))
    }
    kick()

    console.log(boarddata, "board data")
    console.log(JSON.stringify(props.data), "props data")
    console.log(JSON.stringify(rawdatas), "rawdataaaaas")
     
    const render_boarddata = boarddata.map((boarddataitem) => {
        console.log(boarddataitem, "hey")
        
        // setboarddata((item) => [...item, boarddataitem])
        return (
            
            <Folder maindata={props.data}   key={Math.random()} name={boarddataitem} selector={[selected, setselected]} datalistxx={[datalistx, setdatalistx]} globallocation={[location, setlocation]} category={"sidebarcomp"} raw={rawdatas} propselector={[propselect, setpropselect]} />
        )       
    })

    // console.log(location, props.data[[...location]], "import")

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
    
     render_maindata = renderer.map((item) => {
        // console.log(Object.keys(item.imp), "itteemmmmm")
        console.log(item, "iteeeeeeeeeeeeeeeeeeeeeeeem", datalist, "val finalx", valfinal, "id x final", idfinal, "id holder", id_holder, Object.keys(item)[0], typeof (idfinal), idfinal == "")
        console.log(renderer, item)
        // let rendererpass = {}
        // let z = location.length > 1 ? rendererpass = renderer : ""
        // idfinal == "" ? idfinal = id_holder[Object.keys(item)[0]] : ""

        location.length == 1 ? idfinal = id_holder[Object.keys(item)[0]] : console.log("length g 1")
        
        console.log("mod id", idfinal)
        return (

            typeof (item) === "object"  ? <Subfolder key={Math.random()} name={typeof (item) === "object" ? Object.keys(item) : item} datalistxx={[datalistx, setdatalistx]} selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} propselector={[propselect, setpropselect]} raw={rawdatas} idholder={idfinal} valholder={cookeddata} rendererholder={renderer} /> : item != "" ? <Link key={Math.random()} name={item } propselector={[propselect, setpropselect]} globallocation={[location, setlocation]} idholder={idfinal} rendererholder={renderer} /> : ""
                
            // <Subfolder key={Math.random()} name={typeof(item) === "object" ? Object.keys(item) : item} selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} />
        )
    }) 
        
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
            axios.post('http://localhost:8000/adddata', {location: location, collectionname: location[0], idholder: idfinal, modified: updatedata})
        }
        else {
            axios.post('http://localhost:8000/adddata', {location: location, valholderx: valfinal, collectionname: location[0], addvalue:createfile, idholder: idfinal, modified: updatedata})
        }
    }

    function fileAdder() {
        let createfile = prompt()

        let updatedata = {}
        console.log(renderer)
        if (location.length == 1) {
            
        }
        else {
            axios.post('http://localhost:8000/update', {location: location, valholderx: valfinal, collectionname: location[0], addvalue:createfile, idholder: idfinal, modified: createfile})
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
                        
                            //         typeof (item) === "object"  ? <Subfolder key={Math.random()} name={typeof (item) === "object" ? Object.keys(item) : item} datalistxx={[datalistx, setdatalistx]} selector={[selected, setselected]} globallocation={[location, setlocation]} category={"maincomp"} propselector={[propselect, setpropselect]} raw={rawdatas} idholder={idfinal} valholder={valfinal} rendererholder={renderer} /> : item != "" ? <Link key={Math.random()} name={item } /> : ""
                                     
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
                            axios.post('http://localhost:8000/adddata',{category: "folder", collectionname: renamer})
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
                                {filefolder.filefolderselected ? <Folderfile folderadder={folderAdder} fileadder={fileAdder} rendererholder={renderer} location={location} /> : console.log("filefolder")}
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
            
        </div>
    )
};

export default MainContent;