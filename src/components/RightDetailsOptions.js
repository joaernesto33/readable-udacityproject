import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RightDetailsOptions extends Component {
  render () {
    return (
      <div className="column left">
        <div className="vertical-menu">
          <Link to = "/">Go to default view</Link>

          <br></br>
          <br></br>
          <div className="center">Add a new post!</div>
          <div className="open-addform">
            <Link to = "/postform">Add Post</Link>
          </div>

        </div>
      </div>
    )
  }
}
