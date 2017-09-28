import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'

class PostDetailsControls extends Component {
  handleRemove = (idPost) => {
    PostAPI.deletePost(idPost)
  }

  render () {
    return (
      <div>
        <Link to = "/postupdate">
          <button>Update Post</button>
        </Link>
        <button onClick={(e)=>this.handleRemove(this.props.statepost.id)}>Remove Post</button>
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

export default connect(mapStateToProps)(PostDetailsControls)
