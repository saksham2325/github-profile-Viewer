import React from "react";


interface State {
    value: string;
}

interface Props {
    onSearchSubmit: (arg1: string)=> void;
}


class SearchBar extends React.Component<Props, State> {

    constructor(props:Props){
        super(props);

        this.state = {
            value: ""
        }
    }

    onFormSubmit = (e: any) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.value);
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder="Search User"
                        value={this.state.value}
                        type="text"
                        onChange={e => this.setState({ value: e.target.value })}
                    ></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }

}

export default SearchBar;
