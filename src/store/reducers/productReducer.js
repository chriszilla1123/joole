import { updateObject } from '../utility';
import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    token: null,
    products: null,
};

const productStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        products: null,
    });
}

const productSuccess = (state, action) => {
    let data = action.response;
    return updateObject(state, {
        loading: false,
        error: null,
        products: data,
    });
}

const productFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.errMsg,
        products: null,
    });
}

const clearProductError = (state, action) => {
    return updateObject(state, {error: null});
}

const productSetKey = (state, action) => {
    return updateObject(state, {
        key: action.key
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.PRODUCT_START: return productStart(state, action);
        case actions.PRODUCT_SUCCESS: return productSuccess(state, action);
        case actions.PRODUCT_FAIL: return productFail(state, action);
        case actions.PRODUCT_CLEAR_ERROR: return clearProductError(state, action);
        case actions.PRODUCT_SET_KEY: return productSetKey(state, action);
        default: return state;
    }
}

export default reducer