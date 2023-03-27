import React, { useState, useEffect } from "react";

function Selector(props) {
    console.log("present",props.presentdata[0],typeof (props.presentdata[0]), "counter", props.counter[0])
    let optionsholder = []

    // for (let i = 0; i < Object.keys(props.presentdata[0]).length; i++){
    //     optionsholder = [...optionsholder, <option>{Object.keys(props.presentdata[0])[i]}</option>]
    // }
    
    
    if (typeof (props.presentdata[0]) == "object") {
        for (let i = 0; i < Object.keys(props.presentdata[0]).length; i++){
            optionsholder = [...optionsholder, <option>{Object.keys(props.presentdata[0])[i]}</option>]
        }   
    } else {
        optionsholder=<option>{props.presentdata[0]}</option>
    }

    let x = function (event){
        console.log("return section",event.target.value, props.presentdata[0])


        typeof (props.presentdata[0]) == "object" ? props.presentdata[1](props.presentdata[0][event.target.value]) : props.presentdata[1](props.presentdata[0])

        console.log("counter value", props.counter[0])

        props.counter[1]((item) => item + 1)

        console.log("after return section", event.target.value, props.presentdata[0])
        
        // props.options[0].map((item) => {
        //     console.log("x",item.value, "x", item)
        // })
    }

    return (
        // (event) => {
            // console.log("return section",event.target.value, props.presentdata[0])


            // typeof(props.presentdata[0]) == "object" ? props.presentdata[1](props.presentdata[0][event.target.value]) : props.presentdata[1](props.presentdata[0])
            // props.counter[1](props.counter[0] + 1)
            // console.log("after return section",event.target.value, props.presentdata[0])

        // }
        <select name="" id="" onChange={(event) => x(event)}>{optionsholder}</select>
    )
}

export default Selector;
