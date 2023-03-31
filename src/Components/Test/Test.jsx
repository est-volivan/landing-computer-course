import React from 'react'

export default function Test() {
    const message = [{id: 1, name: "Привет", age:12}, {id: 3, name: "Дамир"}, {id: 7, name: "Коля"}];
    const listItems =  message.map(e => <div key={e.id}>
        <h1>{e.id}</h1>
        <li>{e.name}</li>
        <p>{e.hasOwnProperty("age") && e.age}</p>
        </div>)
    
  return (
    <div>{listItems}
      
    </div>
  )
}
