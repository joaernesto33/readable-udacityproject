import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentControls from './CommentControls'

class CommentsList extends Component {
  render () {
    let showComments = []
    showComments = this.props.statecomments
    return (
      <div>
        {showComments.map((comment) => (
          <div key={comment.id}>
            Body: {comment.body}<br></br>
            Author: {comment.author}<br></br>
            Current Score: {comment.voteScore}<br></br>
          
            <CommentControls
              commentid={comment.id}
              parentid={comment.parentId}
              timestamp={comment.timestamp}
              body={comment.body}
              author={comment.author}
              commentvotes={comment.voteScore}
            /><br></br>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps (state) {
  let statecomments = state.xcomment.comments
  return {statecomments}
}

export default connect(mapStateToProps)(CommentsList)
