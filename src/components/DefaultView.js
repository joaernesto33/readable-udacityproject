import React, { Component } from 'react'
import PostsList from './PostsList'
import CategoryList from './CategoryList'
import LeftOrderOptions from './LeftOrderOptions'




export default class DefaultView extends Component {

  render () {

    return (
      <div>
        <div className="list-posts-title">
          <h1>Readable Project</h1>
        </div>

        <LeftOrderOptions/>

        <div className="row">
        <CategoryList/>
        <PostsList/>
        </div>

        <div className="footer">
            <p>Udacity Readable - Posted by: &copy;Jokin 2017</p>
            <p>Contact information: joaernesto33@gmail.com.</p>
        </div>

    </div>
    )
  }
}
