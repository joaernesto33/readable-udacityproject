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
          <Route exact path = "/" render = {( ) => (
            <DefaultView />
          )}/>

          <Switch>
            <Route exact path = "/postform" component = {PostForm}/>

            <Route exact path = "/postupdate" component = {PostFormUpdate}/>

            <Route exact path = "/:category" render = {() => (
              <CategoryView/>
            )}/>
        </Switch>


          <Route exact path = "/:category/:post_id" render = {() => (
            <PostDetails/>
          )}/>
        </div>

      </div>
    );
  }
}

export default App;
