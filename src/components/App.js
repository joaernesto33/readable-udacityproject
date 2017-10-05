import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../App.css';
import DefaultView from './DefaultView'
import CategoryView from './CategoryView'
import PostForm from './PostForm'
import PostDetails from './PostDetails'
import PostFormUpdate from './PostFormUpdate'
import { Link } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div className="App">

        <div>
          <Route exact path = "/" render = {( ) => (
            <DefaultView />
          )}/>

          <Route exact path = "/:category" render = {() => (
            <CategoryView/>
          )}/>

          <Route exact path = "/postform" render = {() => (
            <PostForm/>
          )}/>

          <Route exact path = "/postupdate" render = {() => (
            <PostFormUpdate/>
          )}/>

          <Route exact path = "/:category/:post_id" render = {() => (
            <PostDetails/>
          )}/>
        </div>

      </div>
    );
  }
}

export default App;
