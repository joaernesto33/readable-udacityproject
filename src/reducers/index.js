import { combineReducers } from 'redux'
import {
  GET_POSTS,
  GET_POST,
  FILTER_POSTS,
  GET_FILTERED_POSTS,
  ORDER_POSTS,
  ADD_POST,
  SCORE_POST,
  EDIT_POST,
  DELETE_POST,
  GET_COMMENTS,
  ORDER_COMMENTS,
  ADD_COMMENT,
  SCORE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_CATEGORIES
} from '../actions/index'


let postInitialState = {
  posts:[],
  postOrderOption:'',
  selectedCat: ''
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
        postOrderOption:'',
        selectedCat:''
      }

    case GET_POST :
      return {
        posts:action.post,
        postOrderOption:state.postOrderOption,
        selectedCat:state.selectedCat
      }

    case GET_FILTERED_POSTS :
      return {
        posts:action.posts,
        postOrderOption: state.postOrderOption,
        selectedCat: state.selectedCat
      }

    case FILTER_POSTS :
      return {
        ...state,
        selectedCat:action.filteroption
      }

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
    return {
      comments:action.comments,
      commentOrderOption:'',
    }

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
