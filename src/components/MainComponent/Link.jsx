import React from "react";

import Modifier from "./Modifier";

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
        <div>
            <img src="https://img.icons8.com/external-prettycons-flat-prettycons/94/null/external-link-social-media-prettycons-flat-prettycons.png" alt="" />
            <p>{props.name}</p>
            
            <div className="threedot" style={{ backgroundColor: "white", position:"relative" }}>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/menu-2.png" style={{ backgroundColor: "white" }} onClick={subthreedots} />
                    {props.dotselector[0] === props.name + "modifier" ? <Modifier key={Math.random()} category={"link"} changer={props.changer} location={props.globallocation[0]} id_holder={props.idholder} val_holder={props.valholder} toUpdate={props.name}  /> : console.log("submodifier")}
            </div>
        </div>
    )
}

export default Link