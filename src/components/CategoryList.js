import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterPosts } from '../actions'

class LeftFilterCategory extends Component {
  render () {
    let showCategories = []
    if (this.props.statecats !== undefined)
      showCategories = Object.values(this.props.statecats.categories)

    return (
      <div className="sidenav">
        <Link to='/'>
          <label>All Categories</label>
        </Link>
                
        {showCategories.map((category) => (
          <div key={category.name}>
            <Link to='categoryview'>
              <label onClick={(e)=>this.props.filterCategory(`${category.name}`)}>
                  {category.name}
              </label>
            </Link>
          </div>
        ))}
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
    filterCategory: (data) => dispatch(filterPosts(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftFilterCategory)
