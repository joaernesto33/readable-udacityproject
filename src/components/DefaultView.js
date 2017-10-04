import React, { Component } from 'react'
import PostsList from './PostsList'
import CategoryList from './CategoryList'
import { Link } from 'react-router-dom'
import LeftOrderOptions from './LeftOrderOptions'




export default class DefaultView extends Component {

  render () {

    return (
      <div>
        <div className="list-posts-title">
          <h1>Readable Project</h1>
        </div>

        <div className="open-addform">
          <Link to = "/postform">Add Post</Link>
        </div>

        <h2>This is DefaultView Component</h2>
        <LeftOrderOptions/>

        <div className="row">
        <CategoryList/>
        <PostsList/>
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
