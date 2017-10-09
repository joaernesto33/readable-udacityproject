import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'


class PostFormUpdate extends Component {

  handlePostData = (postdata) => {
    postdata.preventDefault()
    const values = serializeForm(postdata.target, { hash: true})
    PostAPI.updatePost(this.props.statepost.id, values).then(
      this.props.history.push("/")
    )
  }
  render () {
    return (
      <div>

        <div className="list-posts-title">
          <h1>Readable Project</h1>
        </div>
        <br></br>
        <br></br>

        <h2>Update the Post...</h2>
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

            <select defaultValue={this.props.statepost.category}>
              <option value="react">react</option>
              <option value="redux">redux</option>
              <option value="udacity">udacity</option>
            </select>

            <button className="button">
              Update
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
