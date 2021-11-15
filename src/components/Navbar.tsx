import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { APP_URL } from "constants/urls/url";
import { logout } from "slices/AuthSlice";
import {NavbarProps} from "constants/typesdefine/interfaces";


class NavBar extends React.Component<NavbarProps> {
  constructor(props: NavbarProps) {
    super(props);
  }

  onButtonClick = () => {
    localStorage.clear();
    this.props.dispatch(logout());
  };

  render() {
    return (
      <nav>
        <div className="nav-container">
          <h2>GitHub Viewer</h2>
          <ul className="nav-bar">
            <Link className="search-button" to={APP_URL.PROFILE_VIEWER}>
              <li>Search</li>
            </Link>
            {this.props.user ? (
              <div>
                <Link to={APP_URL.SUGGESTIONS}>
                  <li>Suggestions</li>
                </Link>
                <Link to={APP_URL.MY_PROFILE}>
                    <li>Home</li>
                </Link>
                <li onClick={this.onButtonClick}>Logout</li>
              </div>
            ) : (
              <Link to={APP_URL.HOME}>
                <li>Login</li>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(NavBar);
