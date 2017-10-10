import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { getPost } from '../actions'


class PostFormUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
        id:this.props.statepost.id,
        timestamp:this.props.statepost.timestamp,
        title: this.props.statepost.title,
        body: this.props.statepost.body,
        category:this.props.statepost.category,
        author:this.props.statepost.author
      }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    PostAPI.getPost(this.props.match.params.post_id).then((post) => {
      this.props.detailPost(post)
      this.setState(() => ({
          id:this.props.statepost.id,
          timestamp:this.props.statepost.timestamp,
          title: this.props.statepost.title,
          body: this.props.statepost.body,
          category:this.props.statepost.category,
          author:this.props.statepost.author
        }))
    })
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState(() => ({
      [name]: value
    }))
  }

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
            <input type="text" id="pid" name="id" value={this.state.id} onChange={this.handleInputChange}></input><br></br>

            <label><b>TimeStamp:</b></label>
            <input type="text" id="pid" name="timestamp" value={this.state.timestamp} readOnly></input>

            <label><b>Title:</b></label>
            <input type="text" id="ptitle" name="title" value={this.state.title} onChange={this.handleInputChange}></input>

            <label><b>Body:</b></label>
            <input type="text" id="pbody" name="body" value={this.state.body} onChange={this.handleInputChange}></input>

            <label><b>Author:</b></label>
            <input type="text" id="pauthor" name="author" value={this.state.author} onChange={this.handleInputChange}></input>
            <div>
              <b>Category:</b> &nbsp;&nbsp;
              <select value={this.state.category} name="category" onChange={this.handleInputChange}>
                <option value="react">react</option>
                <option value="redux">redux</option>
                <option value="udacity">udacity</option>
              </select>
            </div>

            <div>
              <br></br>
              <hr width="100%"></hr>
              <button className="button">
                Update
              </button>&nbsp;&nbsp;&nbsp;

              <Link to = "/">
              <button className="button">
                Cancel
              </button>
              </Link>
            </div>
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
    detailPost: (idPost) => dispatch(getPost(idPost))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostFormUpdate)
