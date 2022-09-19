import React,{useState,useEffect} from 'react';

const Comments = () => {

  const[comments,setComments]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10")
    .then(result=>result.json())
    .then(json=>setComments(json))
    .catch(err=> alert(err))
  },[])

  function deleteRow(id){
    const removeRow = comments.filter((comment) => comment.id !== id);
  
    setComments(removeRow);
  }
  
  return (
    <div>
    <h2>Comments</h2>
      {comments.length >0 ? 
      <table border={1}>
          <tr>
            <th>name</th>
              <th>email</th>
              <th>comment</th>
              
          </tr>
          <tbody>
              {comments.map((comment,i)=>{
                 return(
                  <tr key={comment.id}>
                  <td>{comment.name}</td>
                  <td>{comment.email}</td>
                  <td>{comment.body}</td>
                  <td><button type='button' onClick={() => deleteRow(comment.id)}>delete</button></td>
                </tr>
                 )
              })}
          </tbody>
      </table>
      :
          <h2>loading comments</h2>
      }
  </div>
  )
}

export default Comments