import React from 'react'
import PostsList from './PostsList'
import { Link } from 'react-router-dom'

export default function DefaultView () {
  return (
    <div>
      <h2>This is DefaultView Component</h2>
      <button>
        <Link to = "/postform">Add Post!</Link>
      </button>
      <PostsList/>
    </div>
  )
}
