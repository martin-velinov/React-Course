import React from 'react'

const Todos = ({listOfTodos,markTodoAsDone,deleteTodo}) => {
  return (
    <ol>
        {listOfTodos.map((todo,i)=>{
                return(
                    <li  key={todo.id} className={todo.done ? 
                      "marked-done" : ""}>
                        
                        <input 
                            type="checkbox"
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>{markTodoAsDone(todo)}}
                        />
                        <span>{todo.text}</span>
                        
                        <button type='button' className='delete'onClick={() => deleteTodo(todo.id)}>delete</button>
                    </li>
                )
          })}
          
    </ol>
  )
}

export default Todos