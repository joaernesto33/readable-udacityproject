import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../App.css';
import DefaultView from './DefaultView'
import CategoryView from './CategoryView'
import PostForm from './PostForm'
import PostDetails from './PostDetails'
import PostFormUpdate from './PostFormUpdate'


class App extends Component {

  render() {
    return (
      <div className="App">

        <div>
          <Route exact path = "/" component = {DefaultView}/>

          <Switch>
            <Route exact path = "/postform" component = {PostForm}/>

            <Route exact path = "/postupdate/:post_id" component = {PostFormUpdate}/>

            <Route exact path = "/:category" component = {CategoryView}/>
          </Switch>

          <Route exact path = "/:category/:post_id" component = {PostDetails}/>
        </div>

      </div>
    );
  }
}

export default App;
