import React, { Component } from 'react'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'
import * as PostAPI from '../utils/SeverAPI'

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
    PostAPI.addComment(commentbody).then(console.log('comment added'))
  }

  render () {
    const { commentsModalOpen } = this.state

    return (
      <div>
        <hr width="850"></hr>
        <h3>Related comments</h3>
        <em># comments</em>
        <button onClick={()=>this.openCommentModal()}>Add Comment!</button>

        <Modal
          overlayClassName='overlay'
          isOpen={commentsModalOpen}
          onRequestClose={this.closeCommentModal}
          contentLabel='Modal'
          >
            <div>
              <h2>Add a comment...</h2>
              <br></br>
              <form onSubmit={this.handleCommentData}>
                <label>Comment Id</label>
                <input type="text" id="id" name="id" placeholder="Post Id..."></input>

                <label>Parent Id</label>
                <input type="text" id="pId" name="parentId" placeholder="Parent Id..."></input>

                <label>Timestamp</label>
                <input type="text" id="timest" name="timestamp" placeholder="Timestamp..."></input>

                <label>Body</label>
                <input type="text" id="pbody" name="body" placeholder="Write the body of the post..."></input>

                <label>Author</label>
                <input type="text" id="pauthor" name="author" placeholder="Author's name..."></input>
                <button>
                  Save
                </button>

              </form>
              <button onClick={()=>this.closeCommentModal()}>Close modal</button>
            </div>
          </Modal>
      </div>
    )
  }
}

export default RelatedComments
