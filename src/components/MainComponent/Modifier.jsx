import React from "react";
import axios from "axios";
 
function Modifier(props) {

    function rename(e) {
        e.stopPropagation()
        console.log("loooooooooooooooooooooocation sub", props.location)
        const renamevalue = prompt()
        // console.log(renamevalue)
        // console.log(JSON.stringify(props.data.rawdata), "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
        // { locationx: props.data.collec }
        if (props.category == "folder") {
            console.log("folder dataall", { ...props.coredata })
            axios.post('http://localhost:8000/update', {...props.coredata, renamevalue: renamevalue, category: props.category} )
            console.log("server data", props.coredata)
            
        }
        else if (props.category == "subfolder") {
            console.log(props.renderer_holder, "rendereeeeeeeeeeeeer")
            let updateCook = {}

            for (let i = 0; i < props.renderer_holder.length; i++){
                if (Object.keys(props.renderer_holder[i])[0] == props.toUpdate) {
                    
                    if (props.val_holder.length >= 0) {
                        console.log(typeof(props.val_holder), props.val_holder, props.renderer_holder)
                    }
                    updateCook[renamevalue] = props.val_holder[props.toUpdate]
                    console.log(updateCook, "seeeeeeeood",props.val_holder, renamevalue, props.toUpdate, props.val_holder[props.toUpdate], "value holder", props.val_holder)
                }
                else {
                    updateCook[Object.keys(props.renderer_holder[i])[0]] = props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]]
                    console.log(updateCook, Object.keys(props.renderer_holder[i])[0], props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]])
                }
            }
            console.log(props.location, "locationAAA", props.val_holder)
            if (props.location.length == 1) {
                updateCook = {[renamevalue] : props.val_holder[props.toUpdate]}
            }
            
            axios.post('http://localhost:8000/update', { collectionname: props.location[0], renamevalue: renamevalue, location: props.location, idholder: props.id_holder, valholder:props.val_holder, toUpdate: props.toUpdate, modified: updateCook, category: props.category })
            console.log("iddd holddder", props.id_holder)

            console.log(props.changer[0])
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.toUpdate
                )
            })
            
        }
        else if (props.category == "link") {
            axios.post('http://localhost:8000/update', {collectionname: props.location[0], renamevalue: renamevalue, location: props.location, modified: renamevalue, idholder: props.id_holder, category: props.category})
        }
        
    }

    function deleteData(e) {
        e.stopPropagation()
        if (props.category == "folder") {
            console.log("folder delete clicked", props.location)
            axios.post('http://localhost:8000/delete', {location: props.location, collectionname: props.location[0], category: props.category})
        }
        else if (props.category == "subfolder") {
            let updateCook = {}
            for (let i = 0; i < props.renderer_holder.length; i++){
                if (Object.keys(props.renderer_holder[i])[0] == props.toUpdate) {
                    // updateCook[renamevalue] = props.val_holder[props.toUpdate]
                    // console.log(updateCook, "seeeeeeeood",props.val_holder, renamevalue)
                }
                else {
                    updateCook[Object.keys(props.renderer_holder[i])[0]] = props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]]
                    console.log(updateCook, Object.keys(props.renderer_holder[i])[0], props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]])
                }
            }
            console.log(props.id_holder, "delete id")
            axios.post('http://localhost:8000/delete', {location: props.location, idholder: props.id_holder, collectionname: props.location[0], modified: updateCook, category: props.category})
        }
        else if (props.category == "link") {
            axios.post('http://localhost:8000/delete', {collectionname: props.location[0], location: props.location, idholder: props.id_holder, modified: "", category: props.category})
        }
    }
    
    return (
        <div className="propertyholder" style={{backgroundColor: "violet", border: "none", borderRadius: "2px", display: "flex", flexDirection: "column", width: "100px", padding: "10px", boxSizing: "border-box", position: "absolute", top: "20px", left: "20px", zIndex: 2}}>
            <button onClick={rename}>Raname</button>
            <button onClick={deleteData}>Delete</button>
        </div>
    )
}

export default Modifier;