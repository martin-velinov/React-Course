import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { usersRequest } from "../actions/UsersRequestAction";

export function UsersRequest(){
    const dispatch =useDispatch()
    const search = useSelector(state=>state.UsersRequestReducer.search) 
    
    useEffect(()=>{
        dispatch(usersRequest())
    },[dispatch])
    return(
        <div >
            <h2>{search}</h2>
        </div>
    )
}