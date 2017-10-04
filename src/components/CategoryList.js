import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterPosts, getFilteredPosts } from '../actions'
import * as PostAPI from '../utils/SeverAPI'

class LeftFilterCategory extends Component {

  handleFilter = (categoryName) => {
    PostAPI.getCategoryPosts(categoryName).then((posts) => {
      this.props.updatePosts(posts)
      this.props.filterCategory(categoryName)
    })

  }

  render () {
    let showCategories = []
    if (this.props.statecats !== undefined)
      showCategories = Object.values(this.props.statecats.categories)

    return (



      <div className="column left">
        <div className="vertical-menu">

          <Link to='/'>
            <label>All Categories</label>
          </Link>
          {showCategories.map((category) => (
            <div key={category.name} onClick={(event)=>this.handleFilter(`${category.name}`)}>
              <Link to='categoryview'>
                <label >
                    {category.name}
                </label>
              </Link>
            </div>
          ))}
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
