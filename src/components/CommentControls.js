import React, { Component } from 'react'
import * as PostAPI from '../utils/SeverAPI'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'
import EditIcon from 'react-icons/lib/md/create'
import RemoveIcon from 'react-icons/lib/md/clear'
import AddIcon from 'react-icons/lib/md/add-circle'
import MinusIcon from 'react-icons/lib/md/remove-circle'
import { getComments } from '../actions'
import { connect } from 'react-redux'

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
    let r = window.confirm("Are you sure?")
    if (r) {
      PostAPI.deleteComment(idComment).then(
        this.commentsHandler()
      )
    }
  }

  handleUpdateComment = (commentdata) => {
    commentdata.preventDefault()
    const commentbody = serializeForm(commentdata.target, { hash:true })
    PostAPI.updateComment(this.props.commentid, commentbody).then(
      this.setState(() => ({
        editModalOpen: false,
      }))
    ).then(
      this.commentsHandler()
    )
  }

  commentsHandler = () => {
    PostAPI.getPostComments(this.props.parentid).then((comments) => {
      this.props.detailComments(comments)
    })
  }

  commentVote = (idcomment, voteoption) => {
    PostAPI.votingComment(idcomment, voteoption).then(
      this.commentsHandler()
    )
  }


  render() {
    const { editModalOpen } = this.state

    return (
      <div>
        <pre>
          <mark> Votes:<b> {this.props.commentvotes} </b></mark>
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
        </pre>


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

                  <input type="hidden" id="pId" name="parentId" value={this.props.parentid}></input>
                  <input type="hidden" id="timest" name="timestamp" defaultValue={this.props.timestamp}></input>

                  <label><b>Body</b></label>
                  <input type="text" id="pbody" name="body" defaultValue={this.props.body}></input>

                  <label><b>Author</b></label>
                  <input type="text" id="pauthor" name="author" defaultValue={this.props.author}></input>

                  <button className="button"><b>Update!</b></button>

                  &nbsp;&nbsp;&nbsp;<button className="button" onClick={()=>this.closeEditModal()}>Close</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(CommentControls)
