import React, { Component } from 'react'
import GeneralPostControls from './GeneralPostControls'
import { getPosts, getCategories, registerComments } from '../actions/index'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'


class PostsList extends Component {

  componentDidMount () {
    PostAPI.getPosts().then((posts) => {
      this.props.dispatch(getPosts(posts))

      let totalPosts = []
      totalPosts = Object.values(posts)
      totalPosts.forEach( post => {
        PostAPI.getPostComments(post.id).then((comments) => {
          let totalComments = []
          totalComments = Object.values(comments)
          this.props.dispatch(registerComments(post.id, totalComments.length))
        })
      })

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
      <div className="column right">

        <div className="maincontent">
          <ol className="post-list">
            {showPosts.map((post,index) => (
              <li key={index} className="post-list-item">
                <div className="post-details">
                Title: {post.title}<br></br>
                Author: {post.author}<br></br>
                Current Score: {post.voteScore} votes<br></br>
                Body: {post.body}<br></br>
                Category: {post.category}<br></br>
                <br></br>
                Id: {post.id}<br></br>
                TimeStamp: {post.timestamp}<br></br>
                <hr width="100%"></hr>
                <GeneralPostControls
                  votes={post.voteScore}
                  postid={post.id}
                  sumcomments={post.numOfcomments}
                  category={post.category}
                  history={this.props.history}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>

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
