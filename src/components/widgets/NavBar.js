import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {/* Laptop screen */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse laptop-navbar">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active dropdown">
                            <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Screenshots</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        </ul>
                    </div>
                </nav>



                {/* mobile screen */}

                <div className="mobile-navbar">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <img src='images/svg/menu.svg' alt="app-store" height="25px"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">

                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        </ul>
                        
                    </div>

                </div>
  
            </div>
        )
    }
}

export default NavBar;