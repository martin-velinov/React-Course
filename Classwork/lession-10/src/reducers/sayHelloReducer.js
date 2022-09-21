const initialState={
    greeting:"helloooooooo"
}

const sayHelloReducer = (state=initialState,action) => {

    switch(action.type){

        case "SAY_HELLO":
        return{
            ...state,
            greeting:action.payload
        }
        default:return state;
    }
}

export default sayHelloReducer