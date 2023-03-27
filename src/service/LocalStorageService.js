import { LSTOKEN } from "../constants";

export const setLocalStorageService = (p) => {
  localStorage.setItem(LSTOKEN, JSON.stringify(p)); //string =>json
};

export const getLocalStorageService = () => {
  return JSON.parse(localStorage.getItem(LSTOKEN)); //json => string
};


export const removeLocalStorageService = () => {
  localStorage.removeItem(LSTOKEN);


}
