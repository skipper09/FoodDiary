import React, { Component } from 'react';
import './header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h1 className="main-head">Food Diary</h1>
                    <p className="subhead">Your daily food intake tracker</p>
                </div>
                <div className="header-nav">
                    <ul className="header-ul">
                        <li className="header-li">About</li>
                        <li className="header-li">Sign Up</li>
                        <li className="header-li">Log In</li>
                    </ul>
                </div>
            </div>
            )
    }
}