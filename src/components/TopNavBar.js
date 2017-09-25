import React, { Component } from 'react'

export default class TopNavBar extends Component {
  render () {
    return (
      <div>
        <div className="topnav">
          <a href="#">Home</a>
          <a href="#">Add new post</a>
          <a href="#">About</a>
        </div>
      </div>
    )
  }
}
