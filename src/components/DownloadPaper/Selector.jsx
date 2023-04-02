import React, { useState, useEffect } from "react";

function Selector(props) {
    // let incre = props.inc[0]
    console.log("present",props.presentdata[0],typeof (props.presentdata[0]), "counter", props.counter[0], "name", props.name)
    let optionsholder = [<option>select</option>]

    // for (let i = 0; i < Object.keys(props.presentdata[0]).length; i++){
    //     optionsholder = [...optionsholder, <option>{Object.keys(props.presentdata[0])[i]}</option>]
    // }
    
    
    if (typeof (props.presentdata[0]) == "object") {
        for (let i = 0; i < Object.keys(props.presentdata[0]).length; i++){
            optionsholder = [...optionsholder, <option>{Object.keys(props.presentdata[0])[i]}</option>]
        }   
    }
    else if (typeof (props.presentdata[0]) == "string") {
        if (props.presentdata[0] == "") {
            optionsholder=<option>no file</option>
        } else {
            optionsholder=<option>{props.presentdata[0]}</option>
        }
        
    }

    // optionsholder.unshift(<option>select</option>)
    let changed = function (event) {
        if (event.target.value == "select") {
            props.options[1]((item) => [...item.splice(0, props.name)])
        } else {
            console.log("return section",event.target.value, props.presentdata[0])


        

            // console.log("counter value", props.counter[0], "propsinc",props.inc[0])
    
            props.options[1]((item) => [...item.splice(0, props.name)])
    
            typeof (props.presentdata[0]) == "object" ? props.presentdata[1](props.presentdata[0][event.target.value]) : props.presentdata[1](props.presentdata[0])
    
            props.counter[1]((item) => item + 1)
    
            console.log("after return section", event.target.value, props.presentdata[0])
                       
        }
        
    }

    return (
        <>
            <select name="" id="" onChange={(event) => changed(event)} style={{width: "40vw", height: "50px",border:"none", borderRadius:"10px", outline: "none", fontSize:"1.25em", fontFamily:"sans-serif", fontWeight:"bold"}}>{optionsholder}</select>
            <br></br>
        </>    
    )
}

export default Selector;
