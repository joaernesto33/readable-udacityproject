import React, { Component } from 'react'
import * as PostAPI from '../utils/SeverAPI'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'

class CommentControls extends Component {
  state ={
    editModalOpen: false,
  }

  openEditModal = () => {
    this.setState(() => ({
      editModalOpen: true,
    }))
  }

  closeEditModal = ()  => {
    this.setState(() => ({
      editModalOpen: false,
    }))
  }

  handleRemoveComment = (idComment) => {
    PostAPI.deleteComment(idComment)
  }

  handleUpdateComment = (commentdata) => {
    commentdata.preventDefault()
    const commentbody = serializeForm(commentdata.target, { hash:true })
    PostAPI.updateComment(this.props.commentid, commentbody)
  }

  commentVote = (idcomment, voteoption) => {
    PostAPI.votingComment(idcomment, voteoption)
  }


  render() {
    const { editModalOpen } = this.state

    return (
      <div>
        <font>
          <mark>{this.props.commentvotes} Votes</mark>
          <button onClick={(e)=>this.commentVote(this.props.commentid,'upVote')}>Up</button>
          <button onClick={(e)=>this.commentVote(this.props.commentid,'downVote')}>Down</button>
          <button onClick={()=>this.openEditModal()}>Edit</button>
          <button onClick={(e)=>this.handleRemoveComment(this.props.commentid)}>Remove</button>
        </font>

        <Modal
          overlayClassName='overlay'
          isOpen={editModalOpen}
          onRequestClose={this.closeEditModal}
          contentLabel='Modal'
        >
            <div>
              <h2>Update the comment...</h2>
              <br></br>
              <form onSubmit={this.handleUpdateComment}>
                <label>Comment Id</label>
                <input type="text" id="id" name="id" defaultValue={this.props.commentid}></input>

                <label>Parent Id</label>
                <input type="text" id="pId" name="parentId" value={this.props.parentid}></input>

                <label>Timestamp</label>
                <input type="text" id="timest" name="timestamp" defaultValue={this.props.timestamp}></input>

                <label>Body</label>
                <input type="text" id="pbody" name="body" defaultValue={this.props.body}></input>

                <label>Author</label>
                <input type="text" id="pauthor" name="author" defaultValue={this.props.author}></input>

                <button>Update!</button>

              </form>
              <button onClick={()=>this.closeEditModal()}>Close modal</button>
            </div>
        </Modal>
      </div>

    )
  }
}

export default CommentControls
