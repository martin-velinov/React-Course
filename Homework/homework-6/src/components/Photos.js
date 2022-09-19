import React from 'react';

const Photos = ({photos,deletePhotoRow}) => {


  return (
    <div>
    <h2>Photos</h2>
      {photos.length >0 ? 
      <table border={1}>
          <tr>
            <th>title</th>
              <th>url</th>
              
          </tr>
          <tbody>
              {photos.map((photo,i)=>{
                 return(
                  <tr key={photo.id}>
                  <td>{photo.title}</td>
                  <td>{photo.thumbnailUrl}</td>
                  <td><button type='button' onClick={() => deletePhotoRow(photo.id)}>delete</button></td>
                </tr>
                 )
              })}
          </tbody>
      </table>
      :
          <h2>loading photos</h2>
      }
  </div>
  )
}

export default Photos