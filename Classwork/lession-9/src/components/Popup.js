import React,{useContext} from 'react'
import { GalleryContext } from '../utils/GalleryContext'

const Popup = () => {
  
    const {selectedImage,setSelectedImage}= useContext(GalleryContext)
    return (
    <div id='popup'>
        <button onClick={()=>{setSelectedImage("")}}className='close-popup'>&times;</button>
        <div className="popup-container">
            <img src={selectedImage} alt="" />
        </div>
    </div>
  )
}

export default Popup