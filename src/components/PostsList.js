import React, { Component } from 'react'
import GeneralPostControls from './GeneralPostControls'
import { getPosts } from '../actions/index'
import * as PostAPI from '../utils/SeverAPI'
import { connect } from 'react-redux'


class PostsList extends Component {
  componentDidMount () {
    PostAPI.getPosts().then((posts) => {
      this.props.dispatch(getPosts(posts))
    })
  }

  render() {
    let showPosts = []
    if (this.props.stateposts !== undefined)
      showPosts = Object.values(this.props.stateposts.xpost)

    return(
      <div>
        <p>
          Epa!!
        </p>
        {showPosts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
        <GeneralPostControls/>
      </div>
    )
  }
}

function mapStateToProps (stateposts) {
  return {
    stateposts
  }
}
export default connect(mapStateToProps)(PostsList)
