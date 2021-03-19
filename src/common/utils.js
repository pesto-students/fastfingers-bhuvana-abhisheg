export const saveDataToLocalStorage = (key,value)=>
    localStorage.setItem(key,JSON.stringify(value));

export const getDataFromLocalStorage = (key) =>
 key && JSON.parse(localStorage.getItem(key));