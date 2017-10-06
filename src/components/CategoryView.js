import React, { Component } from 'react'
import RightDetailsOptions from './RightDetailsOptions'
import LeftOrderOptions from './LeftOrderOptions'
import PostsListCat from './PostsListCat'


export default class CategoryView extends Component {
  render () {
    return (
      <div>

        <div className="list-posts-title">
          <h1>Readable Project</h1>
        </div>

        <LeftOrderOptions/>

        <div className="row">
        <RightDetailsOptions/>
        <PostsListCat/>
        </div>

        <div className="footer">
            <p>Udacity Readable - Posted by: &copy;Jokin 2017</p>
            <p>Contact information: joaernesto33@gmail.com.</p>
        </div>

    </div>
    )
  }
}
