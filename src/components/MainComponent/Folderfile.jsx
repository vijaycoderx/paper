import axios from "axios";
import React, { useState } from "react";

function Folderfile(props) {
    function folderCreate() {
        console.log("folder created", JSON.stringify(props.presentdatax), "ori", props.rendererholder);

        if (Object.keys(props.presentdatax) == 0 && typeof(props.presentdatax) == "object") {
            console.log("no document")
            let createfile = prompt()
            axios.post('http://localhost:8000/addDocument', { collectionname: props.location[0], renamevalue: createfile })

            props.changer[1]((item) => {
                return (
                    createfile
                )
            })
            
            // props.rendererholder = [{"fred": ""}]
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
        // else if (props.rendererholder.length === 1 && props.rendererholder[0] == "") {
        //     console.log(props.rendererholder[0], "folder or file", props.rendererholder)
        //     props.folderadder()
            
        // } else if (props.rendererholder.length >= 1 && typeof(props.rendererholder[0]) == "object") {
        //     console.log(props.rendererholder, "only folders")
        //     props.folderadder()
        // }else {
        //     console.log(props.rendererholder, "not file")
        //     window.alert("can't create folder")
        // }

    }
    
    function fileCreate() {
        console.log("file created", JSON.stringify(props.presentdatax), "ori", props.rendererholder);

        console.log("folder created");
        if (props.presentdatax == "") {
            // console.log(props.rendererholder[0], "folder or file")
            props.fileadder()
        } else if (Object.keys(props.presentdatax).length >= 1 && typeof(props.presentdatax) == "object") {
            // console.log(props.rendererholder[0], "only folders")
            window.alert("can't create file")
        }else {
            // console.log(props.rendererholder, "not file")
            window.alert("can't create file")
        }

    }
    return (
        <div className="folderfilecreator" style={{backgroundColor: "violet", border: "none", borderRadius: "2px", display: "flex", flexDirection: "column", width: "100px", padding: "10px", boxSizing: "border-box", position: "absolute", top: "0px", right: "50px"}}>
            <button onClick={folderCreate}>Folder</button>
            <button onClick={fileCreate}>File</button>
        </div>
    )
}

export default Folderfile;