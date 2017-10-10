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
            <option value="none" disabled>Ascendent order by...</option>
            <option value="timeStamp">Order by TimeStamp</option>
            <option value="alfabethical">Order by Title</option>
            <option value="voteScore">Order by VoteScore</option>
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
