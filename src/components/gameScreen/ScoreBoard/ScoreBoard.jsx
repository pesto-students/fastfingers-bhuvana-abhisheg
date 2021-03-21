import React from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.scss';

export default function ScoreBoard({ gameScores }){
    const content = gameScores.map( (gameScore, index) => {
        return <p key={index} className="game-score">Game { index+1 } : { gameScore }</p>
    });
    return(
        <div>
            <div className="text-center score-board-header">
                SCORE BOARD
            </div>
            { content }
        </div>        
    );
}

ScoreBoard.propTypes ={
    gameScores:  PropTypes.array
}