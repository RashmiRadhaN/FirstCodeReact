import React,{Component} from "react";
import STYLE from  '../CounterApplication/counter.module.css'

export default class Reset extends Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
        this.handleReset=this.handleReset.bind(this)
    }

handleIncrement=()=>{
    this.setState({count:this.state.count+1})
}

handleDecrement=()=>{
    this.setState({count:this.state.count-1})
}

// handleReset=()=>{
//     this.setState({count:0})
// }


handleReset = function()
{
    this.setState({count:0})
}




render()
{
    return(
        <div className={STYLE.mainblock}>
            <h1>Count = {this.state.count}</h1>
            <button onClick={this.handleIncrement} id={STYLE.btn}>+Increment</button>
            <button onClick={this.handleDecrement} id={STYLE.btn}>-Increment</button>
            <button onClick={this.handleReset} id={STYLE.btn}>RESET</button>
        </div>
    )
}


}