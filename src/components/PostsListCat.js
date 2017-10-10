import React, { Component } from 'react'
import GeneralPostControls from './GeneralPostControls'
import { connect } from 'react-redux'


class PostsListCat extends Component {

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

          <h3>{this.props.category.toUpperCase()} CATEGORY POSTS</h3>

          <ol className="post-list">
            {showPosts.map((post,index) => (
              <li key={index} className="post-list-item">
                <div className="post-details">
                Title: {post.title}<br></br>
                Author: {post.author}<br></br>
                Current Score: {post.voteScore}<br></br>
                Body: {post.body}<br></br>
                Category: {post.category}<br></br>
                <hr width="100%"></hr>
                <GeneralPostControls
                  votes={post.voteScore}
                  postid={post.id}
                  sumcomments={post.numOfcomments}
                  category={post.category}
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


export default connect(mapStateToProps)(PostsListCat)
