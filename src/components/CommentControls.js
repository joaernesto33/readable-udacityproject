import React, { Component } from 'react'
import * as PostAPI from '../utils/SeverAPI'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'
import EditIcon from 'react-icons/lib/md/create'
import RemoveIcon from 'react-icons/lib/md/clear'
import AddIcon from 'react-icons/lib/md/add-circle'
import MinusIcon from 'react-icons/lib/md/remove-circle'

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
          <button  className="icon-btn" onClick={(e)=>this.commentVote(this.props.commentid,'upVote')}>
            <i><AddIcon/></i>
          </button>
          <button className="icon-btn" onClick={(e)=>this.commentVote(this.props.commentid,'downVote')}>
            <i><MinusIcon/></i>
          </button>
          <button className="icon-btn" onClick={()=>this.openEditModal()}>
            <i><EditIcon/></i>
          </button>
          <button className="icon-btn" onClick={(e)=>this.handleRemoveComment(this.props.commentid)}>
            <i><RemoveIcon/></i>
          </button>
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
              <form onSubmit={this.handleUpdateComment} className="create-post-form">
                <div className="create-post-details">
                  <label><b>Comment Id</b></label>
                  <input type="text" id="id" name="id" defaultValue={this.props.commentid}></input>

                  <label><b>Parent Id</b></label>
                  <input type="text" id="pId" name="parentId" value={this.props.parentid}></input>

                  <label><b>Timestamp</b></label>
                  <input type="text" id="timest" name="timestamp" defaultValue={this.props.timestamp}></input>

                  <label><b>Body</b></label>
                  <input type="text" id="pbody" name="body" defaultValue={this.props.body}></input>

                  <label><b>Author</b></label>
                  <input type="text" id="pauthor" name="author" defaultValue={this.props.author}></input>

                  <button className="button"><b>Update!</b></button>
                </div>
              </form>
              <button className="button" onClick={()=>this.closeEditModal()}>Close</button>
            </div>
        </Modal>
      </div>

    )
  }
}

export default CommentControls
