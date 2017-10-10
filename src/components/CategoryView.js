import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterPosts, getFilteredPosts } from '../actions'
import RightDetailsOptions from './RightDetailsOptions'
import LeftOrderOptions from './LeftOrderOptions'
import PostsListCat from './PostsListCat'
import * as PostAPI from '../utils/SeverAPI'


class CategoryView extends Component {

  componentDidMount() {
    PostAPI.getCategoryPosts(this.props.match.params.category).then((posts) => {
      this.props.filterCategory(this.props.match.params.category)
      this.props.updatePosts(posts)
    })
  }

  render () {
    return (
      <div>

        <div className="list-posts-title">
          <h1>Readable Project</h1>
        </div>

        <LeftOrderOptions/>

        <div className="row">
        <RightDetailsOptions/>
        <PostsListCat category={this.props.match.params.category}/>
        </div>

        <div className="footer">
            <p>Udacity Readable - Posted by: &copy;Jokin 2017</p>
            <p>Contact information: joaernesto33@gmail.com.</p>
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

export default connect(mapStateToProps,mapDispatchToProps)(CategoryView)
