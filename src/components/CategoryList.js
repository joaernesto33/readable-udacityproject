import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterPosts, getFilteredPosts } from '../actions'
import * as PostAPI from '../utils/SeverAPI'

class LeftFilterCategory extends Component {

  handleFilter = (categoryName) => {
    PostAPI.getCategoryPosts(categoryName).then((posts) => {
      this.props.filterCategory(categoryName)
      this.props.updatePosts(posts)
    })

  }

  render () {
    let showCategories = []
    if (this.props.statecats !== undefined)
      showCategories = Object.values(this.props.statecats.categories)

    return (



      <div className="column left">
        <div className="vertical-menu">


          <p>All Categories</p>

          {showCategories.map((category, index) => (
            <div key={index} onClick={(event)=>this.handleFilter(`${category.name}`)}>
              <Link to={`${category.name}`}>
                {category.name}
              </Link>
            </div>
          ))}

          <br></br>
          <br></br>
          <div className="center">Add a new post!</div>
          <div className="open-addform">
            <Link to = "/postform">Add Post</Link>
          </div>

        </div>

    </div>
    )
  }
}

function mapStateToProps (state) {
  let statecats = state.xcat
  return {
    statecats
  }
}

function mapDispatchToProps (dispatch) {
  return {
    filterCategory: (data) => dispatch(filterPosts(data)),
    updatePosts: (data) => dispatch(getFilteredPosts(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftFilterCategory)
