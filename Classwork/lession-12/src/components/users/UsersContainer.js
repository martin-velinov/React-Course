import React,{useEffect} from 'react';
import {UsersComponent} from './UsersComponent';
import {useDispatch,useSelector} from 'react-redux';
import operations from './duck/operations';

export default function UsersContainer(){

    const dispatch = useDispatch();
    const users = useSelector(state=>state.usersReducer.users);
    const error = useSelector(state=>state.usersReducer.error);

    useEffect(()=>{
        dispatch(operations.fetchUsers());
    },[dispatch])

    function deleteUserFromArray(userId){
        dispatch(operations.removeUser(userId))
    }

    return(
        <div id="users-container">
            <UsersComponent listOfUsers={users} error={error} deleteUser={deleteUserFromArray}/>
        </div>
    )
}