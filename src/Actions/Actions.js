import axios from 'axios';

const FETCH_ALL = 'FETCH_ALL';
const FETCH_SINGLE = 'FETCH_SINGLE';
const IS_LOADING = 'IS_LOADING';

export const fetchAll = () => {
    return (dispatch) => {
        var url = "https://reqres.in/api/users";
        axios.get(url)
            .then((response) => {
                dispatch(fetchAllUsers(response.data));
                dispatch(isLoading(false));
            })
            .catch((error) => {
                console.log("Error: ",error);
                dispatch(isLoading(false))
            })
    }
}

export const fetchSingle = (id) => {
    return (dispatch) => {
        var url = "https://reqres.in/api/users/"+id;
        axios.get(url)
            .then((response) => {
                dispatch(fetchSingleUser(response.data.data));
                dispatch(isLoading(false));
            })
            .catch((error) => {
                console.log("Error: ",error);
                dispatch(isLoading(false));
            })
    }
}

export const fetchAllUsers = (data) => {
    return {
        type: FETCH_ALL,
        payload: data
    }
}

export const fetchSingleUser = (data) => {
    return {
        type: FETCH_SINGLE,
        payload: data
    }
}

export const isLoading = (status) => {
    return {
        type: IS_LOADING,
        payload: status
    }
}