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
          <Route exact path = "/" render = {( props ) => (
            <DefaultView props={props}/>
          )}/>

          <Route exact path = "/categoryview" render = {() => (
            <CategoryView/>
          )}/>

          <Route exact path = "/postform" render = {() => (
            <PostForm/>
          )}/>

          <Route exact path = "/postupdate" render = {() => (
            <PostFormUpdate/>
          )}/>

          <Route exact path = "/postdetail" render = {() => (
            <PostDetails/>
          )}/>
        </div>      

      </div>
    );
  }
}

export default App;
