import { request, success, failure, USER_POSTS_REQUEST } from './utilities';
import { getUserPosts, addNewPost } from '../api';
export function getAllUserPosts(userId) {
    return (dispatch) => {
        dispatch(request(USER_POSTS_REQUEST.GET_USER_POST_LOADING));
        getUserPosts(userId).then(
            response => {
                if (response.data.length >= 0) {
                    dispatch(success(USER_POSTS_REQUEST.GET_USER_POST_SUCCESS, response.data))
                }
                else {
                    dispatch(failure(USER_POSTS_REQUEST.GET_USER_POST_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_POSTS_REQUEST.GET_USER_POST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function newPost(postData, onSuccess) {
    return (dispatch) => {
        dispatch(request(USER_POSTS_REQUEST.ADD_USER_POST_LOADING));
        addNewPost(postData).then(
            response => {
                console.log("here is the list,", response.data.length)
                if (response.data) {
                    dispatch(success(USER_POSTS_REQUEST.ADD_USER_POST_SUCCESS, response.data))
                    if (onSuccess) {
                        onSuccess()
                    }
                }
                else {
                    dispatch(failure(USER_POSTS_REQUEST.ADD_USER_POST_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_POSTS_REQUEST.ADD_USER_POST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}