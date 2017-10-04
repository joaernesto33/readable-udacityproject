import React, { Component } from 'react'
import GeneralPostControls from './GeneralPostControls'
import { getPosts, getCategories, registerComments } from '../actions/index'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'
import LeftOrderOptions from './LeftOrderOptions'


class PostsList extends Component {
  /*state = {
    sumcomments: 0,
  }

  commentsCount (postid) {
    PostAPI.getPostComments(postid).then((comments) => {
      let totalComments = []
      totalComments = Object.values(comments)
      this.setState({
        sumcomments: totalComments.length
      })
    })
  }*/

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

  /*commentsCount (postid) {

    PostAPI.getPostComments(postid).then((comments) => {
      let totalComments = []
      totalComments = Object.values(comments)
      //this.props.dispatch(registerComments(post.id, totalComments.length))
      return totalComments.length
    })
  }*/



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
          <ol className="product-list">
            {showPosts.map((post,index) => (
              <li key={index} className="product-list-item">
                <div className="product-details">
                Id: {post.id}<br></br>
                TimeStamp: {post.timestamp}<br></br>
                Title: {post.title}<br></br>
                Body: {post.body}<br></br>
                Author: {post.author}<br></br>
                Category: {post.category}<br></br>
                Vote Score: {post.voteScore}<br></br>

                <GeneralPostControls
                  votes={post.voteScore}
                  postid={post.id}
                  sum={post.numOfcomments}
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
