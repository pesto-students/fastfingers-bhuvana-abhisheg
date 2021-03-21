import React, { useState } from "react";
import KeyboardLogo from '../../assets/images/keyboard.svg';
import PlayLogo from '../../assets/images/play.svg';
import {saveDataToLocalStorage} from '../../common/utils';
import "./Login.scss";

export default function Login(){
    const [username, setUsername] = useState("");
    const [difficultylevel, setDifficultylevel] = useState('1');
    const [showValidationError, setShowValidationError] = useState(false);

    const showGameScreen = (event) => {
        event.preventDefault();
        if(username.length === 0)
            setShowValidationError(true);
        if(showValidationError)
            return;
        saveDataToLocalStorage('username',username);
        saveDataToLocalStorage('difficultylevel',difficultylevel);        
        window.history.pushState({}, "", '/game-screen');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return(
        <div className="container">
            <img src={KeyboardLogo} alt="keyboard" className="gamepad-logo"/>
            <div className="header">
                fast fingers
            </div>
            <div className="row justify-content-center header1">
                <span className="line1"></span>
                the ultimate typing game
                <span className="line2"></span>
            </div>
            <form id="form" onSubmit={showGameScreen}>
                <div className="row justify-content-center mb-3 mt-3">
                    <input type="text"
                            aria-label="Type Username" 
                            placeholder="TYPE YOUR NAME" 
                            name="uname" value={username}
                            onChange={e => setUsername(e.target.value)}
                            required />
                    { showValidationError ? <span className="validation-error">Please enter username</span> : ''}
                </div>
                <div className="row justify-content-center mb-3 mt-3">
                    <select aria-label="Select difficulty level in the game"
                        onChange={e => setDifficultylevel(e.target.value)}
                        value={difficultylevel}>
                        <option value="1">EASY</option>
                        <option value="1.5">MEDIUM</option>
                        <option value="2">HARD</option>
                    </select>    
                </div>
                <div className="start-button" onClick={showGameScreen}>
                    <div className="row justify-content-center align-items-center">
                        <img src={PlayLogo} alt="Play"/>
                        <span>START GAME</span>
                    </div>                    
                </div>
            </form>
        </div>
    );
}