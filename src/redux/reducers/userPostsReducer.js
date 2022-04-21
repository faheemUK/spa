import { USER_POSTS_REQUEST } from "../actions/utilities";
const INITIAL_STATE = {
    allPostsLoading: false,
    allPostsSuccess: false,
    allPostsFailure: false,
    allPostsError: null,
    allPosts: [],
    addPostLoading: false,
    addPostSuccess: false,
    addPostFailure: false,
    addPostError: null
};

export const userPostsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_POSTS_REQUEST.RESET_POST:
            return {
                ...state,
                addPostLoading: false,
                addPostSuccess: false,
                addPostFailure: false,
                addPostError: null
            }
        case USER_POSTS_REQUEST.GET_USER_POST_LOADING:
            return {
                ...state,
                allPostsLoading: true,
                allPostsSuccess: false,
                allPostsFailure: false,
                allPostsError: null,
            }
        case USER_POSTS_REQUEST.GET_USER_POST_SUCCESS:
            return {
                ...state,
                allPostsLoading: false,
                allPostsSuccess: true,
                allPostsFailure: false,
                allPostsError: null,
                allPosts: action.payload
            }
        case USER_POSTS_REQUEST.GET_USER_POST_FAILURE:
            return {
                ...state,
                allPostsLoading: false,
                allPostsSuccess: false,
                allPostsFailure: false,
                allPostsError: action.payload,
            }
        case USER_POSTS_REQUEST.ADD_USER_POST_LOADING:
            return {
                ...state,
                addPostLoading: true,
                addPostSuccess: false,
                addPostFailure: false,
                addPostError: null
            }
        case USER_POSTS_REQUEST.ADD_USER_POST_SUCCESS:
            let myAllPosts = [];
            myAllPosts.push(action.payload);
            for (let i = 0; i < state.allPosts.length; i++) {
                myAllPosts.push(state.allPosts[i])
            }
            return {
                ...state,
                addPostLoading: false,
                addPostSuccess: true,
                addPostFailure: false,
                addPostError: null,
                allPosts: myAllPosts
            }
        case USER_POSTS_REQUEST.ADD_USER_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostSuccess: false,
                addPostFailure: true,
                addPostError: action.payload
            }
        default:
            return state;
    }
};
