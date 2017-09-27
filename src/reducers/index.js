import { combineReducers } from 'redux'
import {
  GET_POSTS,
  FILTER_POSTS,
  ORDER_POSTS,
  ADD_POST,
  SCORE_POST,
  EDIT_POST,
  DELETE_POST,
  GET_COMMENTS,
  FILTER_COMMENTS,
  ORDER_COMMENTS,
  ADD_COMMENT,
  SCORE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_CATEGORIES
} from '../actions/index'


let postInitialState = {
  posts:[],
  postOrderOption:''
}

let commentInitialState = {
  comments:[],
  commentOrderOption:''
}

let catInitialState = {
  categories:[]
}

function xpost (state = postInitialState, action) {
  switch (action.type){
    case GET_POSTS :
      return {
        posts:action.posts,
        postOrderOption:''
      }

    case FILTER_POSTS :
      return state

    case ORDER_POSTS :
      return {
        ...state,
        postOrderOption:action.orderoption
      }

    case ADD_POST :
      return state

    case SCORE_POST :
      return state

    case EDIT_POST :
      return state

    case DELETE_POST :
      return state

    default :
      return state
  }
}

function xcomment (state=commentInitialState, action) {
  switch (action.type){
    case GET_COMMENTS:
      return state

    case FILTER_COMMENTS:
      return state

    case ORDER_COMMENTS:
      return {
        ...state,
        commentOrderOption:action.orderoption
      }

    case ADD_COMMENT:
      return state

    case SCORE_COMMENT:
      return state

    case EDIT_COMMENT:
      return state

    case DELETE_COMMENT:
      return state

    default:
      return state
  }
}

function xcat (state=catInitialState, action) {
  switch (action.type){
    case GET_CATEGORIES:
      return {
        categories:action.categories
      }
    default:
      return state
  }
}


export default combineReducers({
  xpost,
  xcomment,
  xcat,
})
