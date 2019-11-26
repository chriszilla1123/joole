import * as actions from './actionTypes';

export const loginStart = (data) => ({
    //data is an object containing string 'username' and 'password' properties
    type: actions.LOGIN_START,
    data
});

export const loginSuccess = (data, response) => ({
    //response is an object with the following string properties:
    // firstName, lastName, token, userId, username
    type: actions.LOGIN_SUCCESS,
    response
});

export const loginFail = (errMsg) => ({
    //Called when the login fails to receive response, or on bad login
    type: actions.LOGIN_FAIL,
    errMsg
});

export const setRedirect = (location) => ({
    type: actions.LOGIN_SET_REDIRECT,
    location
})

export const clearLoginError = (value) => ({
    type: actions.LOGIN_CLEAR_ERROR,
    value
})

export function login(data) {
    //data is an object containing string 'username' and 'password' properties
    let url = "http://localhost:8080/joole/user/login"
    let payload = {
        username: data.username,
        password: data.password
    }

    return function(dispatch) {
        //Update the state to loginStart
        dispatch(loginStart(data));

        //Send the POST request
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json")

        xhr.onreadystatechange = function() {
            if(this.readyState === XMLHttpRequest.DONE){
                if(this.status === 200){
                    //process data

                    //if response is failed, the user provided bad credentials
                    if(this.responseText === "failed"){
                        dispatch(loginFail("Invalid Login Credentials"));
                    }
                    else{
                        let response = JSON.parse(this.response);
                        dispatch(loginSuccess(data, response));
                    }
                }
                else{
                    dispatch(loginFail("Failed to connect to server"));
                }
            }
        }
        xhr.send(JSON.stringify(payload));
    }
}

