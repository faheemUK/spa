import { combineReducers } from "redux";
import { userPostsReducer } from "./userPostsReducer";
export const rootReducer = combineReducers({
    userPosts: userPostsReducer,
   });
