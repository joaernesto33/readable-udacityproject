import React, { Component } from 'react'
import { connect } from 'react-redux'
import { orderPosts } from '../actions'

class LeftOrderOptions extends Component {
  render () {
    return (
      <div className="sidenav">
        <button onClick={(e)=>this.props.updateSort("voteScore")}>Order by voteScore</button>
        <button onClick={(e)=>this.props.updateSort("timeStamp")}>Order by timestamp</button>
        <button onClick={(e)=>this.props.updateSort("alfabethical")}>Order alfabethical</button>
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
