import React from 'react'
import {connect} from 'react-redux'
import {sayHello} from '../actions/sayHelloActions'

export class Hello extends React.Component{

    componentDidMount(){
        this.props.getGreeting()
    }

    render(){
        return(
            <div className="hello">
                <h2>{this.props.greeting}</h2>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return{
        greeting:state.sayHelloReducer.greeting
    }
}

const mapDispatchToProps =(dispatch) => {
    return{
        getGreeting:()=>{
            dispatch(sayHello())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello)