const initialState = {}

export const fetchUsers = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_ALL" :
            var data = action.payload;
            return {
                ...data
            };
        
        default:
            return state;
    }
} 