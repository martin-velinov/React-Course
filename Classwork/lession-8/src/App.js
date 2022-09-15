import React,{useEffect,useState} from 'react';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import ChildComponent from './components/ChildComponent'
import NotFound from './components/NotFound'
import Users from './components/Users'

import {Routes,Route} from 'react-router-dom'


function App() {

  const[users,setUsers]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(result=>result.json())
    .then(json=>setUsers(json))
    .catch(err=> alert(err))
  },[])

 return (

    <div id='app'>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}>
          <Route path="us" element={<ChildComponent/>}/>
       </Route>
       <Route path='*' element={<NotFound/>}/>
       <Route path='/users' element={<Users userList={users}/>}/>
      </Routes>
    </div>

   
  );
}

export default App;
