import React from 'react';





export default function Todo(props)  {
return (
    
    <li className="list-group-item">
    { props.item.title }
  
    <button className= "btn float-end" onClick={() => {props.deleteItem(props.item.id)}}> Seen it! </button>
    <button onClick = {() => {props.editItem(props.item.id)}}>Edit</button>
   
    </li>
)
}




//<button onClick={() => alert(props.item.id)}>Edit item. </button>
// <button onClick = {() => this.setState({edit : true})}>Edit</button> 
 //<button onClick = {() => {props.editItem(props.item.id)}}>Edit</button>