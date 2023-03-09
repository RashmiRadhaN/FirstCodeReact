import React from "react"
import JSON from "./userdata.json"
import "./gobal.css"
import Course from "./Course"

const App=()=>
{
    return(
        <div>
            <Course payload={JSON}/>
        </div>

    )
}

export default App