import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostForm extends Component {
  render () {
    return (
      <div>
        <h2>Write a Post!</h2>
        <br></br>
        <br></br>
        <form>
          <label>Id</label>
          <input type="text" id="pid" name="postid" placeholder="Post Id..."></input>

          <label>Title</label>
          <input type="text" id="ptitle" name="posttitle" placeholder="Post title..."></input>

          <label>Body</label>
          <input type="text" id="pbody" name="postbody" placeholder="Write the body of the post..."></input>

          <label>Author</label>
          <input type="text" id="pauthor" name="postauthor" placeholder="Author's name..."></input>

          <label>Category</label>
          <input type="text" id="pcat" name="postcat" placeholder="Category..."></input>

        </form>
        <button className="button1">
          <Link to = "/">Cancel</Link>
        </button>
        <button className="button1">
          <Link to = "/">Save</Link>
        </button>
      </div>
    )
  }
}
