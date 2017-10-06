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
      this.props.history.push("/")

    })
  }
  render () {
    return (
      <div>

        <div className="list-posts-title">
          <h1>Readable Project</h1>
        </div>
        <br></br>
        <br></br>

        <h2>Write a Post!</h2>
        <br></br>
        <br></br>
        <form onSubmit={this.handlePostData} className="create-post-form">
          <div className="create-post-details">

            <input type="text" id="pid" name="id" placeholder="Id..."></input>
            <input type="text" id="pid" name="timestamp" value={Date.now()}></input>
            <input type="text" id="ptitle" name="title" placeholder="Title..."></input>
            <input type="text" id="pbody" name="body" placeholder="Write a body..."></input>
            <input type="text" id="pauthor" name="author" placeholder="Author..."></input>
            <input type="text" id="pcat" name="category" placeholder="Category..."></input>

            <button className="button">
              Save
            </button>

            <Link to = "/">
            &nbsp;&nbsp;&nbsp;<button className="button">
              Cancel
            </button>
            </Link>

          </div>
        </form>



        <br></br>
        <br></br>
        <div className="footer">
            <p>Udacity Readable - Posted by: &copy;Jokin 2017</p>
            <p>Contact information: joaernesto33@gmail.com.</p>
        </div>

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
