import React from 'react'
import '../css/Styles.css'


export function User(props) {
  return (
    <div >
        <h2>Users</h2>
        {

        props.showFirst  ? 
        //user1
        <div > 
            <label>First Name: </label>
            <p>{props.user1.firstName}</p>
            <label>Last Name: </label>
            <p> {props.user1.lastName}</p>
            <label>Age: </label>
            <p> {props.user1.age}</p>
            <label>Address: </label>
            <p> {props.user1.address}</p>
        </div> 
        :
        //user2
        <div> 
            <label>First Name: </label>
            <p> {props.user2.firstName}</p>
            <label>Last Name: </label>
            <p> {props.user2.lastName}</p>
            <label>Age: </label>
            <p> {props.user2.age}</p>
            <label>Address: </label>
            <p> {props.user2.address}</p>
        </div>
        }

        

        </div>
  )
}

