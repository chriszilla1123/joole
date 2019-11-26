import { updateObject } from '../utility';
import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    token: null,
    user: null,
    userId: null,
    firstName: null,
    lastName: null,
    redirectPath: null,
    loggedIn: false
}

const loginStart = (state, action) => {
    return updateObject(state, {
        token: null,
        user: null,
        userId: null,
        firstName: null,
        lastName: null,
        error: null, 
        loading: true,
        redirectPath: "/",
        loggedIn: false
    });
}

const loginSuccess = (state, action) => {
    let data = action.response;
    return updateObject(state, {
        token: data.token,
        user: data.username,
        userId: data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        error: null,
        loading: false,
        redirectPath: "/categories",
        loggedIn: true
    });
}

const loginFail = (state, action) => {
    return updateObject(state, {
        token: null,
        user: null,
        userId: null,
        firstName: null,
        lastName: null,
        error: action.errMsg,
        loading: false,
        redirectPath: "/",
        loggedIn: false
    });
}

const logout = (state, action) => {
    return updateObject(state, {
        token: null, 
        userId: null,
        firstName: null,
        lastName: null,
        error: null,
        loading: false,
        redirectPath: null,
        loggedIn: false
    });
}

const setRedirectPath = (state, action) => {
    let location = "/" + action.location;
    return updateObject(state, {redirectPath: location});
}

const clearError = (state, action) => {
    return updateObject(state, {error: null});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.LOGIN_START: return loginStart(state, action);
        case actions.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actions.LOGIN_FAIL: return loginFail(state, action);
        case actions.LOGIN_LOGOUT: return logout(state, action);
        case actions.LOGIN_SET_REDIRECT: return setRedirectPath(state, action);
        case actions.LOGIN_CLEAR_ERROR: return clearError(state, action);
        default: return state;
    }
}

export default reducer;