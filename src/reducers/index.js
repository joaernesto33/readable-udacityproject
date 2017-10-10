import { combineReducers } from 'redux'
import {
  GET_POSTS,
  GET_POST,
  FILTER_POSTS,
  GET_FILTERED_POSTS,
  ORDER_POSTS,
  GET_COMMENTS,
  //ORDER_COMMENTS,
  GET_CATEGORIES,
  REGISTER_TOTAL_COMMENTS
} from '../actions/index'


let postInitialState = {
  posts:[],
  postOrderOption:'',
  selectedCat: '',
}

let commentInitialState = {
  comments:[],
  commentOrderOption:'',
}

let catInitialState = {
  categories:[]
}

function xpost (state = postInitialState, action) {
  switch (action.type){
    case GET_POSTS :
      return {
        posts:action.posts,
        postOrderOption:'timeStamp',
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

    case REGISTER_TOTAL_COMMENTS :
      const newstate = {...state}

      newstate.posts.forEach( post => {
        if( post.id === action.postid){
          post.numOfcomments = action.totalcomments
        }
      })

      return {
        ...newstate,
      }

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

    /*case ORDER_COMMENTS:
      return {
        ...state,
        commentOrderOption:action.orderoption
      }*/

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
