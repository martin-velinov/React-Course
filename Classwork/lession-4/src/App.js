import React, {useState,useEffect} from 'react';
// import {ClassComponent} from './components/ClassComponent'

function App() {

  const [promenliva1,setPromenliva1]= useState('vrednost 1')
  const [inputVrednost,setInputVrednost] = useState('')
  const[username, setUsername] = useState('')
  const[password,setPassword] =useState('')
  const [counter,setCounter] =useState(0)


 function handleChangedValue(event){
  // console.log('functon called');
  setInputVrednost(event.target.value)
 }
 
 useEffect(()=>{
  console.log('username',username)
 },[username])

 return (

    <div id='app'>
      <h2>App</h2>
      {/* <ClassComponent/> */}
      <p>vrednost:{promenliva1}</p>
      <button onClick={()=>{setPromenliva1('vrednost 2')}}>click me!</button>
      <br />
      <input type="text" 
      placeholder='enter something' 
      value={inputVrednost}
      onChange={handleChangedValue}
      />
     <p>vrednost na inputot: {inputVrednost}</p>

     <input type="text" 
     placeholder='enter username'
      value={username}
      onChange={(event)=> {setUsername(event.target.value)}}
     />

     {/* <p>username:{username}</p> */}

     <input type="password" 
     placeholder='password'
     value={password}
     onChange={(e)=> {setPassword(e.target.value)}}
     />

     <p>password:{password}</p>

     <img src="https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg" alt=""
     onClick={()=> {setCounter(counter+1)}}
     />
     <h1>Counter: {counter}</h1>
    </div>

   
  );
}

export default App;
