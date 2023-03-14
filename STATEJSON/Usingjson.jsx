import React,{Component}from 'react'
import JSON from './User.json'
import Userdetailsjson from './Userdetailsjson'

export default class Usingjson extends Component{
constructor(){
    super()
    this.state={
        json:JSON
    }
}
render()
{
    return(
        <div>
            <Userdetailsjson data={this.state.json}/>
        </div>
    )
}

}



