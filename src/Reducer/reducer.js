const initialState = {
    allUsers: {},
    singleUser: {},
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_ALL" :
            var data = action.payload;
            return {
                ...state, 
                allUsers: data
            };

        case "FETCH_SINGLE" :
            data = action.payload;
            return {
                ...state, 
                singleUser: data
            };

        case "IS_LOADING" :
            var status = action.payload;
            console.log("S:",status)
            return {
                ...state,
                isLoading: status
            }
        
        default:
            return state;
    }
}

export default reducer;