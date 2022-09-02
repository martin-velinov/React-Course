import React from 'react'
import PropTypes from 'prop-types'




export const Comments =({listOfComments,cifra})=> {
  return (
    <div >
       <p>Comments</p>
      {listOfComments.map((comment,i)=>{
        return(
          <div key={i}>
            {comment.author ==='Martin' ? <p>author:{comment.author}</p>:
            <p>no author known</p>}
            <p style={{color:comment.author==='Martin'? 'red':'blue'}}>Content:{comment.content}</p>
            <p>{cifra}</p>
          </div>
        )
      })}
    </div>
  )
}

Comments.propTypes={
  listOfComments:PropTypes.arrayOf(PropTypes.object),
  cifra:PropTypes.number.isRequired
}