import React from 'react';
import {getDataFromLocalStorage} from '../../../common/utils';
import UserLogo from '../../../assets/images/person.svg';
import GamepadLogo from '../../../assets/images/gamepad.svg';
import './Header.scss';

export default function Header(props) {
    const username = getDataFromLocalStorage('username');
    const difficultylevel = getDataFromLocalStorage('difficultylevel');

    return(
        <div className="header-container">
             <div className="row mt-3">
                <div className="col-lg-2">
                    <img src={UserLogo} alt="User" 
                    style={{width: '60px',height: '23px'}}/>
                    <span className="player-name text-uppercase">{username}</span>                   
                </div>
                <div className="col-lg-6">
                </div>
                <div className="col-lg-3 fast-fingers text-right">
                    <span>fast fingers</span>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <img src={GamepadLogo} alt="Gamepad" 
                    style={{width: '40px',height: '23px',marginRight: '5px',marginLeft: '11px'}}/>
                    <span className="player-name text-uppercase">LEVEL:{difficultylevel}</span>
                </div>
                <div className="col-lg-5">
                </div>
                <div className="col-lg-3 score text-right">
                    <span>SCORE:</span>
                </div>
            </div>
        </div>        
    );
}