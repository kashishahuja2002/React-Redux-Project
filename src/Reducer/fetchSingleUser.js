const initialState = {}

export const fetchSingleUser = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_SINGLE" :
            var data = action.payload;
            return {
                ...data
            };
        
        default:
            return state;
    }
} 