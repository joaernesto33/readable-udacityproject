import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DefaultView from './DefaultView'


export default class CategoryView extends Component {
  render () {
    return (
      <div>
        <h3>This is CategoryView</h3>
        <DefaultView/>
        <br></br>
        <a>
          <Link to = "/">Go to index view</Link>
        </a>
      </div>
    )
  }  
}
