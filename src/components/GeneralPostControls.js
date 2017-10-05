import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost, getComments } from '../actions'
import * as PostAPI from '../utils/SeverAPI'
import AddIcon from 'react-icons/lib/md/add-circle'
import MinusIcon from 'react-icons/lib/md/remove-circle'



class GeneralPostControls extends Component {

  showingDetails = (idPosting) => {
    PostAPI.getPost(idPosting).then((post) => {
      this.props.detailPost(post)
      PostAPI.getPostComments(post.id).then((comments) => {
        this.props.detailComments(comments)
      })
    })
  }

  postVote = (idPost, voteOption) => {
    PostAPI.votingPost(idPost, voteOption)
  }

  render () {


    return (
      <pre>
        <mark>Votes {this.props.votes} </mark>
        <button className="icon-btn" onClick={(e)=>this.postVote(this.props.postid, 'upVote')}>
          <i><AddIcon/></i>
        </button>
        <button className="icon-btn" onClick={(e)=>this.postVote(this.props.postid, 'downVote')}>
          <i><MinusIcon/></i>
        </button>

        <em> {this.props.sumcomments} Total comments </em>
        <Link to = {`${this.props.category}/${this.props.postid}`}>
          <label onClick={(event)=>this.showingDetails(this.props.postid)}>
            Show post details
          </label>
        </Link>
      </pre>
    )
  }
}

function mapStateToProps (state) {
  let stateposts = state.xpost.posts
  return {
    stateposts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    detailPost: (idPost) => dispatch(getPost(idPost)),
    detailComments: (data) => dispatch(getComments(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GeneralPostControls)
