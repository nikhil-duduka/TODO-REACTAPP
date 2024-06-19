import { useState } from "react";

export function CreateTodo(props){
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    return (
        <div>
            <input type="text" placeholder="title" onChange={(e)=>{
                let value  = e.target.value;
                setTitle(value)
            }}/> <br />
            <input type="text" placeholder="description" onChange={(e)=>{
                let value  = e.target.value;
                setDescription(value)
            }}/> <br />
            <button onClick={()=>{
                fetch("http://localhost:3000/todo" , {
                    method : "POST",
                    headers : { 'Content-type' : "application/json"} , 
                    body : JSON.stringify({
                        "title" : title , 
                        "description" : description
                    })
                }).then(async function (){
                        const json = await res.json();
                        alert("Todo Added")
                    })
            }}>add a todo</button>
        </div>
    )
}