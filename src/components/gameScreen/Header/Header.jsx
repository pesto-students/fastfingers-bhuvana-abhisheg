import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {getDataFromLocalStorage} from '../../../common/utils';
import UserLogo from '../../../assets/images/person.svg';
import GamepadLogo from '../../../assets/images/gamepad.svg';
import { formatTime } from '../../../components/gameScreen/WordZone/CircleTimer/Utils';
import './Header.scss';

export default function Header({ showWordZone, onScoreChange }) {
    const username = getDataFromLocalStorage('username');
    const difficultyLevel = Number(getDataFromLocalStorage('difficultylevel'));
    const [score, setScore] = useState(0);

    let difficultyLevelText = '';
    if(difficultyLevel === 1){
        difficultyLevelText = 'EASY';
    } else if(difficultyLevel === 1.5){
        difficultyLevelText = 'MEDIUM';
    } else {
        difficultyLevelText = 'HARD';
    }

    useEffect(() => {
        if (showWordZone) {
            const timeout = setInterval(() => {
                setScore(score + 1);
                onScoreChange(score + 1);
            }, 1000);

            return () => {
                clearInterval(timeout);
            }
        }
        else {
            setScore(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score, showWordZone]);

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
                    <span className="player-name text-uppercase">LEVEL:{difficultyLevelText}</span>
                </div>
                <div className="col-lg-5">
                </div>
                <div className="col-lg-3 score text-right">
                    {
                        showWordZone ? <span>SCORE: {formatTime(score * 1000, "mm:ss")}</span> : ''
                    }                    
                </div>
            </div>
        </div>        
    );
}

Header.propTypes = {
    showWordZone: PropTypes.bool.isRequired,
    onScoreChange: PropTypes.func.isRequired
}

Header.defaultProps = {
    showWordZone: false
}