import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost, getComments } from '../actions'
import * as PostAPI from '../utils/SeverAPI'

class GeneralPostControls extends Component {

  showingDetails = (idPosting) => {
    PostAPI.getPost(idPosting).then((post) => {
      this.props.detailPost(post)
      PostAPI.getPostComments(post.id).then((comments) => {
        this.props.detailComments(comments)
      })
    })
  }

  render () {
    return (
      <pre>
        <mark>Votes {this.props.votes} </mark>
        <em>Total comments </em>
        <Link to = "/postdetail">
          <label onClick={(event)=>this.showingDetails(this.props.postid)}>
            Show post details
          </label>
        </Link>
      </pre>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    detailPost: (idPost) => dispatch(getPost(idPost)),
    detailComments: (data) => dispatch(getComments(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GeneralPostControls)
