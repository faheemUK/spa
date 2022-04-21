const ERROR = {
    SYSTEM_ERROR: "System error. Please try again later!"
};
const PATH = {
    NOPAGE: "*",
    POSTS: "/"
};

const baseUrl = "https://jsonplaceholder.typicode.com/";
const APP_SETTINGS = {
    API_PATH: {
        POSTS: {
            getAllPosts: baseUrl + "posts",
            newPost: baseUrl + "posts"
        }
    }
};
export {
    ERROR,
    PATH,
    APP_SETTINGS
};
