import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getUserPosts(userId) {
    return axios.get(`${APP_SETTINGS.API_PATH.POSTS.getAllPosts}?userId=${userId}`)
}

export function addNewPost(postData) {
    return axios.post(`${APP_SETTINGS.API_PATH.POSTS.newPost}`, postData, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}