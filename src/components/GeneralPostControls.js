import React from 'react'
import { Link } from 'react-router-dom'

export default function GeneralPostControls () {
  return (
    <div>
      <a>
        <Link to = "/postdetail">Show post details</Link>
      </a>
    </div>
  )
}
