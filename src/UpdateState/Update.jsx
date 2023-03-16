import React,{Component} from "react"

export default class Update extends Component{
    constructor()
    {
        super()
        this.state={
            username:"Manju",
            count:0
        }
    }
handleChange=()=>{
    this.setState({username:"SHREEE"})
}

handleNumberChange=()=>{
    this.setState({count:1})
}


render()
{
    return(
        <div>
            <h1>{this.state.username}</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleChange}>Click to change</button><br /> <br />
            <button onClick={this.handleNumberChange}>Change Number</button>
        </div>
    )
}





}


