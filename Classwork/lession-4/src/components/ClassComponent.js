import React from 'react'

export  class ClassComponent extends React.Component {
  
  constructor(props){
    super(props);
    console.log('this is constructor');
    this.state={
        promenliva1:'vrednost 1'
    }
  }

  componentDidMount(){
    console.log('this is comp did mount');
  }

  smeniVrednost=() =>{
    this.setState({
        promenliva1:"vrednost 2"
    })
  }
    render() {
        console.log('this is render')
    return (
      <div>ClassComponent
        <p>Vrednost:{this.state.promenliva1}</p>
       <button onClick={this.smeniVrednost}>Click me</button>
      </div>
      
    )
  }
}
