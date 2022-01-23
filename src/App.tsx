import { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { APP_URL } from "constants/urls/url";
import "App.css";
import GithubProfileViewer from "components/GithubProfileViewer";
import Login from "components/Login";
import { LoginUser, selectUser } from "slices/AuthSlice";
import MyProfile from "components/MyProfile";
import NavBar from "components/Navbar";
import Suggestions from "components/Suggestions";


const App = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      if (username && password) {
       dispatch(LoginUser (username,password));
      }
    }
  }, []);

  return (
    <div className="profile-page">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={APP_URL.HOME}>
            <Login />
          </Route>
          <Route path={APP_URL.PROFILE_VIEWER}>
            <GithubProfileViewer />
          </Route>
          <Route path={APP_URL.MY_PROFILE}>
            <MyProfile />
          </Route>
          <Route path={APP_URL.SUGGESTIONS}>
            <Suggestions />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
