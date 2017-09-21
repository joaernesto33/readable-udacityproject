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
  DELETE_COMMENT
} from '../actions/index'

function xpost (state={}, action) {
  switch (action.type){
    case GET_POSTS :
      return action.posts

    case FILTER_POSTS :
      return state

    case ORDER_POSTS :
      return state

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

function xcomment (state={}, action) {
  switch (action.type){
    case GET_COMMENTS:
      return state

    case FILTER_COMMENTS:
      return state

    case ORDER_COMMENTS:
      return state

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

export default combineReducers({
  xpost,
  xcomment,
})
