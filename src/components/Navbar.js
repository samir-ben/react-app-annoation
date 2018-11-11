import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav className="">
                <div className="container nav-wrapper  ">
                    <Link to="/" className="brand-logo">QVI<span style={{color:'#039BE5' }}>e</span>W</Link>
                    <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink exact to="/">Sass</NavLink></li>
                        <li><NavLink exact to="/">Components</NavLink></li>
                        <li><NavLink exact to="/">Javascript</NavLink></li>
                        <li><NavLink exact to="/">Mobile</NavLink></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><NavLink exact to="/">Sass</NavLink></li>
                <li><NavLink exact to="/">Components</NavLink></li>
                <li><NavLink exact to="/">Javascript</NavLink></li>
                <li><NavLink exact to="/">Mobile</NavLink></li>
            </ul>
        </div>
    );
};

export default withRouter(Navbar);