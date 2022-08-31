import React from 'react';

export function FruitList(props){

    return (
      <div >
          <p>Fruit List</p>
          <ul>
          {
            props.listOfFruits.map((fruit,i)=>(
                <li key={i}>
                    {fruit}
                </li>
            ))
          }
          </ul>
      </div>
    );
  }
  