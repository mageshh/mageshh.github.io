import React from "react";
import './Title.css';
import chelseaLogo from '../../assets/chelsea_logo.png';
import joystick from '../../assets/Right Stick Click.png';
import githubPic from '../../assets/githubPng.png';
import linkedinPic from '../../assets/linkedIn_logo.png';
import emailPic from '../../assets/emailLogo.png';

class Title extends React.Component {
    render() {
        return(
            <div class="Title">
                <div class="top-left">
                    <div class="chelsea-club">
                        <img alt="My favorite club" class="chelsea-club-logo" src={chelseaLogo}></img>
                    </div>
                    <div class="top-left-name">
                        <span class="my-name">HARYSH MAGESH</span>
                    </div>
                </div>

                <div class = "top-right">
                    <div class = "rs-section">
                        <img alt="Right Stick" class="rs-pic" src={joystick}></img>
                    </div>
                    <div class = "top-right-panel">
                        <div class="links-section">
                            <span class="img1-right">
                                <a href="https://github.com/mageshh" target="_blank" rel="noreferrer">
                                    <img src={githubPic} alt="My GitHub" style={{width: "33px", height: "33px"}} />
                                </a>
                            </span>
                            <span class="img2-right">
                                <a href="https://www.linkedin.com/in/harysh-magesh/" target="_blank" rel="noreferrer">
                                    <img src={linkedinPic} alt="My LinkedIn" style={{width: "33px", height: "33px"}} />
                                </a>
                            </span>
                            <span class="img3-right">
                                <a href="mailto:harysh2024@gmail.com" target="_blank" rel="noreferrer">
                                    <img src={emailPic} alt="My Email" style={{width: "33px", height: "33px"}} />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Title;