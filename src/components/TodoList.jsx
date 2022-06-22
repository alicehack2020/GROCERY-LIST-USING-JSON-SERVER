import React from 'react'

const GroceryList = ({data,deleData}) => {

  const removeData=(id)=>{
        console.log(id);
       // deleData()
  }
  return (
    <div>
        {data.map((e)=>{
            return(<>
                <h1>{e.title}</h1>
                <button onClick={()=>removeData(e.id)}>delete</button>
            </>)
        })}
    </div>
  )
}

export default GroceryList