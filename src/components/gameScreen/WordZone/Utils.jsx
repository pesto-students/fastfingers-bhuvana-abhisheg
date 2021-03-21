import WordsCollection from '../../../assets/data/dictionary.json';

const EASY_DIFFICULTY_WORDARR = WordsCollection.filter(word => word.length <= 4);
const MEDIUM_DIFFICULTY_WORDARR = WordsCollection.filter(word => word.length >= 5 && word.length <= 8);
const HARD_DIFFICULTY_WORDARR = WordsCollection.filter(word => word.length > 8);
const EASY_DIFFICULTY_FACTOR = 1;
const MEDIUM_DIFFICULTY_FACTOR = 1.5;
const HARD_DIFFICULTY_FACTOR = 2;
const MINIMUM_TIMELIMIT = 2;

const getRandomIndex = array => Math.floor(Math.random() * array.length);

export const getRandomWord = (difficultyLevel) => {
    if(difficultyLevel < 1.5){
        return EASY_DIFFICULTY_WORDARR[getRandomIndex(EASY_DIFFICULTY_WORDARR)];
    } else if(difficultyLevel > 1.5 && difficultyLevel < 2){
        return MEDIUM_DIFFICULTY_WORDARR[getRandomIndex(MEDIUM_DIFFICULTY_WORDARR)];
    } else {
        return HARD_DIFFICULTY_WORDARR[getRandomIndex(HARD_DIFFICULTY_WORDARR)];
    }
}

export const getMaxTime = (randomWord, difficultyLevel) => {
    let maxTime = 0;
    switch(difficultyLevel){
        case 'easy':
            maxTime = Math.ceil(randomWord.length/EASY_DIFFICULTY_FACTOR);
            return maxTime > MINIMUM_TIMELIMIT ? maxTime : MINIMUM_TIMELIMIT;
        case 'medium':
            maxTime = Math.ceil(randomWord.length/MEDIUM_DIFFICULTY_FACTOR);
            return maxTime > MINIMUM_TIMELIMIT ? maxTime : MINIMUM_TIMELIMIT;
        case 'hard':
            maxTime = Math.ceil(randomWord.length/HARD_DIFFICULTY_FACTOR);
            return maxTime > MINIMUM_TIMELIMIT ? maxTime : MINIMUM_TIMELIMIT;
        default:
            return maxTime;
    }
}
