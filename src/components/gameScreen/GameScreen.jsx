import React, {useState} from 'react';
import Header from './Header/Header';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import './GameScreen.scss';
import WordZone from './WordZone/WordZone';

export default function GameScreen(){
    const [gameScores, setGameScores] = useState([]);
    const [score, setScore] = useState(0);
    const [gameNumber, setGameNumber] = useState(1);
    const [showWordZone, setShowWordZone] = useState(false);

    const handleEndGame = () => {
        if(gameScores.length > 6) {
            gameScores.shift();
        }
        setGameScores([...gameScores, { gameNumber, score }]);
        setGameNumber(gameNumber + 1);
        setShowWordZone(false);
    }    

    return(
        <div>
            <Header />
            {
                showWordZone ?
                    <div className="row">
                        <div className="col-lg-2 score-board mt-5">
                            {/*<ScoreBoard gameScores={gameScores}/>*/}
                        </div>
                        <div className="col-lg-10 mt-5">
                            <WordZone handleEndGame={handleEndGame}/>
                        </div>
                    </div>
                    :
                    <div className="row">
                    </div>
            }
        </div>   
    );
}