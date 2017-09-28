import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentControls from './CommentControls'

class CommentsList extends Component {
  render () {
    console.log(this.props.statecomments)
    let showComments = []
    showComments = this.props.statecomments
    return (
      <div>
        Comments Here!
        {showComments.map((comment) => (
          <p key={comment.id}>
            Author: {comment.author}<br></br>
            Body: {comment.body}<br></br>
            Comment Vote Score: {comment.voteScore}<br></br>
            <CommentControls commentvotes={comment.voteScore}/>
          </p>
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
