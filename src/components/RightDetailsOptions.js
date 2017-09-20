import React from 'react'
import { Link } from 'react-router-dom'

export default function RightDetailsOptions () {
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
