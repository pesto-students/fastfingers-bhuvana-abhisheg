import React, { Component } from "react";
import PlayLogo from '../../assets/images/play.svg';

export default function LoginForm({showGameScreen, handleDifficultyChange, handleUserNameChange}) {
    return(
        <div class="container">
            <form id="form" onSubmit={showGameScreen}>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="uname" 
                        placeholder="TYPE YOUR NAME" 
                        name="uname" value={userName}
                        onChange={props.handleUserNameChange}
                        required />
                </div>
                <div class="row mb-3">
                    <select class="form-select" 
                        aria-label="Select difficulty level in the game"
                        onChange={handleDifficultyChange}>
                        <option value="easy">EASY</option>
                        <option value="medium" selected>MEDIUM</option>
                        <option value="hard">HARD</option>
                    </select>
                </div>
                <div class="row">
                    <img src={PlayLogo} alt="Play"/>
                    <button type="button" 
                            class="btn" onClick={props.showGameScreen}>
                        START GAME
                    </button>
                </div> 
            </form>
        </div>
    )
}