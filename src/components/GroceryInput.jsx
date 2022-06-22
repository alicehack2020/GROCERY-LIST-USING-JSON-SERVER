import React, { useState } from 'react'

const GroceryInput = ({addTodo}) => {
 const [todo,setTodo]=useState("")

 const addData=()=>
 {
    addTodo(todo)  
 }

  return (
    <div>
        <input type="text" name="" id="" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button onClick={addData}>add</button>
    </div>
  )
}

export default GroceryInput