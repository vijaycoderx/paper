import React, {useState} from "react";
import Modifier from "./Modifier";
import folderpng from './folder.png';


function Folder(props) {
    console.log("raaaaaaw", JSON.stringify(props.raw))
    const [folderstate, setfolderstate] = useState({modrenderer: false})
    console.log(props.maindata)

    function boardclick(e) {
        console.log(e.target.style.backgroundColor, "key")
        props.selector[1]((item) => {
            return (
                props.name
            )
        })

        if (props.category == "sidebarcomp") {
            props.globallocation[1]((item) => {
                let lister = []
                if (props.globallocation[0] === props.name){
                    console.log("verrrrrrry trrrrruee")
                    lister = [...item]
                }
                else {
                    console.log("verrrrrrry ffaalssee")
                    if (props.category == "sidebarcomp") {
                        lister = [props.name]
                    }
                    else {
                        lister = [...item,props.name]
                    }
                    
                }
                return (
                    lister
                )
            })
            
        }
        else if (props.category == "maincomp"){
            props.globallocation[1]((item) => {
                let lister = []
                if (props.globallocation[0][(props.globallocation[0].length - 1)] === props.name){
                    console.log("verrrrrrry trrrrruee")
                    lister = [...item]
                }
                else {
                    console.log("verrrrrrry ffaalssee")
                    if (props.category == "sidebarcomp") {
                        lister = [props.name]
                    }
                    else {
                        lister = [...item,props.name]
                    }
                    
                }
                return (
                    lister
                )
            })            
        }

    }

    
    function threedots(e) {
        e.stopPropagation();
        
        if (props.dotselector[0] == props.name + "modifier") {
            props.dotselector[1]((item) => {
                return (
                    ""
                )
            })
        } else {
            props.dotselector[1]((item) => {
                return (
                    props.name + "modifier"
                )
            })    
        }
    }

    return (
        

        <div style={{ backgroundColor: props.name == props.selector[0] ? "#ffd11a" : "white", width:"100%", display: "flex", alignItems: "center", margin: "2px 0px", flexDirection: "column", border: "none", borderRadius: "10px", height:"100px", margin:"10px 0px", padding:"0px 5px", boxSizing:"border-box"}} className="folderholderx" onClick={boardclick}>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "inherit", alignSelf: "flex-start", width: "100%", borderRadius: "10px" }}>
                <img src={folderpng} />
                <div className="threedot" style={{position: "relative", overflow: "visible", backgroundColor: "inherit"}} onClick={threedots}>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/menu-2.png" style={{position: "relative"}}  />
                    {props.dotselector[0] == props.name + "modifier" ? <Modifier coredata={{ locatedir: props.globallocation[0], collectionname: props.name }} changer={props.changer} name={props.name} category={"folder"} location={props.globallocation[0]} presentdatax={props.presentdatax} /> : console.log(folderstate.modrenderer)}
                </div>
                
                
            </div>

            <div style={{width: "100%", alignSelf: "flex-start", backgroundColor: "inherit", borderRadius: "10px"}}>
                <p style={{fontFamily: "consolas"}} >{props.name.substring(0, (props.name.length-1))}</p>
            </div>          
        </div>
    )
}

export default Folder;