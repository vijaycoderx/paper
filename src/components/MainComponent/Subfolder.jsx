import React, { useEffect } from "react";
import Modifier from "./Modifier";
import subfolderpng from './subfolder.png';


function Subfolder(props) {
    console.log(props.idholder)
    
   
    function subclick() {
        console.log(props.name)
        props.globallocation[1]((item) => {
            let lister = []
            if (props.globallocation[0][(props.globallocation[0].length - 1)] === props.name){
                console.log("verrrrrrry trrrrruee", props.idholder)
                lister = [...item]
                
            }
            else {
                console.log("verrrrrrry ffaalssee", props.idholder, props.name, item)
                lister = [...item, props.name]
                
                
            }
            console.log(lister)
            return (
                lister
            )
            
        })
        console.log("sub folder clicked")

        // props.datalistxx[1]({...props.datalistxx[0], [props.name[0]]:props.rendererholder})
        
    }
    function subthreedots(e) {
        e.stopPropagation()
        console.log("sub three dots")
        console.log(props.globallocation[0], props.dotselector[0])

        if (props.dotselector[0] == props.name) {
            props.dotselector[1]((item) => {
                return (
                    ""
                )
            })
        } else {
            props.dotselector[1]((item) => {
                return (
                    props.name
                )
            })    
        }
        
        console.log(props.globallocation[0], props.dotselector[0])

        // let reqdata
        // console.log(props.dotselector[0], props.name)
        // console.log(props.idholder, "raaaaawwsuuuuuuuuuuub", JSON.stringify(props.raw[props.globallocation[0][0]]))
        
        // for (let z = 0; props.raw[props.globallocation[0][0]].length; z++){
        //     // let newobj = { ["imp"]: props.raw[props.globallocation[0][0]][z]["imp"] }
        //     // console.log(JSON.stringify(newobj))
        //     // console.log(Object.keys(props.raw[props.globallocation[0][0]][z]["imp"]))

        //     if (props.globallocation[0].length > 1) {
        //         if (Object.keys(props.raw[props.globallocation[0][0]][z]['imp'])[0] == props.globallocation[0][1]) {
        //             reqdata = props.raw[props.globallocation[0][0]][z]['imp']

        //             // let cookkey = []
        //             let cookkey=""
        //             for (let v = 1; v < props.globallocation[0].length; v++){
        //                 // cookkey.push([props.globallocation[0][v]])
        //                 cookkey += "[" + "'" + props.globallocation[0][v] + "'" + "]"
                        

                        
        //                 // console.log("cooook key",  JSON.stringify(cookkey), JSON.stringify(reqdata) + "['2021']", JSON.parse(JSON.stringify(reqdata))['2021'])
        //             }
        //             console.log(cookkey, reqdata[cookkey], cookkey);

        //             let cookval
        //             for (let v = 1; v < props.globallocation[0].length; v++){
        //                 cookval = reqdata[props.globallocation[0][v]] 
        //             }
        //         }
        //     }
        //     else {
        //         if (Object.keys(props.raw[props.globallocation[0][0]][z]['imp'])[0] == props.name) {
        //             reqdata = props.raw[props.globallocation[0][0]][z]['imp']
        //             let keycook
        //             for (let v = 1; v < props.globallocation[0].length; v++){
        //                 keycook += JSON.stringify(reqdata[props.globallocation[0]]) + [v]
        //             }
        //             console.log("keeeeeeeeeeeeeeeeeeeeeeeeeycooooooooook", keycook)
        //         }
        //     }
            
            
        //     console.log("requuired data", reqdata)
        // }
        
        // // cook update query
        
    }
    console.log("seeeeeeeeeeeeeeeeeeeeex", props.idholder)
    return (
        // #99ff99
        // #ffe6ff
        <div style={{ backgroundColor: "#f2f2f2", height: "100px", width: "100px", display: "flex", alignItems: "center", margin: "2px 0px", flexDirection: "column", boxSizing: "border-box", border: "none", borderRadius: "10px", justifyContent: "center", margin:"10px 10px", padding:"5px"}} onClick={subclick}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "inherit", alignSelf: "center", width: "100%" }}>
                {/* "https://img.icons8.com/color/60/null/folder-invoices--v1.png" */}
                <img src={subfolderpng} />

                {/* Note: img is not properly aligned in div */}
                <div className="threedot" style={{ backgroundColor: "inherit", position:"relative" }}>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/menu-2.png" style={{ backgroundColor: "inherit" }} onClick={subthreedots} />
                    {props.dotselector[0] == props.name ? <Modifier key={Math.random()} category={"subfolder"} location={props.globallocation[0]} changer={props.changer} id_holder={props.idholder} val_holder={props.valholder} toUpdate={props.name} presentdatax={props.presentdatax}  /> : console.log("submodifier", props.name, props.dotselector[0])}
                </div>
                
            </div>

            <div >
                <p style={{ fontFamily: "sans-serif", backgroundColor: "inherit" }} >{props.name}</p>
            </div>
            
        </div>
    )
}

export default Subfolder;