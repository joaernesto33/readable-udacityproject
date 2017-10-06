import React, { Component } from 'react'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'
import * as PostAPI from '../utils/SeverAPI'
import AddCommentIcon from 'react-icons/lib/fa/commenting'
import { getComments } from '../actions'
import { connect } from 'react-redux'


class RelatedComments extends Component {
  state = {
    commentsModalOpen: false,
  }

  openCommentModal = () => {
    this.setState(() => ({
      commentsModalOpen: true,
    }))
  }

  closeCommentModal = () => {
    this.setState(() => ({
      commentsModalOpen: false,
    }))
  }

  handleCommentData = (commentdata) => {
    commentdata.preventDefault()
    const commentbody = serializeForm(commentdata.target, {hash: true})
    PostAPI.addComment(commentbody).then(
      this.setState(() => ({
        commentsModalOpen: false,
      }))
    ).then(
      PostAPI.getPostComments(this.props.postid).then((comments) => {
        this.props.detailComments(comments)
      })
    )
  }

  render () {
    const { commentsModalOpen } = this.state

    return (
      <div>
        <hr width="850"></hr>
        <h3>Related comments</h3>
        <em>{this.props.totalcomments} comments &nbsp;&nbsp;</em>
        <button onClick={()=>this.openCommentModal()}>Add Comment! <AddCommentIcon /> </button>

        <Modal
          overlayClassName='overlay'
          isOpen={commentsModalOpen}
          onRequestClose={this.closeCommentModal}
          contentLabel='Modal'
          >
            <div>
              <h2>Add a comment...</h2>
              <br></br>
              <form onSubmit={this.handleCommentData} className="create-post-form">
                <div className="create-post-details">

                  <input type="text" id="id" name="id" placeholder="Post Id..."></input>
                  <input type="text" id="pId" name="parentId" value={this.props.postid}></input>
                  <input type="hidden" id="timest" name="timestamp" value={Date.now()}></input>
                  <input type="text" id="pbody" name="body" placeholder="Write the body of the post..."></input>
                  <input type="text" id="pauthor" name="author" placeholder="Author's name..."></input>
                  <button className="button">
                    Save
                  </button>
                  &nbsp;&nbsp;&nbsp;<button className="button" onClick={()=>this.closeCommentModal()}>Close</button>
                </div>
              </form>

            </div>
          </Modal>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    detailComments: (data) => dispatch(getComments(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RelatedComments)
