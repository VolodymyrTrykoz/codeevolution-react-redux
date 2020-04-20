import { BUY_CAKE, BUY_ICECREAM, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actionTypes';
import axios from 'axios';

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const buyIcecream = (number = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}

//=====================================//

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//=============async with thunk==================//

export const fetchUsers = () => async dispatch => {
    dispatch(fetchUsersRequest());
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = resp.data;
        dispatch(fetchUsersSuccess(users));
    }
    catch(error) {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
    }
}