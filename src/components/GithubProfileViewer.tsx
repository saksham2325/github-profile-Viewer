import React from "react";

import SocialCard from './SocialCard';
import SearchBar from './SearchBar';


interface State {
    userName: string;
}

class GithubProfileViewer extends React.Component<{},State> {

    constructor(props: {}) {
        super(props);

        this.state = {
            userName: "",
        };
    }

    onSearchSubmit = (val: string) => {
        console.log("saksham");
        this.setState({ userName : val });
        // console.log(this.state.userName);
    }

    render() {
        return (
            <div>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                {
                // this.state.userName && 
                <SocialCard username={this.state.userName}/>
                }
            </div>
        );
    }
}

export default GithubProfileViewer;
