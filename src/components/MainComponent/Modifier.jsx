import React from "react";
import axios from "axios";
 
function Modifier(props) {

    function rename(e) {
        e.stopPropagation()
        console.log("loooooooooooooooooooooocation sub", props.location)
        const renamevalue = prompt()
        
        if (props.category == "folder") {
            console.log("folder dataall", { ...props.coredata })
            axios.post('http://localhost:8000/update', {collectionname: props.name, renamevalue: renamevalue + "s", category: props.category} )
            console.log("server data", props.coredata, props.changer)

            props.changer[1]((item) => {
                console.log(renamevalue)
                return (
                    renamevalue
                )
            })
            
        }
        else if (props.category == "subfolder") {
            let updateCook = {}
            

            for (let i = 0; i < Object.keys(props.presentdatax).length; i++){
                console.log(Object.keys(props.presentdatax)[i])

                if (props.location.length == 1) {
                    if (props.toUpdate == Object.keys(props.presentdatax)[i]) {
                        console.log(props.presentdatax[props.toUpdate]["data"])
                        updateCook[renamevalue] = props.presentdatax[props.toUpdate]["data"]
                        console.log(JSON.stringify(updateCook), props.presentdatax[props.toUpdate]["data"],"keyval",props.toUpdate,Object.keys(props.presentdatax)[i])
                    } else {                        
                        console.log(updateCook)
                    }
                }else {
                    if (props.toUpdate == Object.keys(props.presentdatax)[i]) {
                        updateCook[renamevalue] = props.presentdatax[props.toUpdate]
                    } else {
                        updateCook[Object.keys(props.presentdatax)[i]] = props.presentdatax[Object.keys(props.presentdatax)[i]]
                    }
                }                    
                

            }
            

            console.log(props.presentdatax, updateCook, props.presentdatax)
            
            axios.post('http://localhost:8000/update', { collectionname: props.location[0], renamevalue: renamevalue, location: props.location, idholder: props.id_holder, toUpdate: props.toUpdate, modified: updateCook, category: props.category })
            console.log("iddd holddder", props.id_holder, "updatecook", updateCook)

            console.log(props.changer[0])
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.toUpdate + "change"
                )
            })
            
        }
        else if (props.category == "link") {
            axios.post('http://localhost:8000/update', { collectionname: props.location[0], renamevalue: renamevalue, location: props.location, modified: renamevalue, idholder: props.id_holder, category: props.category })
            console.log(props.changer)
            console.log(props.changer[0])
            props.changer[1]((item) => {
                console.log(props.toUpdate, renamevalue, props.presentdatax)
                return (
                    props.toUpdate + "change"
                )
            })
        }
        
    }

    function deleteData(e) {
        e.stopPropagation()
        if (props.category == "folder") {
            console.log("folder delete clicked", props.location, props.presentdatax)
            // props.presentdatax[1]({})
            axios.post('http://localhost:8000/delete', { location: props.location, collectionname: props.location[0], category: props.category })
            
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.location[0] + "change"
                )
            })
        }
        else if (props.category == "subfolder") {
            let updateCook = {}
            console.log(JSON.stringify(props.presentdatax))

            for (let i = 0; i < Object.keys(props.presentdatax).length; i++){
                console.log(Object.keys(props.presentdatax)[i], "to", props.toUpdate)
                if (props.location.length == 1) {
                    console.log("loc1")
                    if (props.toUpdate == Object.keys(props.presentdatax)[i]) {
                        if (Object.keys(props.presentdatax).length == 1) {
                            updateCook = ""
                        }
                    } else {
                        updateCook[Object.keys(props.presentdatax)[i]] = props.presentdatax[Object.keys(props.presentdatax)[i]]["data"]
                        console.log(updateCook)
                    }
                } else {
                    console.log("loc2")
                    if (props.toUpdate == Object.keys(props.presentdatax)[i]) {
                        console.log(Object.keys(props.presentdatax)[i], props.presentdatax)
                        if (Object.keys(props.presentdatax).length == 1) {
                            updateCook = ""
                        }
                        
                    
                    } else {
                        updateCook[Object.keys(props.presentdatax)[i]] = props.presentdatax[Object.keys(props.presentdatax)[i]]
                        console.log(updateCook)
                    }
                    
                }
            }

            
            console.log(props.id_holder, "delete id", JSON.stringify(updateCook))
            axios.post('http://localhost:8000/delete', { location: props.location, idholder: props.id_holder, collectionname: props.location[0], modified: updateCook, category: props.category })
            
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.toUpdate + "change"
                )
            })
        }
        else if (props.category == "link") {
            console.log(props.presentdatax)
            axios.post('http://localhost:8000/update', { collectionname: props.location[0], location: props.location, idholder: props.id_holder, modified: "", category: props.category })
            
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.toUpdate + "change"
                )
            })
        }
    }
    
    return (
        
        <div className="propertyholder" style={{backgroundColor: "#ffb3b3", border: "none", borderRadius: "2.5px", display: "flex", flexDirection: "column", width: "inherit", boxSizing: "border-box", position: "absolute", overflow:"hidden", padding:"2px"}}>
            <button onClick={rename} style={{ backgroundColor: "inherit", width: "inherit" }}><p style={{ fontSize: "1.25em" }}>Raname</p></button>
            <p style={{height:"2px", backgroundColor:"gray"}}></p>
            <button onClick={deleteData} style={{backgroundColor:"inherit", width:"inherit"}}><p style={{fontSize:"1.25em"}}>Delete</p></button>
        </div>
    )
}

export default Modifier;