const initialState={
    search: "just started to search for users",

}

const UsersRequestReducer = (state=initialState,action) => {

    switch(action.type){

        case 'USERS_REQUEST':
            return{
                ...state,
                search: action.payload
            }
            
         default:
            return state;
    }
}

export default UsersRequestReducer