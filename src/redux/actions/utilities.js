function request(actionType) {
    return {
        type: actionType
    }
}
function success(actionType, response) {
    return {
        type: actionType,
        payload: response
    }
}
function failure(actionType, error) {
    return {
        type: actionType,
        payload: error
    }
}
const USER_POSTS_REQUEST = {
    GET_USER_POST_LOADING: "GET_USER_POST_LOADING",
    GET_USER_POST_SUCCESS: "GET_USER_POST_SUCCESS",
    GET_USER_POST_FAILURE: "GET_USER_POST_FAILURE",
    ADD_USER_POST_LOADING: "ADD_USER_POST_LOADING",
    ADD_USER_POST_SUCCESS: "ADD_USER_POST_SUCCESS",
    ADD_USER_POST_FAILURE: "ADD_USER_POST_FAILURE",
    RESET_POST: "RESET_POST"
}



export {
    request,
    success,
    failure,
    USER_POSTS_REQUEST
}
