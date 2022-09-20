import React,{useContext} from 'react'
import Popup from './Popup'
import { GalleryContext } from '../utils/GalleryContext'

const Gallery = ({photoList}) => {

  const {selectedImage,setSelectedImage}= useContext(GalleryContext)
  return (
    <div id='gallery'>
        {photoList.slice(0,50).map(photo=>{
            return(
                <div onClick={()=>setSelectedImage(photo.url)} key={photo.id} className="image-holder">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>
            )
        })}
        {selectedImage !== "" && <Popup />}
    </div>
  )
}

export default Gallery