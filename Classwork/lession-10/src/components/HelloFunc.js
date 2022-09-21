import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { sayHello } from "../actions/sayHelloActions";

export function HelloFunc(){
    const dispatch =useDispatch()
    const greeting = useSelector(state=>state.sayHelloReducer.greeting) 
    
    useEffect(()=>{
        dispatch(sayHello())
    },[dispatch])
    return(
        <div className="func-component">
            <h2>{greeting}promena</h2>
        </div>
    )
}