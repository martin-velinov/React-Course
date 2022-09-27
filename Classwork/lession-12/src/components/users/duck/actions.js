import constants from "./constants";

const fetchUsersRequest = (requestParams) => {
    return{
        type: constants.GET_USERS_REQUEST,
        payload: requestParams
    }
}

const fetchUsersSuccess = (users) => {
    return{
        type: constants.GET_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFail = (error) => {
    return{
        type:constants.GET_USERS_FAIL,
        payload:error
    }
}

const deleteUsersRequest = (requestParams) =>{
    return{
        type: constants.DELETE_USERS_REQUEST,
        payload:requestParams
    }
}

const deleteUsersSuccess = (userId) => {
    return{
        type: constants.DELETE_USERS_SUCCESS,
        payload: userId
    }
}

const deleteUsersFail = (error) => {
    return{
        type:constants.DELETE_USERS_FAIL,
        payload:error
    }
}

// eslint-disable-next-line
export default{
    fetchUsersFail,
    fetchUsersRequest,
    fetchUsersSuccess,
    deleteUsersFail,
    deleteUsersRequest,
    deleteUsersSuccess
}