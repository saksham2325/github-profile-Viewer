import React from "react";
import { connect } from "react-redux";

import ProfileService from '../services/ProfileService';
import { setProfileError, removeProfileError } from "../slices/ErrorSlice";


interface Props {
    username: string;
    dispatch: any,
    error: string,
}

interface State {
    // loading: boolean;
    data: {
        username: string | number;
        avatar: string;
        location: string;
        bio: string;
        githubUrl: string;
        blog: string;
        email: string | number;
        following: number;
        followers: number;
    }
}


class SocialCard extends React.Component<Props,State> {

    constructor(props:Props) {
        super(props);

        this.state = {
            // loading: true,
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
            }
        };
    }

    setUserDetail = async () => {
        try {
            this.props.dispatch(removeProfileError());
            const data = await ProfileService(this.props.username);
            this.setState({
                // loading: false,
                data: {
                    username: data.login,
                    avatar: data.avatar_url,
                    location: data.location,
                    bio: data.bio,
                    githubUrl: data.html_url,
                    blog: data.blog,
                    email: data.email,
                    following: data.following,
                    followers: data.followers,
                }
            });
        }
        catch (e: any) {
            this.props.dispatch(setProfileError(e.message));
            // this.setState({ loading: false });
        }
    }

    componentDidMount() {
        this.setUserDetail();
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.username !== prevProps.username) {
            // this.setState({ loading: true });
            this.setUserDetail();
        }
    }

    render() {
        return (
            this.props.error ? <h3>{this.props.error}</h3> :
                <div className="details-container">
                    <div className="avatar">
                        <img src={this.state.data.avatar} alt="avatar"/>
                    </div>
                    <div className="user-details">
                        <p>Username: {this.state.data.username ? this.state.data.username : "NA"}</p>
                        <p>Location: {this.state.data.location ? this.state.data.location : "NA"}</p>
                        <p>Email: {this.state.data.email ? this.state.data.email : "NA"}</p>
                        <p>Github: {this.state.data.githubUrl}</p>
                        <p>Bio: {this.state.data.bio ? this.state.data.bio : "NA"}</p>
                        <p>Blog: {this.state.data.blog ? this.state.data.blog : "NA"}</p>
                        <p>Following: {this.state.data.following}</p>
                        <p>Followers: {this.state.data.followers}</p>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    error: state.error.profileError,
});

export default connect(mapStateToProps)(SocialCard);
