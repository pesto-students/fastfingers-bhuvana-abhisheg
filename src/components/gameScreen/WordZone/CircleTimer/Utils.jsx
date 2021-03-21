/*export const formatTime = (time) => {
    let seconds = Math.floor(time / 1000);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    let milliseconds = Math.round((time % 1000) / 10);
    if (milliseconds < 10) {
        milliseconds = `0${milliseconds}`;
    }
    return `${seconds}:${milliseconds}`;
}*/

export const calculateTimeFraction = (remainingTime, maxTime) => {
    return remainingTime / maxTime;
}

export function formatTime(time) {
    const minutes = Math.floor(time / 60);
  
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    return `${minutes}:${seconds}`;
  }