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
        <form onSubmit={this.handlePostData} className="create-product-form">
          <div className="create-products-details">

            <input type="text" id="pid" name="id" placeholder="Id..."></input>
            <input type="text" id="pid" name="timestamp" placeholder="timestamp"></input>
            <input type="text" id="ptitle" name="title" placeholder="Title..."></input>
            <input type="text" id="pbody" name="body" placeholder="Write a body..."></input>
            <input type="text" id="pauthor" name="author" placeholder="Author..."></input>
            <input type="text" id="pcat" name="category" placeholder="Category..."></input>

            <button>
              Save Post!
            </button>
          </div>
        </form>

        <button >
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
