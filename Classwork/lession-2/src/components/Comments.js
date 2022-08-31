import React from 'react';

export function Comments(props){

  return (
    <div id='comments'>
        {props.hasComments && <h2>Comments</h2>}
        {props.multipleComments  ? 
        <p>yes, there's multiple</p> 
        : <p>no there isn't</p> }
    </div>
  );
}
