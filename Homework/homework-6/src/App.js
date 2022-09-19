import React,{useState,useEffect} from 'react';
import {Routes,Route} from 'react-router-dom'
import Posts from './components/Posts';
import Photos from './components/Photos'
import Comments from './components/Comments'
import Albums from './components/Albums'
import Todos from './components/Todos'
import Nav from './components/Nav'
import Hero from './components/Hero'
import "./css/Styles.css"

function App() {

  
  const[photos,setPhotos]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
    .then(result=>result.json())
    .then(json=>setPhotos(json))
    .catch(err=> alert(err))
  },[])

  

  function deletePhotoRow(id){
    const removeRow = photos.filter((photo) => photo.id !== id);
    setPhotos(removeRow);
  }


  
 return (

  <div id="app">
     <Nav/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/photos' element={<Photos photos={photos} deletePhotoRow={deletePhotoRow}/>}/>
        <Route path='/comments' element={<Comments/>}/>
        <Route path="/albums" element={<Albums/>}/>
        <Route path="/todos" element={<Todos/>}/>
      </Routes>
  </div>

  );
}

export default App;
