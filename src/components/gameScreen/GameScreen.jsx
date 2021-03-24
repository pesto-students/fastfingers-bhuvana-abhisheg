import React, { useState} from 'react';
import Header from './Header/Header';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import './GameScreen.scss';
import WordZone from './WordZone/WordZone';
import { formatTime } from '../../components/gameScreen/WordZone/CircleTimer/Utils';
import PlayLogo from '../../assets/images/play-again.svg';
import StopLogo from '../../assets/images/stop.svg';

export default function GameScreen(){
    const [gameScores, setGameScores] = useState([]);
    const [score, setScore] = useState(0);
    const [gameNumber, setGameNumber] = useState(1);
    const [showWordZone, setShowWordZone] = useState(true);

    const handleEndGame = () => {
        if(gameScores.length > 6) {
            gameScores.shift();
        }
        setGameScores([...gameScores, { gameNumber, score: (score * 1000) }]);
        setGameNumber(gameNumber + 1);
        setShowWordZone(false);           
    }

    const handlePlayAgain = () => {
        setShowWordZone(true);
    }

    const hanldeQuitGame = () => {
        localStorage.clear();
        window.history.pushState({}, "", '/');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    const handleScoreChange = (currentScore) => {
        setScore(currentScore);
    }

    return(
        <div className="game-container">
            <Header showWordZone={showWordZone} onScoreChange={handleScoreChange}/>
            {
                showWordZone ?
                    <div className="row">
                        <div className="col-lg-2 score-board mt-5 ml-4">
                            <ScoreBoard gameScores={gameScores}/>
                        </div>
                        <div className="col-lg-8 mt-5">
                            <WordZone handleEndGame={handleEndGame}/>
                        </div>
                    </div>
                    :
                    <div className="row justify-content-center align-items-center">
                        <div className="mt-5">
                            <div className="text-white score-heading">
                                SCORE : GAME {gameNumber - 1}
                            </div>
                            <div className="text-white game-score text-center">
                                { formatTime(score * 1000, "mm:ss") }
                            </div>
                            {
                                Math.max(...gameScores.map(({ score }) => { return score })) < score ?
                                    <p className="text-white p-0 m-0 high-score">New High Score</p>
                                    : ''
                            }
                            <div className="play-again mt-4 ml-5" onClick={handlePlayAgain}>
                                <div className="row">
                                    <img src={PlayLogo} alt="Play Again"/>
                                    <span>PLAY AGAIN</span>
                                </div>                    
                            </div>
                        </div>
                    </div>
            }
            {
                showWordZone ?
                    <div className="row footer">
                        <div className="stop-game" onClick={handleEndGame}>
                            <img src={StopLogo} alt="Stop Game" style={{verticalAlign:'bottom'}}/>
                            <span>STOP GAME</span>
                        </div>
                    </div> :
                    <div className="row px-5 footer">
                        <p className="quit-game">
                            <span onClick={hanldeQuitGame}>QUIT</span>
                        </p>
                    </div>
            }
        </div>   
    );
}