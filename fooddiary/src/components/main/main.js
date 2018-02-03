import React, { Component } from 'react';
// import { Header } from '../header/header.js';
import './main.css';
import SignUpModal from '../signUpModal/signUpModal';
import LogInModal from '../logInModal/logInModal';
import AboutDiv from '../aboutDiv/aboutDiv'

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    render() {
        return (
            <div className="content">
                <div id="hero-slider">
                    <h2 className="hero-title">
                        <span id="highlight">Food Diary</span>
                    </h2>
                    <p><span id="highlight">Your daily food tracker</span></p>
                    <p>
                        <span id="highlight">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima alias aut repellat iure, architecto sapiente eaque modi, inventore praesentium facere assumenda ad, aliquam et temporibus quae! Quam numquam distinctio magnam quaerat? Magni, nemo sit fuga praesentium optio. Dolorum temporibus autem ab deleniti magni quasi aut tenetur vitae doloribus non aliquid illo consectetur error ad natus, repellat sit facere quisquam commodi soluta obcaecati. Repellendus est id recusandae reprehenderit, cupiditate et quo possimus exercitationem illo ducimus quaerat praesentium, officiis facere nisi repellat eligendi nihil numquam blanditiis labore! Repellendus magnam assumenda nulla reiciendis iure, neque. Deleniti ut officiis, accusamus magnam illum nostrum.
                    </span>
                    </p>
                    <div className="hero-button">
                        <a href="#about-section">
                            <i className="fas fa-arrow-circle-down"></i>
                        </a>
                    </div>
                </div>
                <div id="about-section">

                    <AboutDiv id="about-1" title="Easy to Use"/>
                    <AboutDiv id="about-2" title="Reliable Data"/>
                    <AboutDiv id="about-3" title="Save to Your Profile"/>

                    <div className="about-button">
                        <a href="#sign-up-section">
                            <i className="fas fa-arrow-circle-down"></i>
                        </a>
                    </div>
                </div>
                <div id="sign-up-section">
                    <div id="sign-up-div">
                        <div id="sign-up-img">
                            <img src="http://via.placeholder.com/300x300" alt="placeholder" />
                        </div>
                        <div id="sign-up-btns">
                            <h1>Sign Up</h1>
                            <SignUpModal />
                            <p>Already a member?</p>
                            <LogInModal />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}