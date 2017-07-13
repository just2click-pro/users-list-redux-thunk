import * as ACTIONS from "./index";
import UsersService from "../services/UserService";
import PostsService from "../services/PostsService";

export function addUser(user){
    return { type: ACTIONS.ADD_USER, user };
}

export function removeUser(user){
    return { type: ACTIONS.REMOVE_USER, user };
}

export function selectUser(user){
    return { type: ACTIONS.SELECT_USER, user };
}

export function logIn(user){
    return { type: ACTIONS.LOG_IN, user};
}

export function logOut(){
    return { type: ACTIONS.LOG_OUT };
}

export function getUser(userId) {
    return dispatch => {
        dispatch({ type: ACTIONS.GET_USER_REQUEST });

        UsersService.getUser(userId)
            .then( user => {
                return dispatch({ type: ACTIONS.GET_USER_RESPONSE, user })
            });

        // Promise.all([UsersService.getUser(userId), PostsService.getPosts(userId)])
        //     .then( ([user,posts]) => dispatch( { type: ACTIONS.GET_USER_RESPONSE, user, posts} ));             
        // }
    }
}

export function getPosts(userId) {
    return dispatch => {
        dispatch({ type: ACTIONS.GET_USER_REQUEST });

        PostsService.getPosts(userId)
            .then( posts => {
                return dispatch({ type: ACTIONS.GET_USER_RESPONSE, posts })
            });
    }
}

export function getUsersList(){
    return dispatch => {
        dispatch( { type: ACTIONS.GET_USERS_LIST_REQUEST} );

        UsersService.getAllUsers()
            .then( users => dispatch( { type: ACTIONS.GET_USERS_LIST_RESPONSE, users} ) )
    }
}

