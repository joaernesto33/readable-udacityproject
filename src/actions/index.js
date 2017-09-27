export const GET_POSTS = 'GET_POSTS'
export const FILTER_POSTS = 'FILTER_POSTS'
export const ORDER_POSTS = 'ORDER_POSTS'
export const ADD_POST = 'ADD_POST'
export const SCORE_POST = 'SCORE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const FILTER_COMMENTS = 'FILTER_COMMENTS'
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

export function addPost  ({ post }) {
  return {
    type: ADD_POST,
    post,
  }
}

export function scorePost  ({ idpost, votes, option }) {
  return {
    type: SCORE_POST,
    idpost,
    votes,
    option,
  }
}

export function editPost  ({ post }) {
  return {
    type: EDIT_POST,
    post,
  }
}

export function deletePost  ({ post }) {
  return {
    type: DELETE_POST,
    post,
  }
}

export function getComments (comments) {
  return {
    type: GET_COMMENTS,
    comments,
  }
}

export function filterComments ({ filteroption }) {
  return {
    type: FILTER_COMMENTS,
    filteroption,
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
