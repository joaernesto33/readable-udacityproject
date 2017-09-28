import React, { Component } from 'react'

class CommentControls extends Component {
  render() {
    return (
      <font>
        <mark>{this.props.commentvotes} Votes</mark>
        <button>Add</button>
        <button>Remove</button>
      </font>
    )
  }
}

export default CommentControls
