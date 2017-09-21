import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GeneralPostControls extends Component {
  render () {
    return (
      <div>
        <p>          
          <Link to = "/postdetail">Show post details</Link>
        </p>
      </div>
    )
  }
}
