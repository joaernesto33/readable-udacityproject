import React, { Component } from 'react'
import RightDetailsOptions from './RightDetailsOptions'
import { connect } from 'react-redux'
import CommentsList from './CommentsList'
import PostDetailsControls from './PostDetailsControls'
import RelatedComments from './RelatedComments'


class PostDetails extends Component {
  render () {
    let { statepost } = this.props
    return (
      <div>
        <h1>This is PostDetails component</h1>
        <RightDetailsOptions/>
        <div key={statepost.id}>
          Id: {statepost.id}<br></br>
          TimeStamp: {statepost.timestamp}<br></br>
          Title: {statepost.title}<br></br>
          Body: {statepost.body}<br></br>
          Author: {statepost.author}<br></br>
          Category: {statepost.category}<br></br>
          Vote Score: {statepost.voteScore}<br></br>
        <PostDetailsControls postid={statepost.id}/>
        </div>
        <div>
          <RelatedComments/>
        </div>
        <h2>Related comments</h2>
        <CommentsList />
      </div>
    )
  }
}

function mapStateToProps (state) {
  let statepost = state.xpost.posts
  return{
    statepost
  }
}
export default connect(mapStateToProps)(PostDetails)
