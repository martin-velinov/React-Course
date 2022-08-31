import React from 'react';

export class StudentClass extends React.Component{

    render(){
        
        return(
            <div >
               <h2>student </h2>
               <p>name {this.props.student.name}</p>
                <p>last name {this.props.student.lastName}</p>
                <p>index {this.props.student.index}</p>
            </div>
        )
    }
}