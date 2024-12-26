// import { useEffect, useEffectuseState, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Todo from "./Todo";
// function App() {
//   const [count, setCount] = useState("Vivek");
//   const [id, setId] = useState(1);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const nameArr = ["Vivek", "Chotu", "Bindi", "Divya"];
//   const [todo, setTodo] = useState([]);
//   function ChnageName() {
//     const data = nameArr[Math.floor(Math.random() * nameArr.length)];
//     console.log(data);
//     setCount(data);
//     return data;
//   }
//   function AddTodo() {
//     let tempId = id + 1;
//     let temp = {
//       id : tempId,
//       title : title,
//       description: description
//     }

import { useEffect, useState } from "react"

    
//     let tempArr = todo;
//     tempArr.push(temp);
//     setTodo(tempArr);
//     console.log(temp);
//     console.log(tempArr);
//     console.log(tempId)
//   }
//   useEffect(()=>{
//     // AddTodo()
//   },[todo,AddTodo])
//   return (
//     <>
//       {/* <Header title={"header"}/>
//       <h1>Hi I Am {count}</h1>
//       <Footer title={"Footer"}/>
//       <button onClick={ChnageName}>Chnage the Title</button> */}
//       <input type="text" onChange={(e) => setTitle(e.target.value)} />
//       <input type="text" onChange={(e) => setDescription(e.target.value)} />
//       <button onClick={AddTodo}>Add Todo</button>
//       {todo.map((e) => (
//       <Todo title={title} description={description} count={id} />
//     ))}
//     </>
//   );
// }

// export default App;
// import React, { useState } from 'react'
// let counter = 3;
// function App() {
//   const [todo, setTodo] = useState([
//     {
//       id : 1,
//       title : "test",
//       description : "test"
//     },
//     {
//       id : 2,
//       title : "test 2",
//       description : "test 2"
//     },
//     {
//       id : 1,
//       title : "test 3",
//       description : "test 3"
//     },
//   ])
//   console.log(todo)
//   function AddTodo(){
//     setTodo([...todo,{
//       id : counter++,
//       title : Math.random(),
//       description : "Vivek"
//     }])
//     console.log(todo,"todo")
//   }
//   return (
//     <div>
//       <button onClick={AddTodo}>Add Todo</button>
//       {todo.map((e)=> <Todo key={e.id} title={e.title} description={e.description}/>)}
//     </div>
//   )
// }

function Todo({id,title, description}){
  return(
    <div>
      <h2>
        {title}
      </h2>
      <h4>
        {description}
      </h4>
    </div>
  )
}

// export default App

// import React from 'react'
// function TextComp(){
//   return <h1>Hi i am text</h1>
// }
function WrapperComp({comp}){
  return <div style={{border : "2px solid red"}}>
    {comp}
  </div>
}
function App() {
  const [todo, setTodo] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/todo")
    .then(async (val)=>{
      const res = await val.json()
      console.log(res.data,"res")
      setTodo(res.data);
    })
  },[])
  return (
    // <div><WrapperComp comp={<TextComp/>}/></div>
    <div>
      {todo && todo.length >0 && todo.map((e,index)=> (
        <Todo style={{border : "2px solid red"}} title={e.title} description={e.description} key={e._id}/>
      ))}
       
    </div>
  )
}

export default App