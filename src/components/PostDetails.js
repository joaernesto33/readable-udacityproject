import React, { Component } from 'react'
import RightDetailsOptions from './RightDetailsOptions'
import { connect } from 'react-redux'
import CommentsList from './CommentsList'
import PostDetailsControls from './PostDetailsControls'
import RelatedComments from './RelatedComments'


class PostDetails extends Component {
  render () {
    let totalComments = []
    let { statepost } = this.props
    totalComments = Object.values(this.props.statecomment)
    return (
      <div>
        <div className="list-posts-title">
          <h1>Readable Project</h1>
        </div>

        <h2>Post Details Summary</h2>
        <div className="row">
          <RightDetailsOptions/>
          <div className="column right">
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
              <RelatedComments totalcomments={totalComments.length} postid={statepost.id}/>
            </div>
            <h3>Comments:</h3>
            <CommentsList/>
          </div>
        </div>

        <div className="footer">
          <footer>
            <p>Udacity Readable - Post by: Jokin 2017</p>
          </footer>
        </div>
    </div>
    )
  }
}

function mapStateToProps (state) {
  let statepost = state.xpost.posts
  let statecomment = state.xcomment.comments
  return{
    statepost,
    statecomment
  }
}
export default connect(mapStateToProps)(PostDetails)
