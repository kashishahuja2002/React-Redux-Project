import axios from 'axios';

const FETCH_ALL = 'FETCH_ALL';
const FETCH_SINGLE = 'FETCH_SINGLE';

export const fetchAll = () => {
    return (dispatch) => {
        var url = "https://reqres.in/api/users";
        axios.get(url)
            .then((response) => {
                dispatch(fetchAllUsers(response.data))
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const fetchSingle = (id) => {
    return (dispatch) => {
        var url = "https://reqres.in/api/users/"+id;
        axios.get(url)
            .then((response) => {
                dispatch(fetchSingleUser(response.data.data))
            })
            .catch((error) => {
                console.log("Error: ",error);
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