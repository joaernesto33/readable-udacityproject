import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GeneralPostControls extends Component {
  render () {
    return (
      <pre>
        <mark>Votes {this.props.votes} </mark>
        <em>Total comments </em>
        <Link to = "/postdetail">Show post details</Link>
      </pre>
    )
  }
}
