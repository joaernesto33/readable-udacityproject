import React, { Component } from 'react'
import GeneralPostControls from './GeneralPostControls'
import { getPosts } from '../actions/index'
import * as PostAPI from '../utils/SeverAPI'


export default class PostsList extends Component {
  componentDidMount () {
    PostAPI.getPosts().then((posts) => {
      console.log(`POSTS: ${posts}`);
      this.props.store.dispatch(getPosts(posts))
      let teststore = this.props.store.getState()
      let res = Object.values(teststore)
      console.log(`State : ${this.props.store.getState()}`)
      console.log(`TestStore : ${teststore}`)
      console.log(`RESARRAY : ${res}`)
      console.log(`ELEMENT : ${res[0].title}`)
    })
  }

  render() {
    return(
      <div>
        <p>
          Epa!
        </p>
        <GeneralPostControls/>
      </div>
    )
  }
}
