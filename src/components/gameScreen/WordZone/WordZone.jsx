import React, { useState, useEffect } from 'react';
import './WordZone.scss';
import CircleTimer from './CircleTimer/CircleTimer';
import ProtoTypes from "prop-types";
import { getRandomWord } from './Utils';
import {getDataFromLocalStorage} from '../../../common/utils';

export default function WordZone({ handleEndGame }){
    const [difficultyLevel, setDifficultyLevel] = useState(Number(getDataFromLocalStorage('difficultylevel')));
    const [randomWord, setRandomWord] = useState('');    
    const [maxTime, setMaxTime] = useState(-1);
    const [inputWord, setInputWord] = useState('');

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
        const maxTime = Math.ceil(randomWord.length / difficultyLevel);
        setRandomWord(randomWord);
        setMaxTime(maxTime);
    }

    useEffect(() => {
        setTargetWord();
    },[]);

    return(
        <div className="word-zone">
            <CircleTimer maxTime={maxTime} key={randomWord} handleEndGame={handleEndGame}/>
            <p className="random-word text-uppercase mt-3">{randomWord}</p>
            <input type="text" value={inputWord} onChange={handleInputWordChange} />
        </div>
    )
}

WordZone.protoTypes = {
    handleEndGame : ProtoTypes.func.isRequired
}