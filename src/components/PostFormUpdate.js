import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'


class PostFormUpdate extends Component {

  handlePostData = (postdata) => {
    postdata.preventDefault()
    const values = serializeForm(postdata.target, { hash: true})
    PostAPI.updatePost(this.props.statepost.id, values)
  }
  render () {
    return (
      <div>
        <h2>Update the Post!</h2>
        <br></br>
        <br></br>
        <form onSubmit={this.handlePostData} className="create-post-form">
          <div className="create-post-details">

          <label><b>Id:</b></label>
            <input type="text" id="pid" name="id" value={this.props.statepost.id}></input><br></br>

            <label><b>TimeStamp</b></label>
            <input type="text" id="pid" name="timestamp" defaultValue={this.props.statepost.timestamp}></input>

            <label><b>Title</b></label>
            <input type="text" id="ptitle" name="title" defaultValue={this.props.statepost.title}></input>

            <label><b>Body</b></label>
            <input type="text" id="pbody" name="body" defaultValue={this.props.statepost.body}></input>

            <label><b>Author</b></label>
            <input type="text" id="pauthor" name="author" defaultValue={this.props.statepost.author}></input>

            <label><b>Category</b></label>
            <input type="text" id="pcat" name="category" defaultValue={this.props.statepost.category}></input>
            <button className="button">
              Update
            </button>
          </div>
        </form>
        <button className="button">
          <Link to = "/">Cancel</Link>
        </button>

      </div>
    )
  }
}

function mapStateToProps (state) {
  let statepost = state.xpost.posts
  return {
    statepost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createPost: (data) => dispatch()
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostFormUpdate)
