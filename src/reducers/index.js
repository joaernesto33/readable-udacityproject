import { combineReducers } from 'redux'
import {
  GET_POSTS,
  GET_POST,
  FILTER_POSTS,
  GET_FILTERED_POSTS,
  ORDER_POSTS,
  GET_COMMENTS,
  ORDER_COMMENTS,
  GET_CATEGORIES,
  REGISTER_TOTAL_COMMENTS
} from '../actions/index'


let postInitialState = {
  posts:[],
  postOrderOption:'',
  selectedCat: '',
  //numofcomments:0,
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

    case REGISTER_TOTAL_COMMENTS :
      const newstate = {...state}

      newstate.posts.forEach( post => {
        console.log(post.id === action.postid);
        if( post.id === action.postid){
          post.numOfcomments = action.totalcomments
        }
      })

      return {
        ...newstate,
      }


      /*const newstate = {...state}
      console.log(newstate);
      let z = newstate.posts.filter( (x) => {
        console.log(x)
        console.log(action.postid)
        console.log(x.id===action.postid)
        return x.id===action.postid
      }).map(
        (e) => {const i ={totalcomments: action.totalcomments}
        return i
      }
      )

      console.log(z);

      return z*/


    /*  return {
        ...state,
        ...state, ...action.totalcomments,
        numOfcomments: action.totalcomments
      }*/



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
