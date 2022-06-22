import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {
   const [data,setData]=useState([])


   const loadData=()=>{
    fetch('http://localhost:3004/items')
    .then((res)=>res.json())
    .then((res)=>
    {
      setData(res)
    })
   }

   const deleData=(id)=>
   {
       console.log("todo id="+id);
   }

   const addTodo=(title)=>{
    const postData = {title:title,id:uuidv4()};

    fetch('http://localhost:3004/items', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    .then(res => {
      loadData()
     // console.log('Success:', res);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    


     //setData([...data,title])
     //console.log(data);
   }

  return (
    <div>
        <TodoInput addTodo={addTodo}/>
        <TodoList data={data} deleData={deleData}/>
    </div>
  )
}

export default Todo