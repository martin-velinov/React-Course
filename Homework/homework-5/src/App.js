import React,{useState,useEffect} from 'react';
import Todos from './components/Todos';
import "./css/Styles.css"
function App() {

const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = useState('');

// const [todos, setTodos] = useState([
//   { id: 0, text: "learn react", done: false },
//   { id: 1, text: "Eat Dinner", done: false },
//   { id: 2, text: "Go to Sleep", done: false }
// ]
// );

// when component mounts 
useEffect(() => {
  const storageTodos = JSON.parse(localStorage.getItem('todos'));
  if (storageTodos) {
    setTodos(storageTodos);
  }
}, []);

//when component (todos array) gets updated
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);


//add todo
function addTodo(){
  if (newTodo.trim() !== '') {

  let novoTodo = {
    id: todos.length + 1,
    text: newTodo,
    done: false
  }

  setTodos([...todos,novoTodo]);
  setNewTodo('');
  
  }else {
  alert("Enter Todo first!")
  }
}

// check todo as completed
function markTodoAsDone(item){
  setTodos([
    ...todos.map(todo=> (item.id === todo.id) ? 
      {id:todo.id,text:todo.text,done:!todo.done} 
      : todo 
    )
  ])
}

//delete todo
function deleteTodo(id){
  const removeTodo = todos.filter((todo) => todo.id !== id);

  setTodos(removeTodo);
}


 return (

  <div id="todo">
    <h2>Todo app</h2>
    <input
      type="text"
      placeholder="Enter New Todo"
      value={newTodo}
      onChange={(e) => { setNewTodo(e.target.value) }}
    />
    <button onClick={addTodo} className="add"> Add TODO </button>

    <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} deleteTodo={deleteTodo} />
  </div>

  );
}

export default App;
