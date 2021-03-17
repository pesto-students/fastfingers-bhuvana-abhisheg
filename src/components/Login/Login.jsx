import React, { useState } from "react";
import KeyboardLogo from '../../assets/images/keyboard.svg';
import PlayLogo from '../../assets/images/play.svg';
import "./Login.scss";

export default function Login(props){
    const [username, setUsername] = useState("");
    const [difficultylevel, setDifficultylevel] = useState("easy");
    const showGameScreen = (event) => {
        event.preventDefault();
        //window.location.pathname = '/GameScreen';
        //window.location.href = '/game-screen';
        window.history.pushState({}, "", '/game-screen');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        console.log('showGameScreen called...',username);
        console.log('showGameScreen called...',difficultylevel);
    }
    return(
        <div className="container">
            <div className="row justify-content-center logo">
                <img src={KeyboardLogo} alt="keyboard"/>
            </div>
            <div className="row justify-content-center header">
                fast fingers
            </div>
            <div className="row justify-content-center header1">
                <span className="line1"></span>
                the ultimate typing game
                <span className="line2"></span>
            </div>
            <div className="container">
         <form id="form" onSubmit={showGameScreen}>
             <div className="row mb-3">
                 <input type="text" className="form-control" id="uname" 
                     placeholder="TYPE YOUR NAME" 
                     name="uname" value={username}
                     onChange={e => setUsername(e.target.value)}
                     required />
             </div>
             <div className="row mb-3">
                 <select className="form-select" 
                     aria-label="Select difficulty level in the game"
                     onChange={e => setDifficultylevel(e.target.value)}
                     value={difficultylevel}>
                     <option value="easy">EASY</option>
                     <option value="medium">MEDIUM</option>
                     <option value="hard">HARD</option>
                 </select>
             </div>
             <div className="row">
                 <img src={PlayLogo} alt="Play"/>
                 <button type="button" 
                         className="btn" onClick={showGameScreen}>
                     START GAME
                 </button>
             </div> 
         </form>
         </div>
        </div>
    );
}