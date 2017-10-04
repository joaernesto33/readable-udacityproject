import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost, getComments, registerComments } from '../actions'
import * as PostAPI from '../utils/SeverAPI'
import AddIcon from 'react-icons/lib/md/add-circle'
import MinusIcon from 'react-icons/lib/md/remove-circle'



class GeneralPostControls extends Component {


  /*componentDidMount () {
    PostAPI.getPostComments(this.props.postid).then((comments) => {
      let totalComments = []
      totalComments = Object.values(comments)
      this.props.totalCom(this.props.postid, totalComments.length)
    })
  }*/

  /*commentsCount (postid) {
    PostAPI.getPostComments(postid).then((comments) => {
      this.props.detailComments(comments)
    })
  }*/

  /*commentsCount (postid) {
    PostAPI.getPostComments(postid).then((comments) => {
      let totalComments = []
      totalComments = Object.values(comments)
      this.setState({
        sumcomments: totalComments.length
      })
    })
  }*/

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
    console.log(this.props.sum);

    return (
      <pre>
        <mark>Votes {this.props.votes} </mark>
        <button className="icon-btn" onClick={(e)=>this.postVote(this.props.postid, 'upVote')}>
          <i><AddIcon/></i>
        </button>
        <button className="icon-btn" onClick={(e)=>this.postVote(this.props.postid, 'downVote')}>
          <i><MinusIcon/></i>
        </button>

        <em> {this.props.sum} Total comments </em>
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
  let stateposts = state.xpost.posts
  let statecomment = state.xcomment.comments
  let statetotals = []
  statetotals = state.xpost
  return {
    stateposts,
    statecomment,
    statetotals
  }
}

function mapDispatchToProps (dispatch) {
  return {
    detailPost: (idPost) => dispatch(getPost(idPost)),
    detailComments: (data) => dispatch(getComments(data)),
    totalCom: (idPost, length) => dispatch(registerComments(idPost,length))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GeneralPostControls)
