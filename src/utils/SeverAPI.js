//Use a header for communicating with the backend API server

const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'api-server'
}

//Categories URLs*********************
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getCategoryPosts = (categoryId) =>
  fetch(`${api}/${categoryId}/posts`, { headers })
    .then(res => res.json())
    //.then(data => data.categoryPosts)


//Posts URLs*************************
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    //.then(data => data.posts)

export const addPost = (bodyPost) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyPost)
  }).then(res => res.json())
    //.then(data => data.posts)

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    //.then(data => data.post)

export const votingPost = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
  })


export const updatePost = (postId, postBody) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postBody)
  }).then(res => res.json())

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers : { ...headers }
  }).then(res => res.json())
    .then(data => data.deletedMsg)


//Comments URLs*****************************
export const getPostComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    //.then(data => data.postComments)

export const addComment = (bodyComment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyComment)
  }).then(res => res.json())
    //.then(data => data.comments)

export const getComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    //.then(data => data.comment)

export const votingComment = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
  })


export const updateComment = (commentId, commentBody) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentBody)
  }).then(res => res.json())

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: { ...headers }
  }).then(res => res.json())
    .then(data => data.deletedMsg)
