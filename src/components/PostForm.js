import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as PostAPI from '../utils/SeverAPI'
import { getPosts } from '../actions'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'


class PostForm extends Component {
  handlePostData = (postdata) => {
    postdata.preventDefault()
    const values = serializeForm(postdata.target, { hash: true})
    PostAPI.addPost(values).then((posts) => {
      this.props.createPost(posts)
    })
  }
  render () {
    return (
      <div>
        <h2>Write a Post!</h2>
        <br></br>
        <br></br>
        <form onSubmit={this.handlePostData}>
          <label>Id</label>
          <input type="text" id="pid" name="id" placeholder="Post Id..."></input>

          <label>TimeStamp</label>
          <input type="text" id="timest" name="timestamp" placeholder="Timestamp..."></input>

          <label>Title</label>
          <input type="text" id="ptitle" name="title" placeholder="Post title..."></input>

          <label>Body</label>
          <input type="text" id="pbody" name="body" placeholder="Write the body of the post..."></input>

          <label>Author</label>
          <input type="text" id="pauthor" name="author" placeholder="Author's name..."></input>

          <label>Category</label>
          <input type="text" id="pcat" name="category" placeholder="Category..."></input>
          <button>
            Save
          </button>
        </form>
        <button className="button1">
          <Link to = "/">Cancel</Link>
        </button>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    createPost: (data) => dispatch(getPosts(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)
