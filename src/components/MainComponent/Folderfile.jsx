import axios from "axios";
import React, { useState } from "react";

function Folderfile(props) {
    function folderCreate() {
        console.log("folder created", JSON.stringify(props.presentdatax), "ori", props.rendererholder);

        if (Object.keys(props.presentdatax) == 0 && typeof(props.presentdatax) == "object") {
            console.log("no document")
            let createlink = prompt()
            axios.post('http://localhost:8000/addDocument', { collectionname: props.location[0], renamevalue: createlink })

            props.changer[1]((item) => {
                return (
                    createlink
                )
            })
            
        } else if (Object.keys(props.presentdatax).length >= 1 && typeof(props.presentdatax) == "object") {
            console.log("folder object")
            props.folderadder()
        }
        else if (props.presentdatax == "") {
            console.log("folder str")
            props.folderadder()
        } else {
            window.alert("can't create folder")
        }
        
    }
    
    function linkCreate() {
        console.log("link created", JSON.stringify(props.presentdatax), "ori", props.rendererholder);

        console.log("folder created");
        if (props.presentdatax == "") {
            // console.log(props.rendererholder[0], "folder or file")
            props.fileadder()
        } else if (Object.keys(props.presentdatax).length >= 1 && typeof(props.presentdatax) == "object") {
            // console.log(props.rendererholder[0], "only folders")
            window.alert("can't create link")
        }else {
            // console.log(props.rendererholder, "not file")
            window.alert("can't create link")
        }

    }
    return (
        <div className="folderfilecreator" style={{backgroundColor: "#ffb3b3", border: "none", borderRadius: "2.5px", display: "flex", flexDirection: "column", width: "inherit", padding: "2px", boxSizing: "border-box", position: "absolute", top: "0px", right: "50px"}}>
            <button onClick={folderCreate} style={{ backgroundColor: "inherit", width: "inherit" }}><p style={{ fontSize: "1.25em" }}>Folder</p></button>
            <p style={{height:"2px", backgroundColor:"gray"}}></p>
            <button onClick={linkCreate} style={{backgroundColor:"inherit", width:"inherit"}}><p style={{ fontSize: "1.25em" }}>Link</p></button>
        </div>
    )
}

export default Folderfile;