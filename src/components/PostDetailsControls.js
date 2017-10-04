import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'
import EditIcon from 'react-icons/lib/md/create'
import RemoveIcon from 'react-icons/lib/md/clear'

class PostDetailsControls extends Component {
  handleRemove = (idPost) => {
    PostAPI.deletePost(idPost)
  }

  render () {
    return (
      <div>
        <Link to = "/postupdate">
          <button className="icon-btn">
            <i><EditIcon/></i>
          </button>
        </Link>
        <button className="icon-btn" onClick={(e)=>this.handleRemove(this.props.statepost.id)}>
          <i><RemoveIcon/></i>
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

export default connect(mapStateToProps)(PostDetailsControls)
