import React,{useEffect,useState} from 'react';
import {Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import { API_URL } from './utils/constants';
import { GalleryContext } from './utils/GalleryContext';
function App() {

  const[photos,setPhotos]=useState([])
  const [selectedImage, setSelectedImage]=useState('')

  useEffect(()=>{
    fetch(`${API_URL}/photos`)
    .then(result=>result.json())
    .then(json=>setPhotos(json))
    .catch(err=> alert(err))
  },[])

  // function openPhoto(photoUrl){
  //   setSelectedImage(photoUrl)
  // }

  // function closePhoto(){
  //   setSelectedImage("")
  // }
 return (

    <div id='app'>
      <Nav/>
      <GalleryContext.Provider value={{selectedImage,setSelectedImage}}>
        <Routes>
          <Route path='/gallery' element={<Gallery photoList={photos}/>}/>
        </Routes>
      </GalleryContext.Provider>
    </div>

   
  );
}

export default App;
