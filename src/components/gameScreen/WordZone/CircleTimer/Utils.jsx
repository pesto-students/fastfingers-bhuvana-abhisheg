const FULL_DASH_ARRAY = 283;

export function calculateTimeFraction(timeLeft, maxTime) {
  const rawTimeFraction = timeLeft / maxTime;
  return (rawTimeFraction - (1 / maxTime) * (1 - rawTimeFraction)) * FULL_DASH_ARRAY;
}

export function formatTime(time, format = "ss:ms") {
  let minutes = Math.floor(time / 1000 / 60);
  let seconds = Math.floor(time / 1000);
  let miliseconds = (time % 1000) / 10;  
  if(seconds % 60 === 0){
    seconds = 0;
  }
  if(seconds > 60) {
    seconds = Math.floor(seconds % 60);
  }  
  if (format === "mm:ss") {
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds
      }`;
  }
  else {
    return `${seconds < 10 ? `0${seconds}` : seconds}:${miliseconds < 10 ? `0${miliseconds}` : miliseconds
      }`;
  }
}