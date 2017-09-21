import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostForm extends Component {
  render () {
    return (
      <div>
        <h2>This is the update-create form</h2>
        <br></br>
        <br></br>
        <button>
          <Link to = "/">Cancel</Link>
        </button>
        <button>
          <Link to = "/">Save</Link>
        </button>
      </div>
    )
  }  
}
