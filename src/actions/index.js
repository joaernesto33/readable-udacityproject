export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const GET_FILTERED_POSTS = 'GET_FILTERED_POSTS'
export const FILTER_POSTS = 'FILTER_POSTS'
export const ORDER_POSTS = 'ORDER_POSTS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ORDER_COMMENTS = 'ORDER_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SCORE_COMMENT = 'SCORE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories,
  }
}

export function getPosts (posts) {
  return {
    type: GET_POSTS,
    posts,
  }
}

export function getPost (post) {
  return {
    type: GET_POST,
    post,
  }
}

export function getFilteredPosts (posts) {
  return {
    type: GET_FILTERED_POSTS,
    posts,
  }
}

export function filterPosts (filteroption) {
  return {
    type: FILTER_POSTS,
    filteroption,
  }
}

export function orderPosts (orderoption) {
  return {
    type: ORDER_POSTS,
    orderoption,
  }
}


export function getComments (comments) {
  return {
    type: GET_COMMENTS,
    comments,
  }
}

export function orderComments (orderoption) {
  return {
    type: ORDER_COMMENTS,
    orderoption,
  }
}

export function addComment ({ comment }) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function scoreComment ({ idcomment, votes, option }) {
  return {
    type: SCORE_COMMENT,
    idcomment,
    votes,
    option,
  }
}

export function editComment ({ comment }) {
  return {
    type: EDIT_COMMENT,
    comment,
  }
}

export function deleteComment ({ comment }) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}
