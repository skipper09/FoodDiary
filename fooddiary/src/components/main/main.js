import React, { Component } from 'react';
import './main.css';

export class Main extends Component {
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
                            <i class="fas fa-arrow-circle-down"></i>
                        </a>
                    </div>
                </div>
                <div id="about-section">
                    <div id="about-1">
                        About 1
                    </div>
                    <div id="about-2">
                        About 2
                    </div>
                    <div id="about-3">
                        About 3
                    </div>
                    <div className="about-button">
                        <a href="#sign-up-section">
                            <i class="fas fa-arrow-circle-down"></i>
                        </a>
                    </div>
                </div>
                <div id="sign-up-section">
                    Sign Up Here Div
                </div>
            </div>
            )
    }
}