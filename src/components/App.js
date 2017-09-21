import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../App.css';
import DefaultView from './DefaultView'
import CategoryView from './CategoryView'
import PostForm from './PostForm'
import PostDetails from './PostDetails'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Readable Project</h2>
        </div>

        <div>
          <Route exact path = "/" render = {() => (
            <DefaultView store={this.props.store}/>
          )}/>

          <Route exact path = "/categoryview" render = {() => (
            <CategoryView/>
          )}/>

          <Route exact path = "/postform" render = {() => (
            <PostForm/>
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
