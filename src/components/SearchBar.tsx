import React from "react";

import { APP_ERRORS } from "constants/errors/error";
import {
  SearchBarProps,
  SearchBarState,
} from "constants/typesdefine/interfaces";

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      value: "",
    };
  }

  onFormSubmit = (event: any) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Search User"
            value={value}
            type="text"
            onChange={(e) => this.setState({ value: e.target.value })}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
