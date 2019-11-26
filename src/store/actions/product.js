import * as actions from './actionTypes';

export const productStart = (data) => ({
    type: actions.PRODUCT_START,
    data
});

export const productSuccess = (response) => ({
    type: actions.PRODUCT_SUCCESS,
    response
});

export const productFail = (errMsg) => ({
    type: actions.PRODUCT_FAIL,
    errMsg
});

export const clearProductError = (value) => ({
    type: actions.PRODUCT_CLEAR_ERROR,
    value
});

export const productSetKey = (key) => ({
    type: actions.PRODUCT_SET_KEY,
    key
});

export function getProducts(key){
    let url = "http://localhost:8080/joole/product/getProducts"

    return function(dispatch) {
        //Update the state to productStart
        dispatch(productStart(key));

        //Send the GET request
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.onreadystatechange = function() {
            //do stuff here
            if(this.readyState === XMLHttpRequest.DONE){
                if(this.status === 200){
                    //process data

                    let response = JSON.parse(this.response);
                    dispatch(productSuccess(response));
                }
                else{
                    dispatch(productFail("Invalid Login Credentials or Failed to Connect"));
                }
            }
        }

        xhr.setRequestHeader('Authorization', 'Bearer ' + key);
        xhr.send();
    }
}