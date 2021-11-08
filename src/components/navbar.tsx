import React from 'react'
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render () {
        return (
            <div className="nav-bar">
                <nav className="nav">
                    <div className="logo"> <img src="#" alt="logo" /></div>
                    <h2>My App</h2>
                    <ul className="nav-links">
                        <div className="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Suggestions</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
