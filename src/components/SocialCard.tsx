import React from "react";

import { connect } from "react-redux";

import { ERRORS } from "constants/constant";
import {
  SocialCardProps,
  SocialCardState,
} from "constants/typesdefine/interfaces";
import ProfileService from "services/ProfileService";
import { setProfileError, removeProfileError } from "slices/ErrorSlice";

class SocialCard extends React.Component<SocialCardProps, SocialCardState> {
  public static defaultProps = {
    username: "",
    dispatch: "",
    error: "",
  };
  constructor(props: SocialCardProps) {
    super(props);

    this.state = {
      loading: true,
      data: {
        username: "",
        avatar: "",
        location: "",
        bio: "",
        githubUrl: "",
        blog: "",
        email: "",
        following: 0,
        followers: 0,
      },
    };
  }

  

  setUserDetail = async () => {
    const { username, dispatch } = this.props;
    try {
      dispatch(removeProfileError());
      const data = await ProfileService(this.props.username);
      const {
        login,
        avatar_url,
        location,
        bio,
        html_url,
        blog,
        email,
        following,
        followers,
      } = data;
      this.setState({
        loading: false,
        data: {
          username: login,
          avatar: avatar_url,
          location: location,
          bio: bio,
          githubUrl: html_url,
          blog: blog,
          email: email,
          following: following,
          followers: followers,
        },
      });
    } catch (event: any) {
      dispatch(setProfileError(event.message));
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.setUserDetail();
  }

  componentDidUpdate(prevProps: SocialCardProps) {
    if (this.props.username !== prevProps.username) {
      this.setState({ loading: true });
      this.setUserDetail();
    }
  }

  render() {
    const {
      username,
      avatar,
      location,
      bio,
      githubUrl,
      blog,
      email,
      following,
      followers,
    } = this.state.data;
    if (this.state.loading)
      return <h1 className="profile-loading">Loading!!!</h1>;
    return this.props.error ? (
      <div className="error">
        <h3>{this.props.error}</h3>
      </div>
    ) : (
      <div className="details-container">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="user-details">
          <p>Username: {username}</p>
          <p>Location: {location ? location : ERRORS.NOT_AVAILABLE}</p>
          <p>Email: {email ? email : ERRORS.NOT_AVAILABLE}</p>
          <p>Github: {githubUrl}</p>
          <p>Bio: {bio ? bio : ERRORS.NOT_AVAILABLE}</p>
          <p>Blog: {blog ? blog : ERRORS.NOT_AVAILABLE}</p>
          <p>Following: {following}</p>
          <p>Followers: {followers}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  error: state.error.profileError,
});

export default connect(mapStateToProps)(SocialCard);
