import { getUser,getToken,setUserStorage,removeUserStorage } from "../../../config/StorageFunctions";
import constants from "./constants";
const initialState = {
    token:getToken(),
    user:getUser()
}


const reducer = (state= initialState,action) => {

    switch(action.type){
        
        case constants.LOGIN_SUCCESS:
            setUserStorage(action.payload.accessToken,action.payload.username);
            return{
                ...state,
                token: action.payload.accessToken,
                user:action.payload.usename
            }
            case constants.LOGIN_FAILED:
                return{
                    ...state
                    }
            case constants.LOGOUT_USER:
                removeUserStorage();
                return{
                    ...state,
                    token:null,
                    user:null
                }
            
        default: return state;
    }
}

export default reducer;