import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import {APP_URL} from "./urls/url";
import GithubProfileViewer from './components/GithubProfileViewer'
import Login from './components/login';
import MyProfile from './components/MyProfile';
import Navbar from './components/navbar'


class App extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path={APP_URL.HOME}><Login/></Route>
          <Route path={APP_URL.PROFILE_VIEWER}><GithubProfileViewer/></Route>
          <Route path={APP_URL.MY_PROFILE}><MyProfile/></Route>
        </Switch>  
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
