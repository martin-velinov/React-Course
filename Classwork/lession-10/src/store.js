import {configureStore}from "@reduxjs/toolkit"
import logger from 'redux-logger';

import sayHelloReducer from "./reducers/sayHelloReducer";

const reducer= {
    sayHelloReducer:sayHelloReducer
}

export default configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger) 
})