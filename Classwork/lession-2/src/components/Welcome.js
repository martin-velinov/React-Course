import React from 'react';

export function Welcome(props) {
  return (

    <div >
      <p>welcome to my component{props.ime}{props.prezime}</p>
      <p>I'm {props.age} old</p>
    </div>
  );
}

