import React, { useState, useEffect } from 'react';
import CircleTimer from './CircleTimer/CircleTimer';
import RandomWord from './RandomWord/RandomWord';
import { getRandomWord } from './Utils';
import {getDataFromLocalStorage} from '../../../common/utils';
import ProtoTypes from "prop-types";
import './WordZone.scss';

export default function WordZone({ handleEndGame }){
    const [difficultyLevel, setDifficultyLevel] = useState(Number(getDataFromLocalStorage('difficultylevel')));
    const [randomWord, setRandomWord] = useState('');    
    const [maxTime, setMaxTime] = useState(-1);
    const [inputWord, setInputWord] = useState('');
    const inputWordRef = React.createRef();

    const handleInputWordChange = (e) => {
        setInputWord(e.target.value);
        if (randomWord.toLowerCase() === e.target.value.toLowerCase()) {
            setInputWord('');           
            setDifficultyLevel(difficultyLevel+0.01);
            setTargetWord();            
        }
    }

    const setTargetWord = () => {
        const randomWord = getRandomWord(difficultyLevel);
        const maxTime = Math.ceil(randomWord.length / difficultyLevel) * 1000;
        setRandomWord(randomWord);
        setMaxTime(maxTime > 2000 ? maxTime : 2000);
    }

    useEffect(() => {
        setTargetWord();
        if (inputWordRef.current) {
            inputWordRef.current.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div className="word-zone">
            <CircleTimer maxTime={maxTime} key={randomWord} handleEndGame={handleEndGame}/>
            <RandomWord randomWord={randomWord} inputWord={inputWord}/>
            <input type="text" className="user-input "value={inputWord} onChange={handleInputWordChange} ref={inputWordRef}/>
        </div>
    )
}

WordZone.protoTypes = {
    handleEndGame : ProtoTypes.func.isRequired
}