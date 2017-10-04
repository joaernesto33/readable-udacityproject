import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RightDetailsOptions extends Component {
  render () {
    return (
      <div className="column left">
        <div className="vertical-menu">
          <Link to = "/">Go to default view</Link>
          <Link to = "categoryview">Go to category view</Link>
        </div>
      </div>
    )
  }
}
