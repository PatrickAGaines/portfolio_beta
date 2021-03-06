import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext.js';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const{ page, toggleContact } = useContext(MyContext);

    const homeStyle = {
        fontWeight: page.home ? "bold" : "normal"
    }

    const aboutStyle = {
        fontWeight: page.about ? "bold" : "normal",
        color: "#333"
    }
    
    const projectsStyle = {
        fontWeight: page.projects ? "bold" : "normal",
        color: "#333"
    }

    const contactStyle = {
        margin: "0rem",
        color: "#333"
    }

    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container">
                <div><i className="fa fa-cog" aria-hidden="true"></i></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink style={homeStyle} to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={aboutStyle} to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={projectsStyle} to="/projects" className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <p style={contactStyle} className="nav-link nav-contact" onClick={toggleContact}>Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;