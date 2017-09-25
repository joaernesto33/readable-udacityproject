import React, { Component } from 'react'
import PostsList from './PostsList'
import LeftFilterCategory from './LeftFilterCategory'
import LeftOrderOptions from './LeftOrderOptions'
import TopNavBar from './TopNavBar'
import { Link } from 'react-router-dom'

export default class DefaultView extends Component {
  render () {
    return (
      <div>
        <TopNavBar/>
        <div className="content">
          <h2>This is DefaultView Component</h2>
          <button>
            <Link to = "/postform">Add Post!</Link>
          </button>
          <PostsList/>
        </div>
        <LeftFilterCategory/>
        <br></br>
        <br></br>
        <br></br>
        <LeftOrderOptions/>
        <div className="footer">
          <p>Jokin 2017</p>
        </div>
    </div>
    )
  }
}
