import React,{useState,useEffect} from 'react';

const Albums = () => {

  const[albums,setAlbums]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=15")
    .then(result=>result.json())
    .then(json=>setAlbums(json))
    .catch(err=> alert(err))
  },[])

  function deleteRow(id){
    const removeRow = albums.filter((album) => album.id !== id);
  
    setAlbums(removeRow);
  }
  

  return (
    <div>
    <h2>Albums</h2> 
    {albums.length >0 ? 
      <table border={1}>
          <tr>
            <th>title</th>
            
              
          </tr>
          <tbody>
              {albums.map((album,i)=>{
                 return(
                  <tr key={album.id}>
                  <td>{album.title}</td>
                  <td><button type='button' onClick={() => deleteRow(album.id)}>delete</button></td>
                  
                </tr>
                 )
              })}
          </tbody>
      </table>
      :
      <h2>loading albums</h2>
  }
  </div>
  )
}

export default Albums