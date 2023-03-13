import React from "react";
import axios from "axios";
 
function Modifier(props) {

    // function rename(e) {
    //     e.stopPropagation()
    //     console.log("loooooooooooooooooooooocation sub", props.location)
    //     const renamevalue = prompt()
    //     // console.log(renamevalue)
    //     // console.log(JSON.stringify(props.data.rawdata), "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    //     // { locationx: props.data.collec }
    //     if (props.category == "folder") {
    //         console.log("folder dataall", { ...props.coredata })
    //         axios.post('http://localhost:8000/update', {...props.coredata, renamevalue: renamevalue, category: props.category} )
    //         console.log("server data", props.coredata)
            
    //     }
    //     else if (props.category == "subfolder") {
    //         console.log(props.renderer_holder, "rendereeeeeeeeeeeeer")
    //         let updateCook = {}

    //         for (let i = 0; i < props.renderer_holder.length; i++){
    //             if (Object.keys(props.renderer_holder[i])[0] == props.toUpdate) {
                    
    //                 if (props.val_holder.length >= 0) {
    //                     console.log(typeof(props.val_holder), props.val_holder, props.renderer_holder)
    //                 }
    //                 updateCook[renamevalue] = props.val_holder[props.toUpdate]
    //                 console.log(updateCook, "seeeeeeeood",props.val_holder, renamevalue, props.toUpdate, props.val_holder[props.toUpdate], "value holder", props.val_holder)
    //             }
    //             else {
    //                 updateCook[Object.keys(props.renderer_holder[i])[0]] = props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]]
    //                 console.log(updateCook, Object.keys(props.renderer_holder[i])[0], props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]])
    //             }
    //         }
    //         console.log(props.location, "locationAAA", props.val_holder)
    //         if (props.location.length == 1) {
    //             updateCook = {[renamevalue] : props.val_holder[props.toUpdate]}
    //         }
            
    //         axios.post('http://localhost:8000/update', { collectionname: props.location[0], renamevalue: renamevalue, location: props.location, idholder: props.id_holder, valholder:props.val_holder, toUpdate: props.toUpdate, modified: updateCook, category: props.category })
    //         console.log("iddd holddder", props.id_holder)

    //         console.log(props.changer[0])
    //         props.changer[1]((item) => {
    //             console.log(props.toUpdate)
    //             return (
    //                 props.toUpdate
    //             )
    //         })
            
    //     }
    //     else if (props.category == "link") {
    //         axios.post('http://localhost:8000/update', {collectionname: props.location[0], renamevalue: renamevalue, location: props.location, modified: renamevalue, idholder: props.id_holder, category: props.category})
    //     }
        
    // }

    function rename(e) {
        e.stopPropagation()
        console.log("loooooooooooooooooooooocation sub", props.location)
        const renamevalue = prompt()
        // console.log(renamevalue)
        // console.log(JSON.stringify(props.data.rawdata), "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
        // { locationx: props.data.collec }
        if (props.category == "folder") {
            console.log("folder dataall", { ...props.coredata })
            axios.post('http://localhost:8000/update', {collectionname: props.name, renamevalue: renamevalue, category: props.category} )
            console.log("server data", props.coredata, props.changer)

            props.changer[1]((item) => {
                console.log(renamevalue)
                return (
                    renamevalue
                )
            })
            
        }
        else if (props.category == "subfolder") {
            console.log(props.renderer_holder, "rendereeeeeeeeeeeeer")
            let updateCook = {}
            

            for (let i = 0; i < Object.keys(props.presentdatax).length; i++){
                console.log(Object.keys(props.presentdatax)[i])

                if (props.location.length == 1) {
                    if (props.toUpdate == Object.keys(props.presentdatax)[i]) {
                        console.log(props.presentdatax[props.toUpdate]["data"])
                        updateCook[renamevalue] = props.presentdatax[props.toUpdate]["data"]
                        console.log(JSON.stringify(updateCook), props.presentdatax[props.toUpdate]["data"],"keyval",props.toUpdate,Object.keys(props.presentdatax)[i])
                    } else {
                        console.log(props.presentdatax[Object.keys(props.presentdatax)[i]]["data"])
                        // updateCook[Object.keys(props.presentdatax)[i]] = props.presentdatax[Object.keys(props.presentdatax)[i]]["data"]
                        console.log(updateCook)
                    }
                }else {
                    if (props.toUpdate == Object.keys(props.presentdatax)[i]) {
                        console.log(props.presentdatax[props.toUpdate])
                        updateCook[renamevalue] = props.presentdatax[props.toUpdate]
                        console.log(JSON.stringify(updateCook), props.presentdatax[props.toUpdate],"keyval",props.toUpdate,Object.keys(props.presentdatax)[i])
                    } else {
                        console.log(props.presentdatax[Object.keys(props.presentdatax)[i]])
                        updateCook[Object.keys(props.presentdatax)[i]] = props.presentdatax[Object.keys(props.presentdatax)[i]]
                        console.log(updateCook)
                    }
                }                    
                

            }
            

            console.log(props.presentdatax, updateCook, props.presentdatax)

            // for (let i = 0; i < props.renderer_holder.length; i++){
            //     if (Object.keys(props.renderer_holder[i])[0] == props.toUpdate) {
                    
            //         if (props.val_holder.length >= 0) {
            //             console.log(typeof(props.val_holder), props.val_holder, props.renderer_holder)
            //         }
            //         updateCook[renamevalue] = props.val_holder[props.toUpdate]
            //         console.log(updateCook, "seeeeeeeood",props.val_holder, renamevalue, props.toUpdate, props.val_holder[props.toUpdate], "value holder", props.val_holder)
            //     }
            //     else {
            //         updateCook[Object.keys(props.renderer_holder[i])[0]] = props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]]
            //         console.log(updateCook, Object.keys(props.renderer_holder[i])[0], props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]])
            //     }
            // }
            // console.log(props.location, "locationAAA", props.val_holder)
            // if (props.location.length == 1) {
            //     updateCook = {[renamevalue] : props.val_holder[props.toUpdate]}
            // }
            
            axios.post('http://localhost:8000/update', { collectionname: props.location[0], renamevalue: renamevalue, location: props.location, idholder: props.id_holder, toUpdate: props.toUpdate, modified: updateCook, category: props.category })
            console.log("iddd holddder", props.id_holder, "updatecook", updateCook)

            console.log(props.changer[0])
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.toUpdate
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
                    props.toUpdate
                )
            })
        }
        
    }

    function deleteData(e) {
        e.stopPropagation()
        if (props.category == "folder") {
            console.log("folder delete clicked", props.location)
            axios.post('http://localhost:8000/delete', { location: props.location, collectionname: props.location[0], category: props.category })
            
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.toUpdate
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
                        // console.log(Object.keys(props.presentdatax)[i], props.presentdatax)
                        // updateCook[Object.keys(props.presentdatax)[i]] = props.presentdatax[Object.keys(props.presentdatax)[i]]["data"]
                        console.log(updateCook)
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

            // console.log(props.renderer_holder, props.presentdatax)
            // for (let i = 0; i < props.renderer_holder.length; i++){
            //     if (Object.keys(props.renderer_holder[i])[0] == props.toUpdate) {
            //         // updateCook[renamevalue] = props.val_holder[props.toUpdate]
            //         // console.log(updateCook, "seeeeeeeood",props.val_holder, renamevalue)
            //     }
            //     else {
            //         updateCook[Object.keys(props.renderer_holder[i])[0]] = props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]]
            //         console.log(updateCook, Object.keys(props.renderer_holder[i])[0], props.renderer_holder[i][Object.keys(props.renderer_holder[i])[0]])
            //     }
            // }

            
            console.log(props.id_holder, "delete id", JSON.stringify(updateCook))
            axios.post('http://localhost:8000/delete', { location: props.location, idholder: props.id_holder, collectionname: props.location[0], modified: updateCook, category: props.category })
            
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.toUpdate
                )
            })
        }
        else if (props.category == "link") {
            console.log(props.presentdatax)
            axios.post('http://localhost:8000/update', { collectionname: props.location[0], location: props.location, idholder: props.id_holder, modified: "", category: props.category })
            
            props.changer[1]((item) => {
                console.log(props.toUpdate)
                return (
                    props.toUpdate
                )
            })
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