import React, { Component } from 'react'
import { connect } from 'react-redux'
import { orderPosts } from '../actions'

class LeftOrderOptions extends Component {


  render () {
    return (
      <div className="textright">
        Sort by:
        <span>
          <select defaultValue="timeStamp" onChange={(event) => this.props.updateSort(event.target.value)}>
            <option value="none" disabled>Order by...</option>
            <option value="timeStamp">Order by voteScore</option>
            <option value="alfabethical">Order by timestamp</option>
            <option value="voteScore">Order alfabethical</option>
          </select>
        </span>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    updateSort: (data) => dispatch(orderPosts(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftOrderOptions);
