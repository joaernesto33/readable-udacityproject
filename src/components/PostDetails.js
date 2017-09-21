import React, { Component } from 'react'
import RightDetailsOptions from './RightDetailsOptions'

export default class PostDetails extends Component {
  render () {
    return (
      <div>
        <h2>This is PostDetails component</h2>
        <a>Related comments</a>
        <RightDetailsOptions/>
      </div>
    )
  }  
}
