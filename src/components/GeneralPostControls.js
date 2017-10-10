import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost, getComments, getPosts, registerComments } from '../actions'
import * as PostAPI from '../utils/SeverAPI'
import AddIcon from 'react-icons/lib/md/add-circle'
import MinusIcon from 'react-icons/lib/md/remove-circle'
import EditIcon from 'react-icons/lib/md/create'
import RemoveIcon from 'react-icons/lib/md/clear'



class GeneralPostControls extends Component {
  state = {
    redirect: false,
    post: ''
  }

  showingDetails = (idPosting) => {
    PostAPI.getPost(idPosting).then((post) => {
      this.props.detailPost(post)
      PostAPI.getPostComments(post.id).then((comments) => {
        this.props.detailComments(comments)
      })
    })
  }

  showingUpdate = (idPosting) => {
    PostAPI.getPost(idPosting).then((post) => {
      this.props.detailPost(post)
      this.setState({
        redirect: true,
        post: post.id
      })
    })
  }

  votingAction = () => {
    PostAPI.getPosts().then((posts) => {
      this.props.getAllPosts(posts)

      let totalPosts = []
      totalPosts = Object.values(posts)
      totalPosts.forEach( post => {
        PostAPI.getPostComments(post.id).then((comments) => {
          let totalComments = []
          totalComments = Object.values(comments)
          this.props.getTotalComments(post.id, totalComments.length)
        })
      })

    })
  }

  postVote = (idPost, voteOption) => {
    PostAPI.votingPost(idPost, voteOption).then(
      this.votingAction()
    )
  }

  handleRemove = (idPost) => {
    let r = window.confirm("Are you sure?")
    if (r) {
      PostAPI.deletePost(idPost).then(
        PostAPI.getPosts().then((posts) => {
          this.props.getAllPosts(posts)
        })
      )
    }
  }

  render () {

    if (this.state.redirect) {
      return <Redirect to={`postupdate/${this.state.post}`}/>
    }
    return (
      <pre>
        <mark> Votes:<b> {this.props.votes} </b></mark>
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


        <button className="icon-btn" onClick={(e)=>this.showingUpdate(this.props.postid)}>
          <i><EditIcon/></i>
        </button>


        <button className="icon-btn" onClick={(e)=>this.handleRemove(this.props.postid)}>
          <i><RemoveIcon/></i>
        </button>
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
    detailComments: (data) => dispatch(getComments(data)),
    getAllPosts: (posts) => dispatch(getPosts(posts)),
    getTotalComments: (postid, totalComments)=>dispatch(registerComments(postid, totalComments))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GeneralPostControls)
