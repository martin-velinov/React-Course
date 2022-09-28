import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authReducer } from "./components/auth/duck";
import { usersReducer } from "./components/users/duck";

const reducer = {
    usersReducer: usersReducer,
    authReducer: authReducer
}

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})