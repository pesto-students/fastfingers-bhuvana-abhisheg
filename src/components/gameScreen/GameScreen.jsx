import React, { useEffect, useState } from "react";
import {getDataFromLocalStorage} from '../../common/utils';
import UserLogo from '../../assets/images/person.svg';
import GamepadLogo from '../../assets/images/gamepad.svg';
import './GameScreen.scss';

export default function GameScreen(props){
    const username = getDataFromLocalStorage('username');
    const difficultylevel = getDataFromLocalStorage('difficultylevel');
    useEffect(() => {
        fetch("/data/dictionary.json",{
            headers : {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            }
        }).then(response =>{
            return response.json();
        }).then(response => {
            const data = response;
        });
    }, []);
    return(
        <div>
            <div className="row mt-3">
                <div className="col-lg-2">
                    <img src={UserLogo} alt="User" 
                    style={{width: '60px',height: '23px'}}/>
                    <span className="player-name">{username.toUpperCase()}</span>                   
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
                    <span className="player-name">LEVEL:{difficultylevel.toUpperCase()}</span>
                </div>
                <div className="col-lg-6">
                </div>
                <div className="col-lg-3 score text-right">
                    <span>SCORE:</span>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 score-board mt-5">
                </div>
                <div className="col-lg-9 mt-5">
                    <div className="row justify-content-center">
                        Timer
                    </div> 
                    <div className="row justify-content-center mb-4">
                     Random Word
                    </div> 
                    <div className="row justify-content-center">
                    User Input
                    </div> 
                </div>
            </div>
        </div>
    );
}