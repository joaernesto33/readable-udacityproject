import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import LeftOrderOptions from './LeftOrderOptions'
import PostsList from './PostsList'
import TopNavBar from './TopNavBar'


export default class CategoryView extends Component {
  render () {
    return (
      <div>
        <TopNavBar/>
        <div className="content">
          <h2>This is CategoryView Component</h2>
          <button>
            <Link to = "/postform">Add Post!</Link>
          </button>
          <PostsList/>
        </div>
        <CategoryList/>
        <br></br>
        <br></br>
        <br></br>
        <LeftOrderOptions/>
        <div className="footer">
          <p>Jokin 2017</p>
          <p><Link to = "/">Go to index view</Link></p>
        </div>
    </div>
    )
  }
}
