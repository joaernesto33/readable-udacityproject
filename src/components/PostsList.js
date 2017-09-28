import React, { Component } from 'react'
import GeneralPostControls from './GeneralPostControls'
import { getPosts, getCategories } from '../actions/index'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'


class PostsList extends Component {
  componentDidMount () {
    PostAPI.getPosts().then((posts) => {
      this.props.dispatch(getPosts(posts))
    })

    PostAPI.getCategories().then((categories) => {
      this.props.dispatch(getCategories(categories))
    })
  }

  render() {
    let showPosts = []
    if (this.props.stateposts !== undefined)
      showPosts = Object.values(this.props.stateposts.posts)

    let orderoption = this.props.stateposts.postOrderOption
    console.log(showPosts);
    //let filteroption = this.props.stateposts.selectedCat

    /*if (filteroption !== '') {
      let filterArray = showPosts.filter((post)=>post.category===filteroption)
      showPosts = filterArray
    }*/

    if (orderoption === 'voteScore') {
      showPosts.sort(function(a,b){
        return a.voteScore - b.voteScore
      })
    }

    if (orderoption === 'timeStamp') {
      showPosts.sort(function(a,b){
        return a.timestamp - b.timestamp
      })
    }

    if (orderoption === 'alfabethical') {
      showPosts.sort(function(a,b){
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    }

    return(
      <div>
        <p>
          Epa!!
        </p>
        {showPosts.map((post) => (
          <div key={post.id}>
            Id: {post.id}<br></br>
            TimeStamp: {post.timestamp}<br></br>
            Title: {post.title}<br></br>
            Body: {post.body}<br></br>
            Author: {post.author}<br></br>
            Category: {post.category}<br></br>
            Vote Score: {post.voteScore}<br></br>
            <GeneralPostControls votes={post.voteScore} postid={post.id}/>
          </div>

        ))}

      </div>
    )
  }
}

function mapStateToProps (state) {
  let stateposts = state.xpost
  return {
    stateposts
  }
}
export default connect(mapStateToProps)(PostsList)
