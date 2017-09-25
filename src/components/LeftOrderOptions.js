import React, { Component } from 'react'

export default class LeftOderOptions extends Component {
  render () {
    return (
      <div className="sidenav">
        <a href="#">
          Order by voteScore
        </a>
        <a href="#">
          Order by timestamp
        </a>
        <a href="#">
          Order alfabethical
        </a>
      </div>
    )
  }
}
