import { Component } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import {Icon} from 'react-materialize';
import './navbar.css'
class Nav extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper black">
                        <Link to="/"><span className="logo left"></span></Link>
                        <span className="sidenav-trigger hide-on-large-only right" data-target="slide-out"><Icon>menu</Icon></span>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link className="white-text"  to="/about">About</Link></li>
                                <li><Link className="white-text" to="/login">Login</Link></li>
                                <li><Link className="white-text" to="/register">Register</Link></li>
                                <li><Link className="white-text" to="/contact">Contact</Link></li>
                                
                            </ul>
                    </div>
                </nav>
                <ul className="sidenav white" id="slide-out">
                    <li><Link className="sidenav-close black-text" to="/about">About</Link></li>
                    <li><Link className="sidenav-close black-text" to="/login">Login</Link></li>
                    <li><Link className="sidenav-close black-text" to="/register">Register</Link></li>
                    <li><Link className="sidenav-close black-text" to="/contact">Contact</Link></li>         
                </ul>
        </div>
        );
    }
}
export default Nav;