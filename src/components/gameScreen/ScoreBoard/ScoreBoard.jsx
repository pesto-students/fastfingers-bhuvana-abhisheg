import React from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.scss';
import { formatTime } from '../../../components/gameScreen/WordZone/CircleTimer/Utils';

export default function ScoreBoard({ gameScores }){
    const bestScore = Math.max(...gameScores.map(({ score }) => { return score }));    
    const content = gameScores.map(({ gameNumber, score }) => {
        return (
            <div key={gameNumber}>
                {
                    score === bestScore ?
                        <p className="p-0 m-0 personal-best">PERSONAL BEST</p>
                        : ''
                }
                <p className="score-board-items mb-1">Game {gameNumber}  : {formatTime(score, "mm:ss")}</p>
            </div>
        );
    });
    return(
        <div>
            <div className="text-center score-board-header p-3">
                SCORE BOARD
            </div>
            { content }
        </div>        
    );
}

ScoreBoard.propTypes ={
    gameScores:  PropTypes.array
}