import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState();
  const [todoid, setTodoId] = useState();
  const [btnCount, setBtnCount] = useState(0);
  const [inp, setInp] = useState();
  const [final, setFinal] = useState(0);
  // useEffect(()=>{
  //   showOne();
  // },[todoid])
  
  useEffect(()=>{
    let data = axios.get("https://dummyjson.com/todos");
    data.then((e)=>{
      setTodo(e.data.todos)
    })
  },[])

  // useEffect(()=>{
  //   showOne(id)
  // },[todoid])

  function showOne(id){
    // alert(id);
    let data = axios.get(`https://dummyjson.com/todos/${id}`);
    data.then((e)=>{
      setTodoId(e.data)
      console.log(todoid,"todoId")
    })
  }

  function SumOfAll(){
    let sum = 0;
    for(let i = 1; i<=inp; i++){
      sum+=i;
    }
    setFinal(sum);
  }
  useEffect(()=>{
    SumOfAll();
  },[inp])
  return (
    <>
    {todo && todo.length > 0 && todo.map((e)=> <DynamicButton  onClick={showOne}  key={e.id} count={e.id}/>)}
    {/* {todoid && todoid.length > 0 && todoid.map((e)=> <Todo key={todoid.id} title={todoid.todo} description={todoid.completed}/>)} */}
    {
      todoid ? (
        <Todo title={todoid.todo} description={todoid.id}/>
      ):(
        <h1>no to do</h1>
      )
    }
    <input type="text" onChange={(e)=> setInp(e.target.value)} />
    <h2>The sum is {final}</h2>
    <button onClick={()=> setBtnCount(btnCount + 1)}>{btnCount}</button>
    </>
  )
}
function DynamicButton({count, onClick}){
  return(
    <>
      <button onClick={()=> onClick(count)}>{count}</button>
    </>
  )
}
function Todo({title, description}){
  return(
    <>
    {/* <h1>Title</h1> */}
    <h2>{title}</h2>
    {/* <h1>Description</h1> */}
    <h2>{description}</h2>
    </>
  )
}
export default App
