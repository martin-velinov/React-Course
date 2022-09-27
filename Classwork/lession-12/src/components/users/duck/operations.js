import actions from './actions';
import {getUsers,deleteUser} from './../../../api/usersApi';

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams));
        return getUsers(requestParams)
            .then(result=>{
                dispatch(actions.fetchUsersSuccess(result));
                return result;
            })
            .catch(err=>{
                dispatch(actions.fetchUsersFail(err));
                return err;
            })
    }
}

const removeUser = (requestParams) => {
    return dispatch => {
        dispatch(actions.deleteUsersRequest(requestParams));
        return deleteUser(requestParams)
            .then(result=>{
                dispatch(actions.deleteUsersSuccess(result));
                return result;
            })
            .catch(err=>{
                dispatch(actions.deleteUsersFail(err));
                return err;
            })
     }
} 


export default{
    fetchUsers,
    removeUser
}