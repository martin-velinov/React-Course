import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger'; 
import UsersRequestReducer from "./reducers/UsersRequestReducer"; 

const reducer = {
    UsersRequestReducer: UsersRequestReducer 
}

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})