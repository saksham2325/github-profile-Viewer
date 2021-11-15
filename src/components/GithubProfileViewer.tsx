import React from "react";

import { GithubProfileViewerState } from "constants/typesdefine/interfaces";
import SearchBar from "components/SearchBar";
import SocialCard from "components/SocialCard";

let searchSubmit: boolean = false;

class GithubProfileViewer extends React.Component<
  {},
  GithubProfileViewerState
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      username: "",
    };
  }

  onSearchSubmit = (val: string) => {
    searchSubmit = true;
    this.setState({ username: val });
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {searchSubmit && <SocialCard username={username} />}
      </div>
    );
  }
}

export default GithubProfileViewer;
