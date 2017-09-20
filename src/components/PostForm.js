import React from 'react'
import { Link } from 'react-router-dom'

export default function PostForm () {
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
