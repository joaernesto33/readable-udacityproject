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


    case ORDER_POSTS :


    case ADD_POST :


    case SCORE_POST :


    case EDIT_POST :


    case DELETE_POST :


    default :
      return state
  }
}

/*function xcomment (state = {}, action) {
  return state
}

export default combineReducers({
  xpost,
  xcomment,
})*/
export default xpost
