import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import LeftOrderOptions from './LeftOrderOptions'
import PostsList from './PostsList'


export default class CategoryView extends Component {
  render () {
    return (
      <div>

        <main className="mdl-layout__content">
        <div className="page-content">
          <h2>This is CategoryView Component</h2>
          <button>
            <Link to = "/postform">Add Post!</Link>
          </button>

          <div className="row">
          <CategoryList/>
          <PostsList/>
          </div>

          <div className="footer">
            <p>Udacity Readable - Post by: Jokin 2017</p>
            <button><Link to = "/">Go to index view</Link></button>
          </div>
        </div>
        </main>

    </div>
    )
  }
}
