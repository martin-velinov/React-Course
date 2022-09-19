import React,{useState,useEffect} from 'react';

const Todos = () => {

  const[todos,setTodos]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=15")
    .then(result=>result.json())
    .then(json=>setTodos(json))
    .catch(err=> alert(err))
  },[])

  function deleteRow(id){
    const removeRow = todos.filter((todo) => todo.id !== id);
  
    setTodos(removeRow);
  }
  
  return (
    <div>
    <h2>Todos</h2>
      {todos.length >0 ? 
      <table border={1}>
          <tr>
            <th>title</th>
              <th>completed</th>
              
          </tr>
          <tbody>
              {todos.map((todo,i)=>{
                 return(
                  <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.completed}</td>
                  <td><button type='button' onClick={() => deleteRow(todo.id)}>delete</button></td>
                </tr>
                 )
              })}
          </tbody>
      </table>
      :
          <h2>loading todos</h2>
      }
  </div>
  )
}

export default Todos