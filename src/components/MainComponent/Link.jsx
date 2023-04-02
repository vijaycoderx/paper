import React from "react";

import Modifier from "./Modifier";
import linkpng from './link.png'

function Link(props) {
    
    function subthreedots(e) {
        e.stopPropagation()
        console.log("sub three dots")
        console.log(props.globallocation[0])
        props.dotselector[1]((item) => {
            return (
                props.name + "modifier"
            )
        })
    }

    return (
        <div style={{border: "none", boxSizing:"border-box", backgroundColor:"#ffcc99", borderRadius:"10px", height:"100px", width:"100px", margin:"10px 0px"}}>
            {/* "https://img.icons8.com/external-prettycons-flat-prettycons/94/null/external-link-social-media-prettycons-flat-prettycons.png" */}
            <div className="linktop" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={linkpng} alt="" />
                <div className="threedot" style={{ backgroundColor: "inherit", position:"relative" }}>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/menu-2.png" style={{ backgroundColor: "inherit" }} onClick={subthreedots} />
                    {props.dotselector[0] === props.name + "modifier" ? <Modifier key={Math.random()} category={"link"} changer={props.changer} location={props.globallocation[0]} id_holder={props.idholder} val_holder={props.valholder} toUpdate={props.name}  /> : console.log("submodifier")}
                </div>               
            </div>
            

            <p style={{fontSize:"1.25em", opacity:"0.5", textAlign:"center"}}>{props.name}</p>
            
            
        </div>
    )
}

export default Link