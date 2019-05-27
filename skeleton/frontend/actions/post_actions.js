import * as PostApiUtil from '../util/post_api_util';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const fetchPosts = () => dispatch => {
    return PostApiUtil.fetchPosts().then(posts => dispatch({type: RECEIVE_ALL_POSTS, posts}));
};

export const fetchPost = (id) => dispatch => {
    return PostApiUtil.fetchPost(id).then(post => dispatch({ type: RECEIVE_POST, post }));
};

export const createPost = (post) => dispatch => {
    return PostApiUtil.createPost(post).then(post => dispatch({ type: RECEIVE_POST, post }));
};

export const updatePost = (post) => dispatch => {
    return PostApiUtil.updatePost(post).then(post => dispatch({ type: RECEIVE_POST, post }));
};

export const deletePost = (id) => dispatch => {
    return PostApiUtil.deletePost(id).then( post => dispatch({ type: REMOVE_POST, postId: post.id }));
};