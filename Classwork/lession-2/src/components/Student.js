import React from 'react';

export function Student(props){

    return (
      <div >
          <h2>student </h2>
          <p>name {props.student.name}</p>
          <p>last name {props.student.lastName}</p>
          <p>index {props.student.index}</p>
      </div>
    );
  }
  