import React from "react"

const Userdetailsjson=(props)=>{
    let data=props.data
    console.log(data)
    return (
        <div>
            <table border="1px" style={{textAlign:"center",fontWeight:"bold"}}>
                <tr>
                   <th>UserName</th>
                   <th>Age</th>
                   <th>Gender</th>
                   <th>DOB</th>
                   <th>Occupation</th>
                   <th>Salary</th>
                   <th>Photo</th>
                   <th>Phone Number</th>
                </tr>
{data.map((x)=>{
        return<tr>
            <td>{x.username}</td>
            <td>{x.age}</td>
            <td>{x.Gender}</td>
            <td>{x.DOB}</td>
            <td>{x.Occupation}</td>
            <td>{x.Salary}</td>
           <td><img src={x.Photo} alt="" style={{height:"85px",width:"85px"}}/></td>
           <td>
            <ul style={{alignItems:"center"}}>
           {x.Phone.map((x)=>{
            return <li>{x}</li>
           })}
           </ul>
            </td>
        </tr>
    })}
            </table>
        </div>
        
    )
}

export default Userdetailsjson