import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RightDetailsOptions extends Component {
  render () {
    return (
      <div>
        <p>
          <Link to = "/">index</Link>
        </p>
        <a>
          <Link to = "categoryview">category</Link>
        </a>
      </div>
    )
  }
}
