import React from "react";
import './Title.css';
import chelseaLogo from '../../assets/chelsea_logo.png'

class Title extends React.Component {
    render() {
        return(
            <div class="Title">
                <div class="top-left">
                    <div class="chelsea-club">
                        <img alt="My favorite club" class="chelsea-club-logo" src={chelseaLogo}></img>
                    </div>
                    <div class="top-left-name">
                        <span class="my-name">Harysh Magesh</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Title;